import React, { useState } from 'react'
import {
  ActivityIndicator,
  ActivityIndicatorComponent,
  Alert
} from 'react-native'
import BackgroundGradient from '../../components/BackgroundGradient'
import theme from '../../global/styles/theme'
import { useAuth } from '../../hooks/auth'

import {
  Container,
  Logo,
  ButtonsContainer,
  SigninButton,
  SigninIcon,
  SigninText,
  SigninIconApple
} from './styles'

export const Login: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { signInWithGoogle, signInWithApple } = useAuth()

  async function handleSignInWithGoogle() {
    try {
      setIsLoading(true)
      await signInWithGoogle()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel conectar a conta Google')
    } finally {
      setIsLoading(false)
    }
  }
  async function handleSignInWithApple() {
    setIsLoading(true)
    try {
      await signInWithApple()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel conectar a conta Apple')
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <Container>
      <BackgroundGradient percentage={90} />
      <Logo />
      <ButtonsContainer>
        <SigninButton onPress={handleSignInWithGoogle}>
          <SigninIcon />
          <SigninText>Entrar com Google</SigninText>
        </SigninButton>
        {/* <SigninButton onPress={handleSignInWithApple}>
          <SigninIconApple />
          <SigninText>Entrar com Apple</SigninText>
        </SigninButton> */}
        {isLoading && (
          <ActivityIndicator color={theme.colors.attention} size="large" />
        )}
      </ButtonsContainer>
    </Container>
  )
}
