import React, { useState } from 'react'
import { ActivityIndicator, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'
import Input from '../../components/Input'
import theme from '../../global/styles/theme'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
import MessageIcon from './MessageIcon'

import { Container, TextContainer, SubTitle } from './styles'

export const UserNameScreen = () => {
  const [username, setUsername] = useState('')
  const [usernameExist, setusernameExist] = useState(false)
  const [usernameValid, setusernameValid] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setUsername: setUsernameApi } = useAuth()

  const verifyUsername = async () => {
    try {
      const result = await api.get('username/verify', { params: { username } })
      setusernameValid(!result.data)
      setusernameExist(!!result.data)
    } catch (error) {
      console.log(error)
      Alert.alert(
        'Ocorreu algum problema ao criar o username. Tente novamente mais tarde!'
      )
    } finally {
      setLoading(false)
    }
  }
  const onBlurInput = () => {
    setLoading(true)
    verifyUsername()
  }
  const onFocusInput = () => {
    setusernameExist(false)
  }

  async function handlePressNext() {
    try {
      await setUsernameApi(username)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <ScrollView keyboardShouldPersistTaps="handled">
          <HeaderScreens
            title="Bem Vindo"
            noBackButton
            onPress={handlePressNext}
            disableButton={!usernameValid}
            buttonLabel="Seguir"
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
            autoCapitalize="none"
          />
          {usernameExist && <MessageIcon />}
          {usernameValid && <MessageIcon isPositive />}
          {loading && (
            <ActivityIndicator size="large" color={theme.colors.attention} />
          )}
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}
