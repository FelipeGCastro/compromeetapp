import React from 'react'
import BackgroundGradient from '../../components/BackgroundGradient'

import { Container, Logo, SigninButton, SigninIcon, SigninText } from './styles'

export const Login: React.FC = () => {
  return (
    <Container>
      <BackgroundGradient />
      <Logo />
      <SigninButton>
        <SigninIcon />
        <SigninText>Entrar com Google</SigninText>
      </SigninButton>
    </Container>
  )
}
