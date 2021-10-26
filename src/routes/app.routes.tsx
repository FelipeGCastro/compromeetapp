import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import BackgroundGradient from '../components/BackgroundGradient'
import { Home } from '../screens/Home'

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BackgroundGradient />
      <Text>Profile!</Text>
    </View>
  )
}
function NotificationScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BackgroundGradient />
      <Text>Notifications!</Text>
    </View>
  )
}
function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BackgroundGradient />
      <Text>Explore!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        <Tab.Screen name="explore" component={ExploreScreen} />
        <Tab.Screen name="notifications" component={NotificationScreen} />
        <Tab.Screen name="profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
