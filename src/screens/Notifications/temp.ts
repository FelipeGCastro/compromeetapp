const avatarUrl = 'http://github.com/felipegcastro.png'

export const notificationsTemp = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'Lucas Moura Castro',
      avatarUrl: avatarUrl
    },
    commitmentTime: '14:25',
    commitmentOrder: '#2',
    text: 'marcou um compromisso com você!',
    type: 'invite'
  },
  {
    id: 2,
    commitmentTime: '14:25',
    commitmentOrder: '##',
    text: 'Você tem um compromisso para hoje daqui a pouco.',
    type: 'commitment'
  },
  {
    id: 3,
    commitmentTime: '15:00',
    commitmentOrder: '##',
    text: 'Você tem um compromisso para hoje daqui a pouco.',
    type: 'commitment'
  },
  {
    id: 4,
    user: {
      id: 2,
      name: 'Luiz Castro',
      avatarUrl: avatarUrl
    },
    commitmentTime: '14:25',
    commitmentOrder: '#2',
    text: 'fez um pedido de amizade.',
    toAccept: true,
    type: 'request'
  }
]
