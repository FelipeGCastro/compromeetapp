import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'
import { Results } from './Results'

import { Selector } from './Selector'
import {
  peopleRowOne,
  peopleRowTwo,
  periodRowOne,
  periodRowTwo
} from './Selector/data'
import { Container, TextContainer, SubTitle } from './styles'

interface PeopleAndPeriod {
  person: string
  period?: string
}
export const Schedule = () => {
  const [peopleAndPeriod, setPeopleAndPeriod] = useState<PeopleAndPeriod[]>([])
  const [periodFieldActive, setPeriodFieldActive] = useState(false)
  const [canGoNext, setCanGoNext] = useState(false)

  const handleAddPerson = (person: string) => {
    setPeopleAndPeriod([...peopleAndPeriod, { person }])
    setPeriodFieldActive(true)
  }
  const handleAddPeriod = (period: string) => {
    const addedPeriod = peopleAndPeriod.map((item, index) => {
      if (index === peopleAndPeriod.length - 1) {
        item.period = period
      }
      return item
    })
    setPeopleAndPeriod(addedPeriod)
    setPeriodFieldActive(false)
  }
  const handleRemoveItem = (index: number) => {
    const removedItem = peopleAndPeriod.filter((item, i) => i !== index)
    setPeopleAndPeriod(removedItem)
    setPeriodFieldActive(false)
  }
  useEffect(() => {
    if (peopleAndPeriod.length > 0) {
      if (
        !!peopleAndPeriod[peopleAndPeriod.length - 1]?.period &&
        !periodFieldActive
      ) {
        setCanGoNext(true)
      } else {
        setCanGoNext(false)
      }
    } else {
      setCanGoNext(true)
    }
  }, [peopleAndPeriod, periodFieldActive])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <View style={{ paddingHorizontal: 10 }}>
          <HeaderScreens
            title="Bem Vindo"
            noBackButton
            onPress={async () => {}}
            disableButton={!canGoNext}
            buttonLabel="Seguir"
          />
        </View>
        <ScrollView keyboardShouldPersistTaps="handled">
          <TextContainer>
            <SubTitle>
              Deixa a gente te ajudar a lembrar de quem te importa.
            </SubTitle>
          </TextContainer>
          <Selector
            title="Pessoas"
            disabled={periodFieldActive}
            rowOne={peopleRowOne}
            rowTwo={peopleRowTwo}
            onSelect={handleAddPerson}
            loaded={!periodFieldActive}
          />
          <Selector
            title="Frequência"
            disabled={!periodFieldActive}
            rowOne={periodRowOne}
            rowTwo={periodRowTwo}
            onSelect={handleAddPeriod}
            loaded={!periodFieldActive}
          />
          <Results data={peopleAndPeriod} remove={handleRemoveItem} />
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}
