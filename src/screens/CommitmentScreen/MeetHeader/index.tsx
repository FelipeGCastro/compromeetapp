import React from 'react'
import { useNavigation } from '@react-navigation/core'
import { FavoriteButton } from '../FavoriteButton'

import { CommitmentHeader, RemoveButton, RemoveIcon } from './styles'
import { useMeet } from '../../../hooks/meet'

const MeetHeader = ({ hasFixedText }: { hasFixedText: boolean }) => {
  const navigation = useNavigation()
  const { removeCommitment } = useMeet()

  const handleAddCommitmentPress = () => {
    navigation.navigate('CommitmentSelector' as never)
  }

  const handleRemoveCommitmentFixed = () => {
    removeCommitment()
  }

  return (
    <CommitmentHeader>
      <FavoriteButton
        hasFixedText={hasFixedText}
        onPress={handleAddCommitmentPress}
      />
      {hasFixedText && (
        <RemoveButton onPress={handleRemoveCommitmentFixed}>
          <RemoveIcon name="close" size={16} />
        </RemoveButton>
      )}
    </CommitmentHeader>
  )
}

export default MeetHeader
