import * as React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/Login'
import { useAuth } from '../hooks/auth'
import { MenuRoutes } from './menu.routes'
import { CommitmentScreen } from '../screens/CommitmentScreen'
import { PeopleSelector } from '../screens/PeopleSelector'
import { CommitmentSelector } from '../screens/CommitmentSelector'
import { UserNameScreen } from '../screens/UserNameScreen'

const { Navigator, Screen } = createStackNavigator()

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="menu" component={MenuRoutes}></Screen>
      <Screen name="CommitmentScreen" component={CommitmentScreen} />
      <Screen name="PeopleSelector" component={PeopleSelector} />
      <Screen name="CommitmentSelector" component={CommitmentSelector} />
    </Navigator>
  )
}

export function PublicRoutes() {
  const { user } = useAuth()
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {user.name ? (
        <Screen name="UserNameScreen" component={UserNameScreen} />
      ) : (
        <Screen name="signin" component={Login} />
      )}
    </Navigator>
  )
}

export function AppRoutes() {
  const { user } = useAuth()
  return (
    <NavigationContainer>
      {user.username ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
