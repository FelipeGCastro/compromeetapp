import React from 'react'
import { View } from 'react-native'

import { UserContainer, UserImage, UserName } from './styles'

interface UserMiniProps {
  user: {
    id: number
    avatar_url: string
    name: string
  }
}

export const UserMini = ({ user }: UserMiniProps) => {
  return (
    <UserContainer>
      <UserImage source={{ uri: user.avatar_url }} />
      <UserName>{user.name}</UserName>
    </UserContainer>
  )
}
