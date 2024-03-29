import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core'
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
import moment from 'moment'
import { useAuth } from '../../hooks/auth'
import { useNotifications } from '../../hooks/notifications'

interface ICommitmentPlan {
  id: number
  commitment_id: number
  commitment: {
    id: number
    isPublic: boolean
    user_id: number
    text: string
    favorites: number
    commitmentFavorite: {
      id?: number
      user_id?: number
    }[]
  }
  invites: number
  frequency?: string
  status: string
  timestamp: string
  user_id: number
  user: {
    id: number
    name: string
    username: string
    avatar_url: string
  }
  index: number
  image_url?: string
}
interface CommitmentCardProps {
  noLabel?: boolean
  noUser?: boolean
  noFooter?: boolean
  commitmentPlan: ICommitmentPlan
}

export const CommitmentPlanCard = ({
  commitmentPlan,
  noFooter,
  noLabel,
  noUser
}: CommitmentCardProps) => {
  const [isFavorite, setIsFavorite] = useState(
    commitmentPlan.commitment.commitmentFavorite?.length > 0 || false
  )
  const [expanded, setExpanded] = useState(false)
  const [favorites, setFavorites] = useState(
    commitmentPlan.commitment.favorites
  )
  const [favoriteId, setFavoriteId] = useState(
    commitmentPlan.commitment.commitmentFavorite &&
      commitmentPlan.commitment.commitmentFavorite[0]?.id
  )
  const navigation = useNavigation()
  const { setInviteMeet } = useNotifications()

  function handleCardPress() {
    setInviteMeet({ ...commitmentPlan, inviteId: 0 })
    navigation.navigate('CommitmentInvite' as never)
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
      console.log('Problema', 'Error ao atualizar favorite')
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
          {!!commitmentPlan.invites && (
            <FriendContainer>
              <FriendIcon />
              <FriendText>{commitmentPlan.invites}</FriendText>
            </FriendContainer>
          )}
          {commitmentPlan.timestamp && (
            <DateAndTimeContainer>
              <ClockIcon />
              <DateAndTimeText>
                {moment(commitmentPlan.timestamp).format('dddd, DD/MM  HH:MM')}
              </DateAndTimeText>
            </DateAndTimeContainer>
          )}

          {/* <CloseButton onPress={handlePress}>
            <CloseIcon />
          </CloseButton> */}
        </Footer>
      )}
    </Container>
  )
}
