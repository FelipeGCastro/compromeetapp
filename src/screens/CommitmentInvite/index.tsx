import { useNavigation } from '@react-navigation/core'
import React, { useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommentsCard } from '../../components/CommentsCard'
import { CommitmentCard } from '../../components/CommitmentCard'
import { HeaderScreens } from '../../components/HeaderScreens'
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
  return commitmentPlan.id ? (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens title="Meet" noButton />
        <User user={commitmentPlan.user} />
        <MeetInfo
          timestamp={commitmentPlan.timestamp}
          frequency={commitmentPlan.frequency}
          people={people}
        />
        {commitmentPlan.inviteId !== 0 && (
          <Buttons onePressAccept={handleAccept} onPressReject={handleReject} />
        )}
        <Space />
        <CommitmentCard commitment={commitmentPlan.commitment} />
        <CommentsCard />
      </Container>
    </SafeAreaView>
  ) : (
    <Container>
      <ActivityIndicator size={'large'} />
    </Container>
  )
}
