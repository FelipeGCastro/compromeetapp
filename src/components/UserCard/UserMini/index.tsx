import React from 'react'

import {
  UserContainer,
  UserImage,
  NameAndUsername,
  UserName,
  UserUsername
} from './styles'

interface UserMiniProps {
  user: {
    id: number
    avatar_url: string
    name: string
    username: string
  }
  reverse?: boolean
}

export const UserMini = ({ user, reverse }: UserMiniProps) => {
  return (
    <UserContainer reverse={!!reverse}>
      <UserImage source={{ uri: user.avatar_url }} />
      <NameAndUsername reverse={!!reverse}>
        <UserName>{user.name}</UserName>
        <UserUsername>@{user.username}</UserUsername>
      </NameAndUsername>
    </UserContainer>
  )
}
