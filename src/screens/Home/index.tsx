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
  FilterIcon,
  ListItems,
  ListItem,
  ListItemText
} from './styles'
import BottomSheet from '../../components/BottomSheet'

interface IPeriod {
  label: string
  value: string
}

const arr: string[] = ['1', '2', '3', '4', '5', '6', '7']

const periods: IPeriod[] = [
  { label: 'Hoje', value: 'today' },
  { label: 'Semana', value: 'week' },
  { label: 'Mês', value: 'month' }
]
export const Home: React.FC = () => {
  const [openModal, setopenModal] = useState<boolean>(false)
  const [period, setPeriod] = useState<IPeriod>({
    label: 'Semana',
    value: 'week'
  })

  function handleSelectItem(item: IPeriod) {
    setopenModal(false)
    setPeriod(item)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <OptionsContainer>
          <View style={{ width: 20 }} />
          <PeriodContainer onPress={() => setopenModal(true)}>
            <PeriodText>{period.label}</PeriodText>
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
        <BottomSheet visible={openModal} onDismiss={() => setopenModal(false)}>
          <ListItems
            data={periods}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.value}
            renderItem={({ item }) => (
              <ListItem onPress={() => handleSelectItem(item)}>
                <ListItemText>{item.label}</ListItemText>
              </ListItem>
            )}
          />
        </BottomSheet>
      </Container>
    </SafeAreaView>
  )
}
