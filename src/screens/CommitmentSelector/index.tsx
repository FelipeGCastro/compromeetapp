import { useNavigation } from '@react-navigation/core'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'
import { useMeet } from '../../hooks/meet'
import { api } from '../../services/api'
import { commitmentsData } from '../Home/temp'
import { Commitment } from './components/Commitment'

import { Container, CommitmentList } from './styles'

type CommitmentType = {
  id: number
  text: string
  isPublic: boolean
  user_id: number
  user: {
    id: number
    name: string
    username: string
    avatar_url: string
  }
}
export const CommitmentSelector = () => {
  const [commitments, setCommitments] = useState<CommitmentType[]>([])
  const navigation = useNavigation()
  const { addCommitment } = useMeet()

  useEffect(() => {
    const getFavoritesCommitments = async () => {
      try {
        const result = await api.get('my-commitments')
        setCommitments(result.data)
      } catch (error) {}
    }
    getFavoritesCommitments()
  }, [])

  function handlePressCommitment(commitment: CommitmentType) {
    addCommitment(commitment)
    navigation.navigate('CommitmentScreen' as never)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens title="Adicionar dos Favoritos" noButton />
        <CommitmentList
          showsVerticalScrollIndicator={false}
          data={commitments}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Commitment onPress={handlePressCommitment} commitment={item} />
          )}
        />
      </Container>
    </SafeAreaView>
  )
}
