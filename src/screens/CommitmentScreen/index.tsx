import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, ScrollView, TextInput } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import { SafeAreaView } from 'react-native-safe-area-context'
import AddPeople from '../../components/ScheduleComponents/AddPeople'
import BackgroundGradient from '../../components/BackgroundGradient'
import { DateAndHour } from '../../components/ScheduleComponents/DateAndHour'
import { OptionsButtons } from '../../components/OptionsButtons'

import {
  Container,
  AddCommitmentButton,
  AddCommitmentText,
  AddCommitmentIcon,
  CommitmentInput,
  CommitmentContainer,
  CommitmentFixedContainer,
  CommitmentText,
  PrivacyAndPhoto,
  PhotoButton,
  PhotoIcon,
  PickerButton,
  PickerButtonText
} from './styles'

import Frequency from '../../components/ScheduleComponents/Frequency'
import { HeaderScreens } from '../../components/HeaderScreens'
import { StackScreenProps } from '@react-navigation/stack'
import { BoldText } from '../../components/CommitmentCard/styles'
import { CommentsCard } from '../../components/CommentsCard'
import BottomSheet from '../../components/BottomSheet'

interface IUser {
  id: string
  name: string
  avatar_url: string
  username: string
}
type CommitmentStackParamList = {
  CommitmentScreen: {
    commitment?: {
      id: string
      user_id: string
      user: {
        user_id: string
        avatar_url: string
        name: string
      }
      commitment: {
        id: string
        text: string
        user_id: string
        user: {
          user_id: string
          avatar_url: string
          name: string
        }
      }
      isPublic: boolean
      schedule: boolean
      date?: number | string
      frequency?: number
      index: number
    }
    people: IUser[]
    commitmentSelected: {
      id: string
      text: string
    }
  }
}
type Props = StackScreenProps<CommitmentStackParamList, 'CommitmentScreen'>
export const CommitmentScreen = ({ route, navigation }: Props) => {
  const [editing, setEditing] = useState(false)
  const [commitmentFixed, setCommitmentFixed] = useState<string | undefined>()
  const [commitment, setCommitment] = useState('')
  const [isPublic, setIsPublic] = useState(false)
  const [schedule, setSchedule] = useState(false)
  const [date, setDate] = useState(new Date())
  const [people, setPeople] = useState<IUser[]>([])
  const [frequency, setFrequency] = useState<number | undefined>()
  const [disableButton, setDisableButton] = useState(true)
  const [openModal, setOpenModal] = useState(false)

  const inputRef = useRef<TextInput>(null)

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync()
    console.log(pickerResult)
  }
  let openCameraAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()

    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!')
      return
    }

    let pickerResult = await ImagePicker.launchCameraAsync()
    console.log(pickerResult)
  }

  useEffect(() => {
    Keyboard.dismiss()
  }, [isPublic, schedule, date, frequency])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (route.params?.people) {
      setPeople(route.params?.people)
    }
  }, [route.params?.people])

  useEffect(() => {
    if (route.params?.commitmentSelected) {
      setCommitmentFixed(route.params?.commitmentSelected.text)
      setDisableButton(false)
    }
  }, [route.params?.commitmentSelected])

  useEffect(() => {
    if (/\S/.test(commitment)) setDisableButton(false)
    else setDisableButton(true)
  }, [
    commitment
    //  date, privacy, isToSchedule, frequenc
  ])

  useEffect(() => {
    if (!route.params) return
    const { commitment } = route.params
    if (commitment) {
      setCommitmentFixed(commitment.commitment.text)
      setIsPublic(commitment.isPublic)
      setSchedule(commitment.schedule)
      if (commitment.date) setDate(new Date(commitment.date))
      setFrequency(commitment.frequency)
      setEditing(true)
    }
    setDisableButton(false)
  }, [])

  function handleOnChangePrivacy(value: boolean) {
    setIsPublic(value)
  }

  function handleOnChangeToSchedule(value: boolean) {
    setSchedule(value)
  }
  function handleOnChangeFrequency(value?: number) {
    setFrequency(value)
  }
  function handleAddCommitmentPress() {
    navigation.navigate('CommitmentSelector' as never)
  }

  async function handleOnPressSave() {
    const { commitment } = route.params
    if (
      isPublic === commitment?.isPublic &&
      schedule === commitment.schedule &&
      commitment.date &&
      date === new Date(commitment.date) &&
      frequency === commitment.frequency
    ) {
      navigation.goBack()
    }
    console.log(isPublic, schedule, date, frequency)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens
          disableButton={disableButton}
          onPress={handleOnPressSave}
          title="Compromisso"
          buttonLabel={editing ? 'Guardar' : 'Criar'}
        />
        <ScrollView
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <CommitmentContainer>
            {!editing && (
              <AddCommitmentButton onPress={handleAddCommitmentPress}>
                <AddCommitmentIcon />
                <AddCommitmentText>Favoritos</AddCommitmentText>
              </AddCommitmentButton>
            )}

            {commitmentFixed ? (
              <CommitmentFixedContainer>
                <CommitmentText>
                  <BoldText>"</BoldText>
                  {commitmentFixed}
                  <BoldText>"</BoldText>
                </CommitmentText>
              </CommitmentFixedContainer>
            ) : (
              <CommitmentInput
                ref={inputRef}
                onChangeText={setCommitment}
                placeholder="Escreva aqui seu compromisso."
                multiline
                textAlignVertical="center"
                textAlign="center"
              />
            )}
          </CommitmentContainer>
          <PrivacyAndPhoto>
            <OptionsButtons
              onChange={handleOnChangePrivacy}
              data={{
                selected: isPublic,
                firstOption: { value: false, label: 'Privado' },
                secondOption: { value: true, label: 'Público' }
              }}
            />
            <PhotoButton onPress={() => setOpenModal(true)}>
              <PhotoIcon />
            </PhotoButton>
          </PrivacyAndPhoto>
          <OptionsButtons
            onChange={handleOnChangeToSchedule}
            data={{
              selected: schedule,
              firstOption: { value: false, label: 'Não agendar' },
              secondOption: { value: true, label: 'Agendar' }
            }}
          />
          {schedule && (
            <>
              <DateAndHour value={date} onChangeDate={setDate} />
              <AddPeople people={people} />
              <Frequency onChange={handleOnChangeFrequency} item={frequency} />
            </>
          )}
          <CommentsCard />
        </ScrollView>
        <BottomSheet
          gradient={false}
          visible={openModal}
          onDismiss={() => setOpenModal(false)}
        >
          <PickerButton onPress={openCameraAsync}>
            <PickerButtonText>Tirar Foto</PickerButtonText>
          </PickerButton>
          <PickerButton onPress={openImagePickerAsync}>
            <PickerButtonText>Galeria</PickerButtonText>
          </PickerButton>
        </BottomSheet>
      </Container>
    </SafeAreaView>
  )
}
