import React, { createContext, ReactNode, useContext, useState, useEffect } from "react";
import uuid from 'react-native-uuid'
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name?: string | null;
    email: string;
    photo?: string | null;
}

interface IAuthContextData {
    user: User;
    signIn(email: string, password: string): Promise<void>;
    signOut(): Promise<void>;
    userStorageLoading: boolean;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User>({} as User);
    const [userStorageLoading, setUserStorageLoading] = useState(true);

    const userStorageKey = '@proFinance:user';

    async function signIn(email: string, password: string) {
        try {
            const userLogged = {
                id: uuid.v4().toString(),
                email: email,
                name: null,
                photo: null
            };

            setUser(userLogged);
            await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
        } catch (error) {
            throw new Error(error as string);
        }
    }

    async function signOut() {
        setUser({} as User);
        await AsyncStorage.removeItem(userStorageKey);
    }

    useEffect(() => {
        async function loadUserStorageDate() {
            const userStoraged = await AsyncStorage.getItem(userStorageKey)

            if (userStoraged) {
                const userLogged = JSON.parse(userStoraged) as User;
                setUser(userLogged);
            }
            
            setUserStorageLoading(false);
        }

        loadUserStorageDate();
    }, []);

    return (
        <AuthContext.Provider 
            value={{
                user,
                signIn,
                signOut,
                userStorageLoading
            }}
        >
            { children }
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}


export { AuthContext, AuthProvider, useAuth };