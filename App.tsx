import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'

import 'intl'
import { Platform } from 'react-native'

if (Platform.OS === 'android') {
  // See https://github.com/expo/expo/issues/6536 for this issue.
  if (typeof (Intl as any).__disableRegExpRestore === 'function') {
    ;(Intl as any).__disableRegExpRestore()
  }
}
import 'intl/locale-data/jsonp/pt'

import {
  useFonts,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'
import { AppRoutes } from './src/routes/app.routes'
import { AuthProvider, useAuth } from './src/hooks/auth'

export default function App() {
  const [loaded] = useFonts({
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  const { userStorageloading } = useAuth()

  if (!loaded || userStorageloading) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
      <StatusBar style="auto" backgroundColor="#93F26D" />
    </ThemeProvider>
  )
}
