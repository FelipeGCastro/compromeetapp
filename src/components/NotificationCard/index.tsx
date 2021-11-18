import React from 'react'
import { View } from 'react-native'
import { UserImage } from '../UserImage'

import {
  Container,
  InfoContainer,
  InfoText,
  BoldText,
  ListNumberContainer,
  ListNumber,
  CommitmentTime,
  ActionButton,
  ActionButtonText
} from './styles'

interface INotificationCardProps {
  data: {
    id: number
    user?: {
      id: number
      name: string
      avatar_url: string
    }
    commitmentTime?: string
    commitmentOrder?: string
    text: string
    toAccept?: boolean
    type: 'request' | 'invite' | 'commitment'
  }
}
export const NotificationCard = ({ data }: INotificationCardProps) => {
  return (
    <Container>
      {data.user?.avatar_url ? (
        <>
          <UserImage avatarUrl={data.user?.avatar_url} />
        </>
      ) : (
        <>
          <ListNumberContainer>
            <ListNumber>{data.commitmentOrder}</ListNumber>
            <CommitmentTime>{data.commitmentTime}</CommitmentTime>
          </ListNumberContainer>
        </>
      )}
      <InfoContainer>
        <InfoText>
          {data.user?.name && <BoldText>{data.user?.name} </BoldText>}
          {data.text}
        </InfoText>
      </InfoContainer>
      <ActionButton toAccept={data.toAccept}>
        <ActionButtonText>{data.toAccept ? 'Aceitar' : 'Ver'}</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
