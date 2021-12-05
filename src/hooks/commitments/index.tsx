import { useNavigation } from '@react-navigation/core'
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import { Alert } from 'react-native'
import { api } from '../../services/api'

interface ICommitmentContextData {
  commitmentPlans: ICommitmentPlan[]
  getCommitments: () => Promise<void>
}

interface ICommitmentProviderProps {
  children: ReactNode
}
interface ICommitmentPlan {
  id: number
  commitment_id: number
  commitment: {
    id: number
    text: string
    favorites: number
    isPublic: boolean
    meets: number
    user_id: number
    commitmentFavorite: { user_id?: number; id?: number }[]
  }
  invites: number
  frequency?: string
  status: string
  timestamp: string
  user_id: number
}
const CommitmentContext = createContext({} as ICommitmentContextData)

function CommitmentProvider({ children }: ICommitmentProviderProps) {
  const [commitmentPlans, setCommitmentPlans] = useState<ICommitmentPlan[]>([])

  const getCommitments = async () => {
    try {
      const result = await api.get('commitment_plans')
      setCommitmentPlans(result.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Error ao buscar seus compromissos')
    }
  }

  return (
    <CommitmentContext.Provider value={{ commitmentPlans, getCommitments }}>
      {children}
    </CommitmentContext.Provider>
  )
}

function useCommitment() {
  return useContext(CommitmentContext)
}

export { useCommitment, CommitmentProvider }
