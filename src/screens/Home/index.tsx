import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import BackgroundGradient from '../../components/BackgroundGradient'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
  Container,
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
import { ActionButton } from './components/ActionButton/ActionButton'
import { CommitmentList } from '../../components/CommitmentList'
import { useCommitment } from '../../hooks/commitments'
import { useAuth } from '../../hooks/auth'

interface IPeriod {
  label: string
  value: string
}

const periods: IPeriod[] = [
  { label: 'Hoje', value: 'today' },
  { label: 'Semana', value: 'week' },
  { label: 'Mês', value: 'month' }
]

export const Home = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [period, setPeriod] = useState<IPeriod>({
    label: 'Semana',
    value: 'week'
  })

  const { commitmentPlans, getCommitments } = useCommitment()
  const { getMe } = useAuth()
  useEffect(() => {
    getMe()
    getCommitments()
  }, [])

  function handleSelectItem(item: IPeriod) {
    setOpenModal(false)
    setPeriod(item)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <OptionsContainer>
          <View style={{ width: 20 }} />
          <PeriodContainer onPress={() => setOpenModal(true)}>
            <PeriodText>{period.label}</PeriodText>
            <ArrowDown />
          </PeriodContainer>
          <FilterButton>
            <FilterIcon />
          </FilterButton>
        </OptionsContainer>
        <CommitmentList
          noLabel
          commitmentPlans={commitmentPlans}
          isCommitmentPlan
        />
        <BottomSheet visible={openModal} onDismiss={() => setOpenModal(false)}>
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
        <ActionButton />
      </Container>
    </SafeAreaView>
  )
}
