import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import BackgroundGradient from '../../components/BackgroundGradient'
import theme from '../../global/styles/theme'
import { useAuth } from '../../hooks/auth'

import {
  Container,
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
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel conectar a conta Google')
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <BackgroundGradient percentage={90} />
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
