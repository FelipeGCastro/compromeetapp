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

interface MeetInfoProps {
  timestamp?: string
  frequency?: string
}

const MeetInfo = ({ timestamp, frequency }: MeetInfoProps) => {
  var localLocale = moment()

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
    </Container>
  )
}

export default MeetInfo
