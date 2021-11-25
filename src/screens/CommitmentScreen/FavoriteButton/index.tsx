import React from 'react'

import {
  AddCommitmentButton,
  AddCommitmentIcon,
  AddCommitmentText
} from './styles'

export const FavoriteButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <AddCommitmentButton onPress={onPress}>
      <AddCommitmentIcon />
      <AddCommitmentText>Favoritos</AddCommitmentText>
    </AddCommitmentButton>
  )
}
