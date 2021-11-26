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
  handleRemoveRequest: (id: number) => void
  notifications: INotifications[]
  commitmentPlan: ICommitmentPlan
  loadCommitmentPlan: (id: number) => void
}

const NotificationsContext = createContext({} as INotificationsContextData)

function NotificationsProvider({ children }: INotificationsProviderProps) {
  const [notifications, setNotifications] = useState<INotifications[]>([])
  const [commitmentPlan, setCommitmentPlan] = useState<ICommitmentPlan>(
    {} as ICommitmentPlan
  )

  useEffect(() => {
    const getFriendRequests = async () => {
      try {
        const result = await api.get('friendship-requests')
        if (!result.data[0]) return
        const mappedRequests = result.data.map(
          (item: FriendRequest, index: number) => ({
            id: `${item.id}${index}`,
            itemId: item.id,
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
    getFriendRequests()
  }, [])

  useEffect(() => {
    const getInvitesRequests = async () => {
      try {
        const result = await api.get('invites')
        console.log(result.data)
        if (!result.data[0]) return
        const mappedRequests = result.data.map(
          (item: InviteRequest, index: number) => ({
            id: `${item.id}${index}`,
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

  const loadCommitmentPlan = async (id: number) => {
    try {
      const result = await api.get(`/commitment_plans/${id}`)
      setCommitmentPlan(result.data)
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
        loadCommitmentPlan
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
