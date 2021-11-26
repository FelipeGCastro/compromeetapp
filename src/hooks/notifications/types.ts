import { ReactNode } from 'react'

interface INotificationsProviderProps {
  children: ReactNode
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
  type: 'request' | 'commitment'
}

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
interface InviteRequest {
  id: number
  commitment_plan_id: number
  status: string
  userone: {
    id: number
    name: string
    avatar_url: string
    username: string
  }
}
interface ICommitment {
  id: number
  text: string
  user_id: number
  favorites: number
  index?: number
  user?: {
    id: number
    name: string
    avatar_url: string
  }
  commitmentFavorite: {
    id?: number
    user_id?: number
  }[]
}

interface ICommitmentPlan {
  commitment_id: number
  created_at: string
  frequency?: string
  id: number
  status: string
  timestamp: string
  updated_at: string
  user_id: number
  commitment: ICommitment
}

export {
  INotificationsProviderProps,
  INotifications,
  FriendRequest,
  InviteRequest,
  ICommitmentPlan
}
