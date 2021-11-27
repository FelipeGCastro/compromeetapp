import React from 'react'
import { View } from 'react-native'

import {
  Container,
  UserImageContainer,
  UserImage,
  UserInfoContainer,
  UserName,
  UserUsername
} from './styles'

interface IUser {
  id: number
  name: string
  username: string
  avatar_url: string
}
interface UserProps {
  user: IUser
}

const User = ({ user }: UserProps) => {
  return (
    <Container>
      <UserImageContainer>
        <UserImage source={{ uri: user.avatar_url }} />
      </UserImageContainer>
      <UserInfoContainer>
        <UserName>{user.name}</UserName>
        <UserUsername>@{user.username}</UserUsername>
      </UserInfoContainer>
    </Container>
  )
}

export default User
