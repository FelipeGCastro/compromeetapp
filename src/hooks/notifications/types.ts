import { ReactNode } from 'react'

interface INotificationsProviderProps {
  children: ReactNode
}

interface INotifications {
  id: number
  key: string
  user?: {
    id: number
    name: string
    avatar_url: string
  }
  commitmentPlanId?: number
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
  isPublic: boolean
  index?: number
  user?: {
    id: number
    name: string
    username: string
    avatar_url: string
  }
  commitmentFavorite: {
    id?: number
    user_id?: number
  }[]
}

interface ICommitmentPlan {
  commitment_id: number
  frequency?: string
  id: number
  status: string
  timestamp: string
  user_id: number
  user: {
    id: number
    name: string
    username: string
    avatar_url: string
  }
  commitment: ICommitment
  inviteId: number
}

export {
  INotificationsProviderProps,
  INotifications,
  FriendRequest,
  InviteRequest,
  ICommitmentPlan
}
