import React from 'react'

import { ContentWrapper, CommitmentText, BoldText } from './styles'

type Commitment = {
  id: string
  text: string
}

interface CommitmentProps {
  onPress: (comm: Commitment) => void
  commitment: {
    id: string
    text: string
  }
}

export const Commitment = ({ commitment, onPress }: CommitmentProps) => {
  return (
    <ContentWrapper onPress={() => onPress(commitment)}>
      <CommitmentText>
        <BoldText>"</BoldText>
        {commitment.text}
        <BoldText>"</BoldText>
      </CommitmentText>
    </ContentWrapper>
  )
}
