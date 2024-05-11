import React, { useState } from "react";
import { ActivityIndicator, Alert } from "react-native";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RFValue } from "react-native-responsive-fontsize";
import { useTheme } from "styled-components";
import { useForm } from "react-hook-form";

import GoogleSvg from '../../assets/google.svg';
import LogoSvg from '../../assets/logo.svg';

import { useAuth } from "../../hooks/auth";

import { SignInSocialButton } from "../../components/SignInSocialButton";

import {
    Container,
    Header,
    TitleWrapper,
    Title,
    Form,
    Footer,
    FooterWrapper,
    Fields
} from './styles';
import { InputForm } from "../../components/Form/InputForm";
import { Button } from "../../components/Form/Button";

interface FormData {
    [email: string]: any;
}

const schema = Yup.object().shape({
    email: Yup.string().email().required('Informe o e-mail.'),
    password: Yup.string().required('Informe a senha.')
});

export function SignIn() {
    const [isLoading, setIsLoading] = useState(false);
    const { signIn } = useAuth();

    const theme = useTheme();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: yupResolver(schema) });

    async function handleSignIn(form: FormData) {
        try {
            setIsLoading(true);
            return await signIn(form.email, form.password);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
            Alert.alert('Não foi possível conectar a conta Google.');
        }
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(68)}
                    />
                    <Title>
                        Controle suas {'\n'}
                        finanças de forma {'\n'}
                        muito simples
                    </Title>
                </TitleWrapper>
            </Header>
            <Form>
                <Fields>
                    <InputForm
                        name="email"
                        control={control}
                        placeholder="e-Mail"
                        autoCorrect={false}
                        error={errors.email && errors.email.message}
                    />
                    <InputForm
                        name="password"
                        control={control}
                        placeholder="Senha"
                        autoCorrect={false}
                        secureTextEntry={true}
                        error={errors.password && errors.password.message}
                    />
                </Fields>
                
            </Form>
            <Footer>
                <Button title="Entrar" onPress={handleSubmit(handleSignIn)}/>
                {/* <FooterWrapper>
                    <SignInSocialButton 
                        title="Entrar com o Google"
                        svg={GoogleSvg}
                        onPress={() => {}}
                    />
                </FooterWrapper> */}

                { isLoading && <ActivityIndicator color={theme.colors.shape} style={{ marginTop: 18 }} />}
            </Footer>
        </Container>
    );
}