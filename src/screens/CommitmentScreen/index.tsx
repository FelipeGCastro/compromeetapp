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
  Thumbnail,
  PhotoThumbNail,
  ImageContainer,
  MeetPhoto,
  PrivacyAndPhoto,
  PhotoButton,
  PhotoIcon
} from './styles'

import Frequency from '../../components/ScheduleComponents/Frequency'
import { HeaderScreens } from '../../components/HeaderScreens'
import { CommentsCard } from '../../components/CommentsCard'

import CommitmentFixed from './CommitmentFixed'

import { useMeet } from '../../hooks/meet'
import { useNavigation } from '@react-navigation/core'
import MeetHeader from './MeetHeader'
import { PhotoOptions } from '../../components/PhotoOptions'

export const CommitmentScreen = () => {
  const [openModal, setOpenModal] = useState(false)
  const inputRef = useRef<TextInput>(null)
  const navigation = useNavigation()
  const ScrollComponent = useRef<ScrollView>(null)

  const {
    editing,
    toEditMeet,
    people,
    isPublic,
    schedule,
    date,
    frequency,
    commitmentFixed,
    handleOnPressSave,
    createCommitmentPlans,
    disableButton,
    setIsPublic,
    setSchedule,
    setFrequency,
    setCommitment,
    commitment,
    setDate,
    setImage,
    image,
    reset
  } = useMeet()

  useEffect(() => {
    Keyboard.dismiss()
  }, [isPublic, schedule, date, frequency])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const handleOnChangePrivacy = (value: boolean) => {
    setIsPublic(value)
  }

  const handleOnChangeToSchedule = (value: boolean) => {
    setSchedule(value)
  }
  const handleOnChangeFrequency = (value?: string) => {
    if (value) setFrequency(value)
  }

  const handleGoBack = () => navigation.goBack()
  const handleCreate = async () => {
    createCommitmentPlans(handleGoBack)
  }

  const handleSave = async () => {
    handleOnPressSave(handleGoBack)
  }

  const handlePressThumbnail = () => {
    if (ScrollComponent.current) {
      ScrollComponent.current.scrollToEnd()
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens
          disableButton={disableButton}
          onPress={editing ? handleSave : handleCreate}
          title="Compromisso"
          buttonLabel={editing ? 'Guardar' : 'Criar'}
        />
        <ScrollView
          ref={ScrollComponent}
          keyboardDismissMode="interactive"
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <CommitmentContainer>
            {!editing && (
              <MeetHeader
                hasFixedText={!!commitmentFixed.text || !!commitment}
              />
            )}

            {commitmentFixed.text ? (
              <CommitmentFixed text={commitmentFixed.text} />
            ) : (
              <CommitmentInput
                ref={inputRef}
                value={commitment}
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
            {!!image && (
              <Thumbnail onPress={handlePressThumbnail}>
                <PhotoThumbNail source={{ uri: image }} resizeMode="cover" />
              </Thumbnail>
            )}
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
          {editing && toEditMeet && <CommentsCard meetId={toEditMeet.id} />}

          {!!image && (
            <ImageContainer>
              <MeetPhoto source={{ uri: image }} resizeMode="cover" />
            </ImageContainer>
          )}
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
