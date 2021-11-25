import React from 'react'

import {
  ImageContainer,
  ImageSelected,
  DeleteButton,
  DeleteButtonIcon
} from './styles'
interface CommitmentImageProps {
  image: string
  setImage: (img: string) => void
}
export const CommitmentImage = ({ image, setImage }: CommitmentImageProps) => {
  return (
    <ImageContainer>
      <ImageSelected source={{ uri: image }} />
      <DeleteButton onPress={() => setImage('')}>
        <DeleteButtonIcon />
      </DeleteButton>
    </ImageContainer>
  )
}
