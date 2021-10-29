import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, TextInput } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import AddPeople from '../../components/ScheduleComponents/AddPeople'
import BackgroundGradient from '../../components/BackgroundGradient'
import { DateAndHour } from '../../components/ScheduleComponents/DateAndHour'
import { OptionsButtons } from '../../components/OptionsButtons'

import {
  Container,
  HeaderContainer,
  BackButton,
  BackIcon,
  CommitmentScreenTitle,
  CreateButton,
  CreateButtonText,
  CommitmentInput
} from './styles'

import Frequency from '../../components/ScheduleComponents/Frequency'

type Privacy = 'private' | 'public'
type ToSchedule = 'noSchedule' | 'schedule'
interface IFrequency {
  value: string
  label: string
}
export const CreateCommitment = () => {
  const [date, setDate] = useState(new Date())
  const [privacy, setPrivacy] = useState<Privacy>('private')
  const [isToSchedule, setIsToSchedule] = useState<ToSchedule>('noSchedule')
  const [frequency, setFrequency] = useState<IFrequency | undefined>()

  const inputRef = useRef<TextInput>(null)
  const navigation = useNavigation()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleBackPress() {
    navigation.goBack()
  }

  function handleOnChangePrivacy(value: string) {
    setPrivacy(value as Privacy)
  }

  function handleOnChangeToSchedule(value: string) {
    setIsToSchedule(value as ToSchedule)
  }
  function handleOnChangeFrequency(value?: IFrequency) {
    setFrequency(value)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderContainer>
          <BackButton onPress={handleBackPress}>
            <BackIcon />
          </BackButton>
          <CommitmentScreenTitle>Compromisso</CommitmentScreenTitle>
          <CreateButton>
            <CreateButtonText>Criar</CreateButtonText>
          </CreateButton>
        </HeaderContainer>
        <ScrollView>
          <CommitmentInput
            ref={inputRef}
            placeholder="Escreva aqui seu compromisso."
            multiline
            textAlignVertical="center"
            textAlign="center"
          />
          <OptionsButtons
            onChange={handleOnChangePrivacy}
            data={{
              selected: privacy,
              firstOption: { value: 'private', label: 'Privado' },
              secondOption: { value: 'public', label: 'Público' }
            }}
          />
          <OptionsButtons
            onChange={handleOnChangeToSchedule}
            data={{
              selected: isToSchedule,
              firstOption: { value: 'noSchedule', label: 'Não agendar' },
              secondOption: { value: 'schedule', label: 'Agendar' }
            }}
          />
          {isToSchedule === 'schedule' && (
            <>
              <DateAndHour value={date} onChangeDate={setDate} />
              <AddPeople />
              <Frequency onChange={handleOnChangeFrequency} item={frequency} />
            </>
          )}
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}
