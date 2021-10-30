import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Alert } from 'react-native'

import {
  Container,
  HeaderInfoContainer,
  Label,
  CompletedIcon,
  UserContainer,
  UserImage,
  UserName,
  DateAndTimeContainer,
  ClockIcon,
  DateAndTimeText,
  MoreButton,
  MoreIcon,
  Header,
  CommitmentText,
  BoldText,
  ContentWrapper,
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
interface CommitmentCardProps {
  noLabel?: boolean
  noUser?: boolean
  data: {
    id: string
    user_id: string
    user: {
      user_id: string
      avatar_url: string
      name: string
    }
    commitment: {
      id: string
      text: string
      user_id: string
      user: {
        user_id: string
        avatar_url: string
        name: string
      }
    }
    isPublic: boolean
    schedule: boolean
    date?: number | string
    frequency?: number
    index: number
  }
}
const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit'
})

const CommitmentCard = ({ data, noLabel, noUser }: CommitmentCardProps) => {
  const [isFavorite, setIsFavorite] = useState(true)
  const navigation = useNavigation<StackNavigationProp<{ route: {} }>>()
  function handlePress() {
    Alert.alert('Tem certeza?')
  }

  function handleCardPress() {
    navigation.navigate('CommitmentScreen' as 'route', { commitment: data })
  }
  return (
    <Container>
      <Header>
        <HeaderInfoContainer>
          {!noLabel && <Label>#{data.index + 1}</Label>}
          {!noUser && (
            <UserContainer>
              <UserImage source={{ uri: data.user.avatar_url }} />
              <UserName>{data.user.name}</UserName>
            </UserContainer>
          )}
        </HeaderInfoContainer>
        <MoreButton onPress={handlePress}>
          <MoreIcon />
        </MoreButton>
      </Header>
      <ContentWrapper onPress={handleCardPress}>
        <CommitmentText>
          <BoldText>"</BoldText>
          {data.commitment.text}
          <BoldText>"</BoldText>
        </CommitmentText>
      </ContentWrapper>
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
        {data.schedule && (
          <DateAndTimeContainer>
            <ClockIcon />
            <DateAndTimeText>
              {dateFormat.format(Number(data.date))}
            </DateAndTimeText>
          </DateAndTimeContainer>
        )}

        <CloseButton onPress={handlePress}>
          <CloseIcon />
        </CloseButton>
      </Footer>
    </Container>
  )
}

export default CommitmentCard
