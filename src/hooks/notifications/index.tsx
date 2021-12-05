import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { Alert } from 'react-native'
import { api } from '../../services/api'
import {
  FriendRequest,
  ICommitmentPlan,
  INotifications,
  INotificationsProviderProps,
  InviteRequest
} from './types'

interface INotificationsContextData {
  getFriendRequests: () => Promise<void>
  handleRemoveRequest: (id: number) => void
  handleRemoveInvite: (id: number) => void
  notifications: INotifications[]
  commitmentPlan: ICommitmentPlan
  loadCommitmentPlan: (notification: {
    commitmentPlanId: number
    inviteId: number
  }) => void
}

const NotificationsContext = createContext({} as INotificationsContextData)

function NotificationsProvider({ children }: INotificationsProviderProps) {
  const [notifications, setNotifications] = useState<INotifications[]>([])
  const [commitmentPlan, setCommitmentPlan] = useState<ICommitmentPlan>(
    {} as ICommitmentPlan
  )

  const getFriendRequests = async () => {
    try {
      const result = await api.get('friendship-requests')
      if (!result.data[0]) return
      const mappedRequests = result.data.map(
        (item: FriendRequest, index: number) => ({
          id: item.id,
          key: `${item.id}${index}`,
          user: {
            id: item.userone.id,
            name: item.userone.name,
            avatar_url: item.userone.avatar_url
          },
          text: 'fez um pedido de amizade.',
          toAccept: true,
          type: 'request'
        })
      )
      setNotifications([...mappedRequests, ...notifications])
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao buscar pedidos de amizade')
    }
  }

  useEffect(() => {
    const getInvitesRequests = async () => {
      try {
        const result = await api.get('invites')
        if (!result.data[0]) return
        const mappedRequests = result.data.map(
          (item: InviteRequest, index: number) => ({
            id: item.id,
            key: `${item.id}${index}`,
            commitmentPlanId: item.commitment_plan_id,
            user: {
              id: item.userone.id,
              name: item.userone.name,
              avatar_url: item.userone.avatar_url
            },
            text: 'Marcou um compromisso com você.',
            type: 'commitment'
          })
        )
        setNotifications([...mappedRequests, ...notifications])
      } catch (error) {
        console.log(error)
        Alert.alert('Erro ao buscar convites')
      }
    }
    getInvitesRequests()
  }, [])

  const handleRemoveRequest = (id: number) => {
    const filteredRequests = notifications.filter(item => item.id !== id)
    setNotifications(filteredRequests)
  }
  const handleRemoveInvite = (commitmentId: number) => {
    const filteredRequests = notifications.filter(
      item => item.commitmentPlanId !== commitmentId
    )
    setNotifications(filteredRequests)
  }

  const loadCommitmentPlan = async (notification: {
    commitmentPlanId: number
    inviteId: number
  }) => {
    try {
      const result = await api.get(
        `/commitment_plans/${notification.commitmentPlanId}`
      )
      setCommitmentPlan({ ...result.data, inviteId: notification.inviteId })
    } catch (error) {
      console.log(error)
      Alert.alert('Erro ao carregar Meet')
    }
  }

  return (
    <NotificationsContext.Provider
      value={{
        handleRemoveRequest,
        notifications,
        commitmentPlan,
        loadCommitmentPlan,
        handleRemoveInvite,
        getFriendRequests
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}

function useNotifications() {
  return useContext(NotificationsContext)
}

export { useNotifications, NotificationsProvider }
