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
    text: string
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
  data: ICommitmentPlans
}
const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})

const CommitmentCard = ({
  data,
  noFooter,
  noLabel,
  noUser
}: CommitmentCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [expanded, setExpanded] = useState(false)
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
      const result = await api.delete(`commitment_plans/${data.id}`)
      console.log(result)
    } catch (error) {}
  }

  function handleCardPress() {
    navigation.navigate('CommitmentScreen' as 'route', { commitmentPlan: data })
  }
  function handleImageButton(exp: boolean) {
    setExpanded(exp)
  }

  return (
    <Container>
      <Header>
        <HeaderInfoContainer>
          {!noLabel && <Label>#{data.index + 1}</Label>}
          {!noUser && data.user && <UserMini user={data.user} />}
        </HeaderInfoContainer>
        <MoreButton>
          <MoreIcon />
        </MoreButton>
      </Header>
      <ContentWrapper>
        <CommitmentTextContainer onPress={handleCardPress}>
          <CommitmentText>
            <BoldText>"</BoldText>
            {data.commitment.text}
            <BoldText>"</BoldText>
          </CommitmentText>
        </CommitmentTextContainer>
        {data.image_url && (
          <ImageCard
            expanded={expanded}
            setExpanded={handleImageButton}
            image_url={data.image_url}
          />
        )}
      </ContentWrapper>
      {!noFooter && (
        <Footer>
          <FavoriteButton onPress={() => setIsFavorite(prev => !prev)}>
            <FavoriteIcon
              active={isFavorite}
              name={isFavorite ? 'heart' : 'hearto'}
            />
            <FavoriteNumber>1k</FavoriteNumber>
          </FavoriteButton>
          <CompletedIcon />
          <FriendContainer>
            <FriendIcon />
            <FriendText>@lucas.silva.pereira...</FriendText>
          </FriendContainer>
          {data.timestamp && (
            <DateAndTimeContainer>
              <ClockIcon />
              <DateAndTimeText>
                {dateFormat.format(new Date(data.timestamp))}
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

export default CommitmentCard
