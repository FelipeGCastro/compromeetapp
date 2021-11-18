import React, { useEffect, useState } from 'react'
import { Alert, RefreshControl, View } from 'react-native'
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
import { api } from '../../services/api'
import { CommitmentList } from '../../components/CommitmentList'

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
    id: number
    text: string
    favorites: number
    commitmentFavorite: { user_id?: number; id?: number }[]
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
    setRefreshingCommitmentPlans(true)
    try {
      const result = await api.get('commitment_plans')
      setCommitmentPlans(result.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Error ao buscar seus compromissos')
    } finally {
      setRefreshingCommitmentPlans(false)
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
          commitmentPlans={commitmentPlans}
          onRefresh={onRefresh}
          isCommitmentPlan
          refreshingCommitment={refreshingCommitmentPlans}
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
