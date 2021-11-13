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
    user?: {
      name: string
      avatarUrl: string
    }
    commitmentTime?: string
    commitmentOrder?: string
    text: string
    toAccept?: boolean
  }
}
export const NotificationCard = ({ data }: INotificationCardProps) => {
  return (
    <Container>
      {data.user?.avatarUrl ? (
        <>
          <UserImage avatarUrl={data.user?.avatarUrl} />
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
