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
  PickerButtonText,
  ImageContainer,
  DeleteButton,
  DeleteButtonIcon,
  ImageSelected
} from './styles'

import Frequency from '../../components/ScheduleComponents/Frequency'
import { HeaderScreens } from '../../components/HeaderScreens'
import { StackScreenProps } from '@react-navigation/stack'
import { BoldText } from '../../components/CommitmentCard/styles'
import { CommentsCard } from '../../components/CommentsCard'
import BottomSheet from '../../components/BottomSheet'
import { api } from '../../services/api'

interface IUser {
  id: string
  name: string
  avatarUrl: string
  username: string
}
interface Commitment {
  id: number
  text: string
  isPublic: boolean
  user_id: number
}
interface ICommitmentPlans {
  id: number
  commitment_id: number
  commitment: {
    id: number
    text: string
    isPublic: boolean
    user_id: number
  }
  frequency?: string
  status: string
  timestamp: string
  user_id: number
  user?: {
    id: number
    name: string
    avatar_url: string
  }
  index: number
  image_url?: string
}
type CommitmentStackParamList = {
  CommitmentScreen: {
    commitmentPlan?: ICommitmentPlans
    people: IUser[]
    commitmentSelected: {
      id: number
      text: string
    }
  }
}
type Props = StackScreenProps<CommitmentStackParamList, 'CommitmentScreen'>
export const CommitmentScreen = ({ route, navigation }: Props) => {
  const [editing, setEditing] = useState(false)
  const [commitmentFixed, setCommitmentFixed] = useState<
    Commitment | undefined
  >()
  const [commitment, setCommitment] = useState('')
  const [isPublic, setIsPublic] = useState(false)
  const [schedule, setSchedule] = useState(false)
  const [date, setDate] = useState(new Date())
  const [people, setPeople] = useState<IUser[]>([])
  const [frequency, setFrequency] = useState<string | undefined>()
  const [disableButton, setDisableButton] = useState(true)
  const [openModal, setOpenModal] = useState(false)
  const [image, setImage] = useState('')

  const inputRef = useRef<TextInput>(null)

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    setOpenModal(false)
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1]
    })
    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri)
    }
  }

  let openCameraAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
    setOpenModal(false)
    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!')
      return
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1]
    })
    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri)
    }
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
      setCommitmentFixed(route.params?.commitmentSelected as Commitment)
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
    const { commitmentPlan } = route.params
    if (commitmentPlan) {
      setCommitmentFixed(commitmentPlan.commitment)
      setIsPublic(commitmentPlan.commitment.isPublic)
      setSchedule(!!commitmentPlan.timestamp)
      if (commitmentPlan.timestamp) setDate(new Date(commitmentPlan.timestamp))
      if (commitmentPlan.image_url) setImage(commitmentPlan.image_url)
      setFrequency(commitmentPlan.frequency)
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
  function handleOnChangeFrequency(value?: string) {
    setFrequency(value)
  }
  function handleAddCommitmentPress() {
    navigation.navigate('CommitmentSelector' as never)
  }

  async function handleOnPressSave() {
    const { commitmentPlan } = route.params
    if (
      isPublic === commitmentPlan?.commitment.isPublic &&
      schedule === !!commitmentPlan.timestamp &&
      commitmentPlan.timestamp &&
      date === new Date(commitmentPlan.timestamp) &&
      frequency === commitmentPlan.frequency
    ) {
      navigation.goBack()
    }
    console.log(isPublic, schedule, date, frequency)
  }

  async function handleCreateCommitmentPlans() {
    try {
      const result = await api.post('commitment_plans', {
        commitmentId: commitmentFixed?.id || null,
        timestamp: schedule ? date : null,
        frequency: frequency || null,
        text: commitment || null,
        isPublic
      })
      if (result.data) {
        navigation.goBack()
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens
          disableButton={disableButton}
          onPress={editing ? handleOnPressSave : handleCreateCommitmentPlans}
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
                  {commitmentFixed.text}
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
          {!!image && (
            <ImageContainer>
              <ImageSelected source={{ uri: image }} />
              <DeleteButton onPress={() => setImage('')}>
                <DeleteButtonIcon />
              </DeleteButton>
            </ImageContainer>
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
