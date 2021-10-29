import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login'
import { useAuth } from '../hooks/auth'
import { MenuRoutes } from './menu.routes'
import { CreateCommitment } from '../screens/CreateCommitment'

const { Navigator, Screen } = createStackNavigator()

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="createCommitment" component={CreateCommitment}></Screen>
      <Screen name="menu" component={MenuRoutes}></Screen>
    </Navigator>
  )
}

export function PublicRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signin" component={Login}></Screen>
    </Navigator>
  )
}

export function AppRoutes() {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      <PrivateRoutes />
      {/* {user.id ? <PrivateRoutes /> : <PublicRoutes />} */}
    </NavigationContainer>
  )
}
