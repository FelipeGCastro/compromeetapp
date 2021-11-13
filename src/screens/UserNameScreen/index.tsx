import React, { useState } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'
import Input from '../../components/Input'

import {
  Container,
  TextContainer,
  SubTitle,
  UserNameExist,
  MessageContainer,
  Icon
} from './styles'

export const UserNameScreen = () => {
  const [username, setUsername] = useState('')
  const [usernameExist, setusernameExist] = useState(false)
  const [usernameValid, setusernameValid] = useState(false)

  const onBlurInput = () => {
    setusernameExist(true)
  }
  const onFocusInput = () => {
    setusernameExist(false)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <ScrollView keyboardShouldPersistTaps="handled">
          <HeaderScreens
            title="Bem Vindo"
            noBackButton
            noButton={!usernameValid}
          />
          <TextContainer>
            <SubTitle>
              Seja bem vindo ao Compromeet, antes de continuar, escolha um
              username para ser mais fácil de ser identificado
            </SubTitle>
          </TextContainer>
          <Input
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            onBlur={onBlurInput}
            onFocus={onFocusInput}
          />
          {usernameExist && (
            <MessageContainer>
              <Icon name="exclamation-circle" size={14} />
              <UserNameExist>Username existente</UserNameExist>
            </MessageContainer>
          )}
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}
