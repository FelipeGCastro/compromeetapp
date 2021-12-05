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
}

export const UserMini = ({ user }: UserMiniProps) => {
  return (
    <UserContainer>
      <UserImage source={{ uri: user.avatar_url }} />
      <NameAndUsername>
        <UserName>{user.name}</UserName>
        <UserUsername>@{user.username}</UserUsername>
      </NameAndUsername>
    </UserContainer>
  )
}
