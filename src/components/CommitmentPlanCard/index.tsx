import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import { api } from '../../services/api'
import { UserMini } from '../UserCard/UserMini'
import { ImageCard } from './components/ImageCard'

import {
  Container,
  HeaderInfoContainer,
  Label,
  CompletedIcon,
  DateAndTimeContainer,
  ClockIcon,
  DateAndTimeText,
  MoreButton,
  MoreIcon,
  Header,
  CommitmentText,
  BoldText,
  ContentWrapper,
  CommitmentTextContainer,
  Footer,
  FavoriteButton,
  FavoriteIcon,
  FavoriteNumber,
  FriendContainer,
  FriendIcon,
  FriendText,
  CloseButton,
  CloseIcon
} from './styles'

interface ICommitmentPlans {
  id: number
  commitment_id: number
  commitment: {
    id: number
    text: string
    favorites: number
    commitmentFavorite: {
      id?: number
      user_id?: number
    }[]
  }
  frequency?: string
  status: string
  timestamp: Date
  user_id: number
  user?: {
    id: number
    name: string
    avatar_url: string
  }
  index: number
  image_url?: string
}
interface CommitmentCardProps {
  noLabel?: boolean
  noUser?: boolean
  noFooter?: boolean
  commitmentPlan: ICommitmentPlans
}
const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})

export const CommitmentPlanCard = ({
  commitmentPlan,
  noFooter,
  noLabel,
  noUser
}: CommitmentCardProps) => {
  const [isFavorite, setIsFavorite] = useState(
    commitmentPlan.commitment.commitmentFavorite.length > 0 || false
  )
  const [expanded, setExpanded] = useState(false)
  const [favorites, setFavorites] = useState(
    commitmentPlan.commitment.favorites
  )
  const [favoriteId, setFavoriteId] = useState(
    commitmentPlan.commitment.commitmentFavorite[0]?.id
  )
  const navigation = useNavigation<StackNavigationProp<{ route: {} }>>()
  function handlePress() {
    Alert.alert('Tem certeza?', 'Quer eliminar', [
      {
        onPress: () => {},
        style: 'cancel',
        text: 'cancelar'
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => deleteCommitmentPlan()
      }
    ])
  }

  async function deleteCommitmentPlan() {
    try {
      await api.delete(`commitment_plans/${commitmentPlan.id}`)
    } catch (error) {
      console.log(error)
    }
  }

  function handleCardPress() {
    navigation.navigate('CommitmentScreen' as 'route', { commitmentPlan })
  }
  function handleImageButton(exp: boolean) {
    setExpanded(exp)
  }
  async function handlePressFavorite() {
    try {
      if (isFavorite) {
        setIsFavorite(false)
        const result = await api.delete(`commitment_favorites/${favoriteId}`)
        setFavorites(prev => prev - 1)
      } else {
        setIsFavorite(true)
        const result = await api.post('commitment_favorites', {
          commitmentId: commitmentPlan.commitment.id
        })
        setFavoriteId(result.data.id)
        setFavorites(prev => prev + 1)
      }
    } catch (error) {
      setIsFavorite(prev => !prev)
      Alert.alert('Problema', 'Error ao atualizar favorite')
    }
  }

  return (
    <Container>
      <Header>
        <HeaderInfoContainer>
          {!noLabel && <Label>#{commitmentPlan.index + 1}</Label>}
          {!noUser && commitmentPlan.user && (
            <UserMini user={commitmentPlan.user} />
          )}
        </HeaderInfoContainer>
        <MoreButton>
          <MoreIcon />
        </MoreButton>
      </Header>
      <ContentWrapper>
        <CommitmentTextContainer onPress={handleCardPress}>
          <CommitmentText>
            <BoldText>"</BoldText>
            {commitmentPlan.commitment.text}
            <BoldText>"</BoldText>
          </CommitmentText>
        </CommitmentTextContainer>
        {commitmentPlan.image_url && (
          <ImageCard
            expanded={expanded}
            setExpanded={handleImageButton}
            image_url={commitmentPlan.image_url}
          />
        )}
      </ContentWrapper>
      {!noFooter && (
        <Footer>
          <FavoriteButton onPress={handlePressFavorite}>
            <FavoriteIcon
              active={isFavorite}
              name={isFavorite ? 'heart' : 'hearto'}
            />
            <FavoriteNumber>{favorites || ''}</FavoriteNumber>
          </FavoriteButton>
          <CompletedIcon />
          <FriendContainer>
            <FriendIcon />
            <FriendText>@lucas.silva.pereira...</FriendText>
          </FriendContainer>
          {commitmentPlan.timestamp && (
            <DateAndTimeContainer>
              <ClockIcon />
              <DateAndTimeText>
                {dateFormat.format(new Date(commitmentPlan.timestamp))}
              </DateAndTimeText>
            </DateAndTimeContainer>
          )}

          <CloseButton onPress={handlePress}>
            <CloseIcon />
          </CloseButton>
        </Footer>
      )}
    </Container>
  )
}