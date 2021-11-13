import React from 'react'
import { View } from 'react-native'

import { UserContainer, UserImage, UserName } from './styles'

interface UserMiniProps {
  user: {
    user_id: string
    avatarUrl: string
    name: string
  }
}

export const UserMini = ({ user }: UserMiniProps) => {
  return (
    <UserContainer>
      <UserImage source={{ uri: user.avatarUrl }} />
      <UserName>{user.name}</UserName>
    </UserContainer>
  )
}
