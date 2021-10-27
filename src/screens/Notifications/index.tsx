import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { NotificationCard } from '../../components/NotificationCard'

import { Container, NotificationList, NotificationTitle } from './styles'

const avatarUrl = 'http://github.com/felipegcastro.png'

const arr = [
  {
    id: '2323',
    data: {
      user: {
        name: 'Lucas Moura Castro',
        avatar_url: avatarUrl
      },
      commitmentTime: '14:25',
      commitmentOrder: '#2',
      text: 'marcou um compromisso com você!'
    }
  },
  {
    id: '23242',
    data: {
      commitmentTime: '14:25',
      commitmentOrder: '#3',
      text: 'Você tem um compromisso para hoje daqui a pouco.'
    }
  },
  {
    id: '23223232',
    data: {
      commitmentTime: '15:00',
      commitmentOrder: '#4',
      text: 'Você tem um compromisso para hoje daqui a pouco.'
    }
  },
  {
    id: '232ad233',
    data: {
      user: {
        name: 'Luiz Castro',
        avatar_url: avatarUrl
      },
      commitmentTime: '14:25',
      commitmentOrder: '#2',
      text: 'fez um pedido de amizade.',
      toAccept: true
    }
  }
]

export const Notifications: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <NotificationTitle>Notificações</NotificationTitle>
        <NotificationList
          data={arr}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <NotificationCard data={item.data} />}
        />
      </Container>
    </SafeAreaView>
  )
}
