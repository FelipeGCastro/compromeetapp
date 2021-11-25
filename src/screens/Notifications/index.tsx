import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { NotificationCard } from '../../components/NotificationCard'
import { Tab } from '../../components/Tab'
import { api } from '../../services/api'

import { Container, NotificationList, NotificationTitle } from './styles'
import { notificationsTemp } from './temp'

interface FriendRequest {
  id: number
  status: string
  userone: {
    id: number
    name: string
    avatar_url: string
    username: string
  }
}
interface INotifications {
  id: number
  user?: {
    id: number
    name: string
    avatar_url: string
  }
  commitmentTime?: string
  commitmentOrder?: string
  text: string
  toAccept?: boolean
  type: 'request' | 'invite' | 'commitment'
}
const tabList = ['Todos', 'Meets', 'Amizades']
export const Notifications = () => {
  const [notifications, setNotifications] = useState<INotifications[]>(
    notificationsTemp as INotifications[]
  )

  useEffect(() => {
    const getFriendRequests = async () => {
      try {
        const result = await api.get('friendship-requests')
        if (!result.data[0]) return
        const mappedRequests = result.data.map((item: FriendRequest) => ({
          id: item.id,
          user: {
            id: item.userone.id,
            name: item.userone.name,
            avatar_url: item.userone.avatar_url
          },
          text: 'fez um pedido de amizade.',
          toAccept: true,
          type: 'request'
        }))
        setNotifications([...mappedRequests, ...notifications])
      } catch (error) {
        console.log(error)
        Alert.alert('Erro ao buscar pedidos de amizade')
      }
    }
    getFriendRequests()
  }, [])

  const handleRemoveRequest = (id: number) => {
    const filteredRequests = notifications.filter(item => item.id !== id)
    setNotifications(filteredRequests)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <NotificationTitle>Notificações</NotificationTitle>
        <Tab tabList={tabList} />
        <NotificationList
          data={notifications}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <NotificationCard data={item} remove={handleRemoveRequest} />
          )}
        />
      </Container>
    </SafeAreaView>
  )
}
