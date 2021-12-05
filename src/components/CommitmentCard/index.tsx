import { useNavigation } from '@react-navigation/core'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Alert } from 'react-native'
import { useMeet } from '../../hooks/meet'
import { api } from '../../services/api'
import { UserMini } from '../UserCard/UserMini'
import { ImageCard } from './components/ImageCard'

import {
  Container,
  HeaderInfoContainer,
  Label,
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
  UploadButton,
  UploadIcon,
  UploadsNumber,
  CloseButton,
  CloseIcon
} from './styles'

interface ICommitment {
  id: number
  text: string
  user_id: number
  favorites: number
  isPublic: boolean
  meets?: number
  index?: number
  user?: {
    id: number
    name: string
    avatar_url: string
    username: string
  }
  commitmentFavorite: {
    id?: number
    user_id?: number
  }[]
}
interface CommitmentCardProps {
  noLabel?: boolean
  noUser?: boolean
  noFooter?: boolean
  commitment: ICommitment
  deleteButton?: boolean
}

export const CommitmentCard = ({
  commitment,
  noFooter,
  noLabel,
  noUser,
  deleteButton
}: CommitmentCardProps) => {
  const [isFavorite, setIsFavorite] = useState(
    commitment.commitmentFavorite?.length > 0 || false
  )
  const [favorites, setFavorites] = useState(commitment.favorites)
  const [favoriteId, setFavoriteId] = useState(
    commitment.commitmentFavorite && commitment.commitmentFavorite[0]?.id
  )
  const navigation = useNavigation()
  const { addCommitment } = useMeet()
  function handlePressDelete() {
    Alert.alert('Tem certeza?', 'Quer eliminar', [
      {
        onPress: () => {},
        style: 'cancel',
        text: 'cancelar'
      },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: () => deleteCommitment()
      }
    ])
  }

  async function deleteCommitment() {
    try {
      const result = await api.delete(`commitment/${commitment.id}`)
    } catch (error) {}
  }

  function handleUsePress() {
    addCommitment(commitment)
    navigation.navigate('CommitmentScreen' as never)
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
          commitmentId: commitment.id
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
          {!noLabel && commitment.index !== undefined && (
            <Label>#{commitment.index + 1}</Label>
          )}

          {!noUser && commitment.user && <UserMini user={commitment.user} />}
        </HeaderInfoContainer>
        <MoreButton>
          <MoreIcon />
        </MoreButton>
      </Header>
      <ContentWrapper>
        <CommitmentTextContainer>
          <CommitmentText>
            <BoldText>"</BoldText>
            {commitment.text}
            <BoldText>"</BoldText>
          </CommitmentText>
        </CommitmentTextContainer>
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
          <UploadButton onPress={handleUsePress}>
            <UploadIcon name="upload" />
            <UploadsNumber>{commitment.meets || ''}</UploadsNumber>
          </UploadButton>
          {deleteButton && (
            <CloseButton onPress={handlePressDelete}>
              <CloseIcon />
            </CloseButton>
          )}
        </Footer>
      )}
    </Container>
  )
}
