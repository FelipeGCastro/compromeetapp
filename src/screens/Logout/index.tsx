import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { useAuth } from '../../hooks/auth'

export const Logout = () => {
  const { signOut } = useAuth()
  useEffect(() => {
    signOut()
  }, [])
  return <ActivityIndicator />
}
