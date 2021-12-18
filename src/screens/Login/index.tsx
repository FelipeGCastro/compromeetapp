import React, { useEffect, useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import theme from '../../global/styles/theme'
import { useAuth } from '../../hooks/auth'
import * as Google from 'expo-auth-session/providers/google'
import {
  Container,
  ContainerBackground,
  LogoImageSvg,
  ButtonsContainer,
  SigninButton,
  SigninIcon,
  SigninText
} from './styles'

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { signInWithGoogle } = useAuth()

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true)
      signInWithGoogle()
    } catch (error) {
      console.log('Não foi possivel conectar a conta Google', error)
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <ContainerBackground />
      <LogoImageSvg />
      <ButtonsContainer>
        <SigninButton onPress={handleSignInWithGoogle}>
          <SigninIcon />
          <SigninText>Entrar com Google</SigninText>
        </SigninButton>

        {isLoading && (
          <ActivityIndicator color={theme.colors.attention} size="large" />
        )}
      </ButtonsContainer>
    </Container>
  )
}
