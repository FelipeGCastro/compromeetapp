import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommentsCard } from '../../components/CommentsCard'
import { CommitmentCard } from '../../components/CommitmentCard'
import { HeaderScreens } from '../../components/HeaderScreens'
import { useAuth } from '../../hooks/auth'
import { useMeet } from '../../hooks/meet'
import { useNotifications } from '../../hooks/notifications'
import { api } from '../../services/api'
import Buttons from './Buttons'
import MeetInfo from './MeetInfo'

import { Container, Space } from './styles'
import User from './User'

export const CommitmentInvite = () => {
  const { commitmentPlan, handleRemoveInvite } = useNotifications()
  const { getPeople, people } = useMeet()
  const navigation = useNavigation()
  const { user } = useAuth()
  const { setMeet } = useMeet()

  useEffect(() => {
    const fetchPeople = async () => {
      await getPeople(commitmentPlan.id)
    }

    if (commitmentPlan.id) {
      fetchPeople()
    }
  }, [commitmentPlan])

  const handleAccept = async () => {
    try {
      await api.put(`commitment_invites/${commitmentPlan.inviteId}`, {
        status: 'ACCEPTED'
      })
      handleRemoveInvite(commitmentPlan.id)
      navigation.goBack()
    } catch (error) {
      console.log(error)
    }
  }
  const handleReject = async () => {
    try {
      await api.put(`commitment_invites/${commitmentPlan.inviteId}`, {
        status: 'REJECTED'
      })
      handleRemoveInvite(commitmentPlan.id)
    } catch (error) {
      console.log(error)
    }
  }
  const handleEditMeet = async () => {
    setMeet({ ...commitmentPlan, index: 12 })
    navigation.navigate('CommitmentScreen' as never)
  }

  return commitmentPlan.id ? (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens
          title="Meet"
          noButton={user.id !== commitmentPlan.user_id}
          onPress={handleEditMeet}
          buttonLabel="editar"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <User user={commitmentPlan.user} />
          <MeetInfo
            timestamp={commitmentPlan.timestamp}
            frequency={commitmentPlan.frequency}
            people={people}
          />
          {commitmentPlan.inviteId !== 0 && (
            <Buttons
              onePressAccept={handleAccept}
              onPressReject={handleReject}
            />
          )}
          <Space />
          <CommitmentCard commitment={commitmentPlan.commitment} />
          <CommentsCard meetId={commitmentPlan.id} />
        </ScrollView>
      </Container>
    </SafeAreaView>
  ) : (
    <Container>
      <ActivityIndicator size={'large'} />
    </Container>
  )
}
