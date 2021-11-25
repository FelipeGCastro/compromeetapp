import React from 'react'
import { BoldText } from '../../../components/CommitmentCard/styles'

import { CommitmentFixedContainer, CommitmentText } from './styles'

const CommitmentFixed = (props: { text: string }) => {
  return (
    <CommitmentFixedContainer>
      <CommitmentText>
        <BoldText>"</BoldText>
        {props.text}
        <BoldText>"</BoldText>
      </CommitmentText>
    </CommitmentFixedContainer>
  )
}

export default CommitmentFixed
