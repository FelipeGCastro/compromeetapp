import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { ThemeProvider } from 'styled-components'
import theme from './src/global/styles/theme'
import { AppRoutes } from './src/routes/app.routes'

import {
  useFonts,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
      <StatusBar style="auto" backgroundColor="#93F26D" />
    </ThemeProvider>
  )
}
