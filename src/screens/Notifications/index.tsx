import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { NotificationCard } from '../../components/NotificationCard'
import { Tab } from '../../components/Tab'
import { useNotifications } from '../../hooks/notifications'

import { Container, NotificationList, NotificationTitle } from './styles'
const tabList = ['Todos', 'Meets', 'Amizades']

export const Notifications = () => {
  const { notifications, handleRemoveRequest } = useNotifications()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <NotificationTitle>Notificações</NotificationTitle>
        <Tab tabList={tabList} />
        <NotificationList
          data={notifications}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <NotificationCard data={item} remove={handleRemoveRequest} />
          )}
        />
      </Container>
    </SafeAreaView>
  )
}
