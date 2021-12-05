import React from 'react'
import { View } from 'react-native'

import { ImageContainer, UserImg } from './styles'

interface IUserImageProps {
  avatar_url: string
}

export const UserImage = ({ avatar_url }: IUserImageProps) => {
  return (
    <ImageContainer>
      <UserImg source={{ uri: avatar_url }} />
    </ImageContainer>
  )
}
