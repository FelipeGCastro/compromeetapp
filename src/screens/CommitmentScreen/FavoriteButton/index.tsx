import React from 'react'

import {
  AddCommitmentButton,
  AddCommitmentIcon,
  AddCommitmentText
} from './styles'
type FavoriteProps = {
  onPress: () => void
  hasFixedText: boolean
}
export const FavoriteButton = ({ onPress, hasFixedText }: FavoriteProps) => {
  return (
    <AddCommitmentButton onPress={onPress}>
      <AddCommitmentIcon />
      {!hasFixedText && <AddCommitmentText>Favoritos</AddCommitmentText>}
    </AddCommitmentButton>
  )
}
