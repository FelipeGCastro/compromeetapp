import React, { useEffect, useState } from 'react'
import { Alert, RefreshControl, View } from 'react-native'
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
import { ActionButton } from './components/ActionButton/ActionButton'
import { api } from '../../services/api'

interface IPeriod {
  label: string
  value: string
}

const periods: IPeriod[] = [
  { label: 'Hoje', value: 'today' },
  { label: 'Semana', value: 'week' },
  { label: 'Mês', value: 'month' }
]

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
}
export const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [commitmentPlans, setCommitmentPlans] = useState<ICommitmentPlans[]>([])
  const [refreshingCommitmentPlans, setRefreshingCommitmentPlans] =
    useState(false)
  const [period, setPeriod] = useState<IPeriod>({
    label: 'Semana',
    value: 'week'
  })

  useEffect(() => {
    getCommitments()
  }, [])

  async function getCommitments() {
    try {
      const result = await api.get('commitment_plans')
      setCommitmentPlans(result.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Error ao buscar seus compromissos')
    }
  }
  function handleSelectItem(item: IPeriod) {
    setOpenModal(false)
    setPeriod(item)
  }

  const onRefresh = () => getCommitments()

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
          showsVerticalScrollIndicator={false}
          data={commitmentPlans}
          refreshControl={
            <RefreshControl
              refreshing={refreshingCommitmentPlans}
              onRefresh={onRefresh}
            />
          }
          keyExtractor={item => item.id.toString()}
          renderItem={({ item, index }) => (
            <CommitmentCard noUser data={{ ...item, index }} />
          )}
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
