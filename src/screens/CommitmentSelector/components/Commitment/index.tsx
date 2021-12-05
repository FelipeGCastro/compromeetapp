import React from 'react'
import { UserMini } from '../../../../components/UserCard/UserMini'

import { ContentWrapper, CommitmentText, BoldText } from './styles'

type CommitmentType = {
  id: number
  text: string
  isPublic: boolean
  user_id: number
  user: {
    id: number
    avatar_url: string
    name: string
    username: string
  }
}

interface CommitmentProps {
  onPress: (comm: CommitmentType) => void
  commitment: CommitmentType
}

export const Commitment = ({ commitment, onPress }: CommitmentProps) => {
  return (
    <ContentWrapper onPress={() => onPress(commitment)}>
      <UserMini user={commitment.user} />
      <CommitmentText>
        <BoldText>"</BoldText>
        {commitment.text}
        <BoldText>"</BoldText>
      </CommitmentText>
    </ContentWrapper>
  )
}
