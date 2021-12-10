import React from 'react'
import moment from 'moment'
import 'moment/locale/pt-br'
import {
  Container,
  DateField,
  FrequencyField,
  DataLabel,
  FrequencyLabel
} from './styles'
import { IUser } from '../../../hooks/meet/types'

interface MeetInfoProps {
  timestamp?: string
  frequency?: string
  people: IUser[]
}

const MeetInfo = ({ timestamp, frequency, people }: MeetInfoProps) => {
  var localLocale = moment(timestamp)

  // localLocale.locale('pt-br') // set this instance to use French // dimanche 15 juillet 2012 11:01
  return (
    <Container>
      <DataLabel>Data</DataLabel>
      {timestamp && (
        <DateField>{localLocale.format('dddd, DD/MM [às] h:mm')}</DateField>
      )}

      {frequency && (
        <>
          <FrequencyLabel>Frequencia</FrequencyLabel>
          <FrequencyField>{frequency}</FrequencyField>
        </>
      )}
      {people.length > 0 && (
        <>
          <FrequencyLabel>Convidados</FrequencyLabel>
          <FrequencyField>
            {people.map(person => person.name).join(', ')}
          </FrequencyField>
        </>
      )}
    </Container>
  )
}

export default MeetInfo
