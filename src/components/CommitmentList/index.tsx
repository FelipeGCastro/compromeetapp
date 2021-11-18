import React from 'react'
import { RefreshControl } from 'react-native'
import { CommitmentCard } from '../CommitmentCard'
import { CommitmentPlanCard } from '../CommitmentPlanCard'
import { CommitmentFlatList } from './styles'

interface ICommitmentPlan {
  id: number
  commitment_id: number
  commitment: {
    id: number
    text: string
    favorites: number
    commitmentFavorite: { user_id?: number; id?: number }[]
  }
  frequency?: string
  status: string
  timestamp: Date
  user_id: number
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

interface ICommitmentProps {
  refreshingCommitment: boolean
  isCommitmentPlan?: boolean
  noUser?: boolean
  noLabel?: boolean
  onRefresh: () => void
  commitmentPlans?: ICommitmentPlan[]
  commitment?: ICommitment[]
}

export const CommitmentList = ({
  commitmentPlans,
  commitment,
  refreshingCommitment,
  isCommitmentPlan,
  onRefresh,
  noUser,
  noLabel
}: ICommitmentProps) => {
  const data = isCommitmentPlan ? commitmentPlans : commitment

  return (
    <CommitmentFlatList
      showsVerticalScrollIndicator={false}
      data={data as ICommitmentPlan[] | null | undefined}
      refreshControl={
        <RefreshControl
          refreshing={refreshingCommitment}
          onRefresh={onRefresh}
        />
      }
      keyExtractor={item => item.id.toString()}
      renderItem={({ item, index }) => {
        return isCommitmentPlan ? (
          <CommitmentPlanCard
            noUser={noUser}
            noLabel={noLabel}
            commitmentPlan={{ ...item, index }}
          />
        ) : (
          <CommitmentCard
            noUser={noUser}
            noLabel={noLabel}
            commitment={{ ...item, index } as unknown as ICommitment}
          />
        )
      }}
    />
  )
}
