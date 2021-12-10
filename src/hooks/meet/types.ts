interface IUser {
  id: number
  name: string
  avatar_url: string
  username: string
}
interface ICommitment {
  id: number
  text: string
  isPublic: boolean
  user_id: number
}
interface ICommitmentPlan {
  id: number
  commitment_id: number
  commitment: {
    id: number
    text: string
    isPublic: boolean
    user_id: number
  }
  frequency?: string
  status: string
  timestamp: string
  user_id: number
  user?: {
    id: number
    name: string
    avatar_url: string
  }
  index: number
  image_url?: string
}

interface IMeetContextData {
  editing: boolean
  commitmentFixed: ICommitment
  commitment: string
  isPublic: boolean
  schedule: boolean
  date: Date
  people: IUser[]
  frequency: string
  disableButton: boolean
  image: string
  getPeople: (meetId: number) => Promise<void>
  setMeet: (meet: ICommitmentPlan) => void
  handleOnPressSave: (goBack: () => void) => Promise<void>
  createCommitmentPlans: (goBack: () => void) => Promise<void>
  setIsPublic: (isPublic: boolean) => void
  setSchedule: (schedule: boolean) => void
  setFrequency: (freq: string) => void
  setCommitment: (commit: string) => void
  setDate: (date: Date) => void
  setImage: (img: string) => void
  reset: () => void
  addCommitment: (comm: ICommitment) => void
  addPeople: (people: IUser[]) => void
  removeCommitment: () => void
}

export { IUser, ICommitment, ICommitmentPlan, IMeetContextData }
