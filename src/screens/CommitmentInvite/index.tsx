import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommitmentCard } from '../../components/CommitmentCard'
import { HeaderScreens } from '../../components/HeaderScreens'
import { useNotifications } from '../../hooks/notifications'

import { Container } from './styles'

export const CommitmentInvite = () => {
  const { commitmentPlan } = useNotifications()
  console.log('CommitmentInviteScreen', commitmentPlan)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens title="Meet" noButton />
        {commitmentPlan.commitment && (
          <CommitmentCard commitment={commitmentPlan.commitment} />
        )}
      </Container>
    </SafeAreaView>
  )
}
