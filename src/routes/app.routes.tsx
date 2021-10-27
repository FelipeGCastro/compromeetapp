import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Explore } from '../screens/Explore'
import { Notifications } from '../screens/Notifications'
import { Profile } from '../screens/Profile'

const Tab = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="profile"
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'home') {
              return <AntDesign name="heart" size={size} color={color} />
            } else if (route.name === 'explore') {
              return (
                <MaterialIcons name="explore" size={size + 2} color={color} />
              )
            } else if (route.name === 'notifications') {
              return <FontAwesome name="bell" size={size} color={color} />
            } else if (route.name === 'profile') {
              return <FontAwesome name="user" size={size + 2} color={color} />
            }

            // You can return any component that you like here!
          },
          tabBarActiveTintColor: '#E8DC68',
          tabBarInactiveTintColor: '#B3DB6E'
        })}
      >
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="explore" component={Explore} />
        <Tab.Screen name="notifications" component={Notifications} />
        <Tab.Screen name="profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
