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
import { Logout } from '../screens/Logout'
import { navigationRef } from './rootnavigator'
import { Schedule } from '../screens/Schedule'

const { Navigator, Screen } = createStackNavigator()

export function PrivateRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="menu" component={MenuRoutes}></Screen>
      <Screen name="CommitmentScreen" component={CommitmentScreen} />
      <Screen name="PeopleSelector" component={PeopleSelector} />
      <Screen name="CommitmentSelector" component={CommitmentSelector} />
      <Screen name="schedule" component={Schedule}></Screen>
      <Screen name="logout" component={Logout} />
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
      <Screen name="logout" component={Logout} />
    </Navigator>
  )
}

export function AppRoutes() {
  const { user } = useAuth()
  return (
    <NavigationContainer ref={navigationRef}>
      {user.username ? <PrivateRoutes /> : <PublicRoutes />}
    </NavigationContainer>
  )
}
