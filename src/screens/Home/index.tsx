import React, { useState } from 'react'
import { Text, View } from 'react-native'
import BackgroundGradient from '../../components/BackgroundGradient'
import CommitmentCard from '../../components/CommitmentCard'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
  Container,
  CommitmentList,
  PeriodContainer,
  PeriodText,
  ArrowDown,
  OptionsContainer,
  FilterButton,
  FilterIcon
} from './styles'
import BottomSheet from '../../components/BottomSheet'

const arr: string[] = ['1', '2', '3', '4', '5', '6', '7']
export const Home: React.FC = () => {
  const [openModal, setopenModal] = useState<boolean>(false)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <OptionsContainer>
          <View style={{ width: 20 }} />
          <PeriodContainer onPress={() => setopenModal(true)}>
            <PeriodText>Semana</PeriodText>
            <ArrowDown />
          </PeriodContainer>
          <FilterButton>
            <FilterIcon />
          </FilterButton>
        </OptionsContainer>
        <CommitmentList
          showsVerticalScrollIndicator={false}
          data={arr}
          keyExtractor={item => item}
          renderItem={item => <CommitmentCard />}
        />
        <BottomSheet
          visible={openModal}
          onDismiss={() => setopenModal(prev => !prev)}
        >
          <Text>Hello World</Text>
        </BottomSheet>
      </Container>
    </SafeAreaView>
  )
}
