import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, ScrollView, TextInput } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import AddPeople from '../../components/ScheduleComponents/AddPeople'
import BackgroundGradient from '../../components/BackgroundGradient'
import { DateAndHour } from '../../components/ScheduleComponents/DateAndHour'
import { OptionsButtons } from '../../components/OptionsButtons'

import {
  Container,
  CommitmentInput,
  CommitmentContainer,
  PrivacyAndPhoto,
  PhotoButton,
  PhotoIcon
} from './styles'

import Frequency from '../../components/ScheduleComponents/Frequency'
import { HeaderScreens } from '../../components/HeaderScreens'
import { StackScreenProps } from '@react-navigation/stack'
import { CommentsCard } from '../../components/CommentsCard'
import { api } from '../../services/api'
import CommitmentFixed from './CommitmentFixed'
import { FavoriteButton } from './FavoriteButton'
import { CommitmentImage } from './CommitmentImage'
import { PhotoOptions } from './PhotoOptions'

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
  const [editing, setEditing] = useState<ICommitmentPlans | undefined>()
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
      setEditing(commitmentPlan)
      getPeople(commitmentPlan.id)
    }
    setDisableButton(false)
  }, [])

  const getPeople = async (id: number) => {
    try {
      const result = await api.get(`invites/${id}`)
      const invitedPeople = result.data.map(
        (invite: { usertwo: IUser }) => invite.usertwo
      )
      setPeople([...people, ...invitedPeople])
    } catch (error) {
      console.log('GET PEOPLE ERROR', error)
    }
  }
  const handleOnChangePrivacy = (value: boolean) => {
    setIsPublic(value)
  }

  const handleOnChangeToSchedule = (value: boolean) => {
    setSchedule(value)
  }
  const handleOnChangeFrequency = (value?: string) => {
    setFrequency(value)
  }
  const handleAddCommitmentPress = () => {
    navigation.navigate('CommitmentSelector' as never)
  }

  const UpdatePeople = async (commitmentPlanId: number) => {
    try {
      if (people.length > 0) {
        const invitesData = people.map(person => ({
          userTwo: person.id,
          commitmentPlanId
        }))
        const resultInvites = await api.post('invites', {
          people: invitesData
        })
        return resultInvites
      }
    } catch (error) {
      throw new Error(error as string)
    }
  }

  async function handleOnPressSave() {
    if (
      isPublic === editing?.commitment.isPublic &&
      schedule === !!editing.timestamp &&
      editing.timestamp &&
      date === new Date(editing.timestamp) &&
      frequency === editing.frequency
    ) {
      console.log('NOTHING EDITED')
      const resultInvites = await UpdatePeople(editing?.id)
      console.log(resultInvites)
      navigation.goBack()
    } else {
      try {
        console.log('EDITED', editing?.id)
        const result = await api.put(`commitment_plans/${editing?.id}`, {
          timestamp: schedule ? date : null,
          frequency: frequency || null
        })
        if (result.data && editing?.id) {
          await UpdatePeople(editing?.id)
        }
      } catch (error) {
        console.log('ERROR SAVE PLAN', error)
      } finally {
        navigation.goBack()
      }
    }
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
        await UpdatePeople(result.data.id)
      }
    } catch (error) {
      console.log(error)
    } finally {
      navigation.goBack()
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
            {!editing && <FavoriteButton onPress={handleAddCommitmentPress} />}

            {commitmentFixed ? (
              <CommitmentFixed text={commitmentFixed.text} />
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
            {/* SEPARAR A PARTE DO EDITAR O COMMITMENT */}
            {/* <OptionsButtons
              onChange={handleOnChangePrivacy}
              data={{
                selected: isPublic,
                firstOption: { value: false, label: 'Privado' },
                secondOption: { value: true, label: 'Público' }
              }}
            /> */}
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
          {!!image && <CommitmentImage image={image} setImage={setImage} />}
          <CommentsCard />
        </ScrollView>
        <PhotoOptions
          visible={openModal}
          setOpenModal={setOpenModal}
          setImage={setImage}
        />
      </Container>
    </SafeAreaView>
  )
}
