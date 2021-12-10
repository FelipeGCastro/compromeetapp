import React, { ReactElement } from 'react'
import { CommitmentCard } from '../CommitmentCard'
import { CommitmentPlanCard } from '../CommitmentPlanCard'
import { CommitmentFlatList } from './styles'

interface ICommitmentPlan {
  id: number
  commitment_id: number
  commitment: {
    id: number
    isPublic: boolean
    user_id: number
    text: string
    favorites: number
    meets: number
    commitmentFavorite: { user_id?: number; id?: number }[]
  }
  user: {
    id: number
    name: string
    avatar_url: string
    username: string
  }
  invites: number
  frequency?: string
  status: string
  timestamp: string
  user_id: number
}
interface ICommitment {
  id: number
  text: string
  user_id: number
  favorites: number
  isPublic: boolean
  meets: number
  index?: number
  user?: {
    id: number
    name: string
    avatar_url: string
    username: string
  }
  commitmentFavorite: {
    id?: number
    user_id?: number
  }[]
}

interface ICommitmentProps {
  header?: ReactElement
  isCommitmentPlan?: boolean
  noUser?: boolean
  noLabel?: boolean
  commitmentPlans?: ICommitmentPlan[]
  commitment?: ICommitment[]
}

export const CommitmentList = ({
  header,
  commitmentPlans,
  commitment,
  isCommitmentPlan,
  noUser,
  noLabel
}: ICommitmentProps) => {
  const data = isCommitmentPlan ? commitmentPlans : commitment

  return (
    <CommitmentFlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={header}
      contentContainerStyle={{ paddingBottom: 100 }}
      data={data as ICommitmentPlan[] | null | undefined}
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
