import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'
import moment from 'moment'

import { api } from '../../services/api'
import { ICommitment, ICommitmentPlan, IUser, IMeetContextData } from './types'

interface IMeetProviderProps {
  children: ReactNode
}

const MeetContext = createContext({} as IMeetContextData)

function MeetProvider({ children }: IMeetProviderProps) {
  const [editing, setEditing] = useState(false)
  const [toEditMeet, setToEditMeet] = useState<ICommitmentPlan>()
  const [commitmentFixed, setCommitmentFixed] = useState<ICommitment>(
    {} as ICommitment
  )
  const [commitment, setCommitment] = useState('')
  const [isPublic, setIsPublic] = useState(false)
  const [schedule, setSchedule] = useState(false)
  const [date, setDate] = useState(moment().add(1, 'days').toDate())
  const [people, setPeople] = useState<IUser[]>([])
  const [frequency, setFrequency] = useState<string>('')
  const [disableButton, setDisableButton] = useState(true)
  const [image, setImage] = useState('')
  //   set people
  // set commitment fixed

  useEffect(() => {
    if (editing && commitmentFixed.text && schedule) {
      setDisableButton(false)
    } else {
      if (/\S/.test(commitment)) setDisableButton(false)
      else setDisableButton(true)
    }
  }, [commitment, commitmentFixed, editing, schedule])

  const addCommitment = (commit: ICommitment) => {
    setCommitmentFixed(commit)
  }
  const removeCommitment = () => {
    setCommitmentFixed({} as ICommitment)
    setCommitment('')
  }

  const addPeople = (people: IUser[]) => {
    setPeople(people)
  }

  const setMeet = (commitmentPlan: ICommitmentPlan) => {
    setCommitmentFixed(commitmentPlan.commitment)
    setIsPublic(commitmentPlan.commitment.isPublic)
    setSchedule(!!commitmentPlan.timestamp)
    if (commitmentPlan.timestamp) setDate(new Date(commitmentPlan.timestamp))
    if (commitmentPlan.image_url) setImage(commitmentPlan.image_url)
    if (commitmentPlan.frequency) setFrequency(commitmentPlan.frequency)
    getPeople(commitmentPlan.id)
    setDisableButton(false)
    setEditing(true)
    setToEditMeet(commitmentPlan)
  }

  const getPeople = async (id: number) => {
    try {
      const result = await api.get(`invites/${id}`)
      const invitedPeople = result.data.map(
        (invite: { usertwo: IUser }) => invite.usertwo
      )
      setPeople(invitedPeople)
    } catch (error) {
      console.log('GET PEOPLE ERROR', error)
    }
  }

  const UpdatePeople = async (commitmentPlanId: number) => {
    try {
      if (people.length > 0) {
        const invitesData = people.map(person => ({
          userTwo: person.id,
          commitmentPlanId
        }))
        const resultInvites = await api.post('invites', {
          people: invitesData
        })
        return resultInvites.data
      }
    } catch (error) {
      throw new Error(('MESSAGE ERROR SEND INVITES' + error) as string)
    }
  }

  const handleOnPressSave = async (goBack: () => void) => {
    if (
      isPublic === toEditMeet?.commitment.isPublic &&
      schedule === !!toEditMeet.timestamp &&
      toEditMeet.timestamp &&
      date === new Date(toEditMeet.timestamp) &&
      frequency === toEditMeet.frequency
    ) {
      console.log('NOTHING EDITED')
      await UpdatePeople(toEditMeet?.id)
      goBack()
    } else {
      try {
        console.log('EDITED')
        const result = await api.put(`commitment_plans/${toEditMeet?.id}`, {
          timestamp: schedule ? date : null,
          frequency: frequency || null
        })
        if (result.data && toEditMeet?.id) {
          await UpdatePeople(toEditMeet?.id)
        }
      } catch (error) {
        console.log('ERROR SAVE PLAN', error)
      } finally {
        goBack()
      }
    }
  }

  const createCommitmentPlans = async (goBack: () => void) => {
    try {
      const result = await api.post('commitment_plans', {
        commitmentId: commitmentFixed?.id || null,
        timestamp: schedule ? date : null,
        frequency: frequency || null,
        text: commitment || null,
        isPublic
      })
      if (result.data) {
        await UpdatePeople(result.data.id)
      }
    } catch (error) {
      console.log(error)
    } finally {
      goBack()
    }
  }

  const reset = () => {
    setEditing(false)
    setToEditMeet({} as ICommitmentPlan)
    setCommitmentFixed({} as ICommitment)
    setCommitment('')
    setIsPublic(false)
    setSchedule(false)
    setDate(new Date())
    setPeople([])
    setFrequency('')
    setDisableButton(false)
    setImage('')
  }

  return (
    <MeetContext.Provider
      value={{
        editing,
        toEditMeet,
        setMeet,
        getPeople,
        commitmentFixed,
        commitment,
        isPublic,
        schedule,
        date,
        people,
        frequency,
        disableButton,
        image,
        handleOnPressSave,
        createCommitmentPlans,
        addCommitment,
        removeCommitment,
        addPeople,
        setIsPublic,
        setSchedule,
        setFrequency,
        setCommitment,
        setDate,
        setImage,
        reset
      }}
    >
      {children}
    </MeetContext.Provider>
  )
}

function useMeet() {
  return useContext(MeetContext)
}

export { useMeet, MeetProvider }
