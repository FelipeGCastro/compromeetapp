import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import BackgroundGradient from '../../components/BackgroundGradient'
import { CommitmentList } from '../../components/CommitmentList'
import { useMeet } from '../../hooks/meet'
import { api } from '../../services/api'

import { Container, FavoritesTitle } from './styles'

type CommitmentType = {
  id: number
  text: string
  isPublic: boolean
  favorites: number
  meets: number
  user_id: number
  user: {
    id: number
    name: string
    username: string
    avatar_url: string
  }
  commitmentFavorite: {
    id?: number
    user_id?: number
  }[]
}

const Favorites = () => {
  const [commitments, setCommitments] = useState<CommitmentType[]>([])

  useEffect(() => {
    const getFavoritesCommitments = async () => {
      try {
        const result = await api.get('my-commitments')
        setCommitments(result.data)
      } catch (error) {}
    }
    getFavoritesCommitments()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />

        <CommitmentList
          header={<FavoritesTitle>Favoritos</FavoritesTitle>}
          commitment={commitments}
          noLabel
        />
      </Container>
    </SafeAreaView>
  )
}

export default Favorites
