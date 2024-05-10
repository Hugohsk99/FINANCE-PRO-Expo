import React, { useEffect } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { openDatabase } from 'expo-sqlite';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import theme from './src/global/styles/theme';
import { Routes } from './src/routes';
import { AuthProvider } from './src/hooks/auth';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();
const db = openDatabase('profinance.db');

export default function App() {
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_500Medium,
        Poppins_700Bold
    });

    useEffect(() => {
        db.transaction(tx => {
            tx.executeSql(
                "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT);",
                [],
                () => {
                    console.log('Table created successfully');
                    // Insert admin user into the table
                    tx.executeSql(
                        "INSERT INTO users (username, password) VALUES (?, ?);",
                        ['admin', '123'],
                        () => console.log('User admin added successfully'),
                        (t, error) => console.log('Error adding admin user', error)
                    );
                },
                (t, error) => console.log('Error creating table', error)
            );
        });
    }, []);

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <ThemeProvider theme={theme}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            <AuthProvider>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthProvider>
        </ThemeProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
