import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { useNotifications } from '../../hooks/notifications'
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
    commitmentPlanId?: number
    user?: {
      id: number
      name: string
      avatar_url: string
    }
    commitmentTime?: string
    commitmentOrder?: string
    text: string
    toAccept?: boolean
    type: 'request' | 'commitment'
  }
  remove: (id: number) => void
}
export const NotificationCard = ({ data, remove }: INotificationCardProps) => {
  const { navigate } = useNavigation()
  const { loadCommitmentPlan } = useNotifications()
  const handlePressButton = async () => {
    if (data.toAccept) {
      try {
        await api.put(`friendship/${data.id}`)
        remove(data.id)
      } catch (error) {
        console.log('Problemas ao aceitar pedido', error)
      }
    }
    if (data.type === 'commitment' && data.commitmentPlanId) {
      loadCommitmentPlan({
        commitmentPlanId: data.commitmentPlanId,
        inviteId: data.id
      })
      navigate('CommitmentInvite' as never)
    }
  }

  return (
    <Container>
      {data.user?.avatar_url ? (
        <>
          <UserImage avatar_url={data.user?.avatar_url} />
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
