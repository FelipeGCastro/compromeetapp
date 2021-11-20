import { useNavigation } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/auth';


export const Logout = () => {
    const { signOut } = useAuth()
    const { navigate } = useNavigation()
    useEffect(() => {
        signOut()
        navigate({ name: 'signin' as never, params: undefined as never})
    }, [])
  return <ActivityIndicator />;
}
