import React from 'react'
import { Alert, View } from 'react-native'
import { api } from '../../services/api'
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
  remove: (id: number) => void
}
export const NotificationCard = ({ data, remove }: INotificationCardProps) => {
  const handlePressButton = async () => {
    if (data.toAccept) {
      try {
        console.log(data.id)
        const result = await api.put(`friendship/${data.id}`)
        console.log('Accepted invite', result.data)
        remove(data.id)
      } catch (error) {
        Alert.alert('Problemas ao aceitar pedido')
      }
    }
  }

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
      <ActionButton onPress={handlePressButton} toAccept={data.toAccept}>
        <ActionButtonText>{data.toAccept ? 'Aceitar' : 'Ver'}</ActionButtonText>
      </ActionButton>
    </Container>
  )
}
