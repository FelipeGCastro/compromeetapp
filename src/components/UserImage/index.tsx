import React from 'react'
import { View } from 'react-native'

import { ImageContainer, UserImg } from './styles'

interface IUserImageProps {
  avatarUrl: string
}

export const UserImage = ({ avatarUrl }: IUserImageProps) => {
  return (
    <ImageContainer>
      <UserImg source={{ uri: avatarUrl }} />
    </ImageContainer>
  )
}
