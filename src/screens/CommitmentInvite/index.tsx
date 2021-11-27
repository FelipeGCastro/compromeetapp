import React from 'react'
import { ActivityIndicator } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommitmentCard } from '../../components/CommitmentCard'
import { HeaderScreens } from '../../components/HeaderScreens'
import { useNotifications } from '../../hooks/notifications'
import MeetInfo from './MeetInfo'

import { Container, Space } from './styles'
import User from './User'

export const CommitmentInvite = () => {
  const { commitmentPlan } = useNotifications()
  return commitmentPlan.id ? (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens title="Meet" noButton />
        <User user={commitmentPlan.user}></User>
        <MeetInfo
          timestamp={commitmentPlan.timestamp}
          frequency={commitmentPlan.frequency}
        />
        <Space />
        <CommitmentCard commitment={commitmentPlan.commitment} />
      </Container>
    </SafeAreaView>
  ) : (
    <Container>
      <ActivityIndicator size={'large'} />
    </Container>
  )
}
