import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import CommitmentCard from '../../components/CommitmentCard'
import { HeaderScreens } from '../../components/HeaderScreens'
import { commitmentsData } from '../Home/temp'
import { Commitment } from './components/Commitment'

import { Container, Title, CommitmentList } from './styles'

type CommitmentSelectorStackParamList = {
  CommitmentSelector: {
    commitmentSelected: {
      id: string
      text: string
    }
  }
  CommitmentScreen: {
    commitmentSelected: {
      id: string
      text: string
    }
  }
}
type Props = StackScreenProps<
  CommitmentSelectorStackParamList,
  'CommitmentSelector'
>
type CommitmentType = {
  id: string
  text: string
}
export const CommitmentSelector = ({ route, navigation }: Props) => {
  function handlePressCommitment(commitment: CommitmentType) {
    navigation.navigate('CommitmentScreen', { commitmentSelected: commitment })
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens title="Adicionar dos Favoritos" noButton />
        <CommitmentList
          showsVerticalScrollIndicator={false}
          data={commitmentsData}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Commitment
              onPress={handlePressCommitment}
              commitment={item.commitment}
            />
          )}
        />
      </Container>
    </SafeAreaView>
  )
}
