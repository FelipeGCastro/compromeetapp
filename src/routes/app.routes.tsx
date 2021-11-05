import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login'
import { useAuth } from '../hooks/auth'
import { MenuRoutes } from './menu.routes'
import { CommitmentScreen } from '../screens/CommitmentScreen'
import { PeopleSelector } from '../screens/PeopleSelector'
import { CommitmentSelector } from '../screens/CommitmentSelector'

const { Navigator, Screen } = createStackNavigator()

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="menu" component={MenuRoutes}></Screen>
      <Screen name="CommitmentScreen" component={CommitmentScreen}></Screen>
      <Screen name="PeopleSelector" component={PeopleSelector}></Screen>
      <Screen name="CommitmentSelector" component={CommitmentSelector}></Screen>
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
