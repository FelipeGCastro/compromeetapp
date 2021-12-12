import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons'

import { Home } from '../screens/Home'
import { Explore } from '../screens/Explore'
import { Notifications } from '../screens/Notifications'
import { Profile } from '../screens/Profile'
import theme from '../global/styles/theme'
import Favorites from '../screens/Favorites'

const Tab = createBottomTabNavigator()

export function MenuRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'home') {
            return <FontAwesome name="th-list" size={size} color={color} />
          } else if (route.name === 'favorites') {
            return <AntDesign name="heart" size={size} color={color} />
          } else if (route.name === 'explore') {
            return (
              <MaterialIcons
                style={{ marginBottom: 0 }}
                name="explore"
                size={size + 22}
                color={focused ? color : theme.colors.link}
              />
            )
          } else if (route.name === 'notifications') {
            return <FontAwesome name="bell" size={size} color={color} />
          } else if (route.name === 'profile') {
            return <FontAwesome name="user" size={size + 2} color={color} />
          }

          // You can return any component that you like here!
        },
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.primary
      })}
    >
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="favorites" component={Favorites} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  )
}
