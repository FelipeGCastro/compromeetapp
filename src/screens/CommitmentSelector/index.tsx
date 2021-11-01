import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import CommitmentCard from '../../components/CommitmentCard'
import { HeaderScreens } from '../../components/HeaderScreens'
import { commitmentsData } from '../Home/temp'

import { Container, Title, CommitmentList } from './styles'

type CommitmentSelectorStackParamList = {
  CommitmentSelector: {
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
export const CommitmentSelector = ({ route, navigation }: Props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens title="Adicionar dos Favoritos" noButton />
        <CommitmentList
          showsVerticalScrollIndicator={false}
          data={commitmentsData}
          keyExtractor={item => item.id}
          renderItem={({ item, index }) => (
            <CommitmentCard noUser data={{ ...item, index }} />
          )}
        />
      </Container>
    </SafeAreaView>
  )
}
