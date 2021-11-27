import React from 'react'
import moment from 'moment'
import { Container, DateField, FrequencyField } from './styles'

interface MeetInfoProps {
  timestamp?: string
  frequency?: string
}
const MeetInfo = ({ timestamp, frequency }: MeetInfoProps) => {
  return (
    <Container>
      {timestamp && <DateField>{moment(timestamp).format('LLLL')}</DateField>}
      {frequency && <FrequencyField>{frequency}</FrequencyField>}
    </Container>
  )
}

export default MeetInfo
