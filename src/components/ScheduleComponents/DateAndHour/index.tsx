import React, { useState } from 'react'
import DateTimePicker, { Event } from '@react-native-community/datetimepicker'
import {
  DateAndHourWrapper,
  DateButton,
  DateButtonText,
  HourButton,
  HourButtonText
} from './styles'
import { Platform } from 'react-native'
import moment from 'moment'

type PickerMode = 'date' | 'time'

const dateFormat = new Intl.DateTimeFormat('pt-BR', {
  month: '2-digit',
  day: '2-digit',
  year: 'numeric'
})
const timeFormat = new Intl.DateTimeFormat('pt-BR', {
  hour: '2-digit',
  minute: '2-digit'
})

interface DateAndHourProps {
  value: Date
  onChangeDate: (date: Date) => void
}

export const DateAndHour = ({ value, onChangeDate }: DateAndHourProps) => {
  const [mode, setMode] = useState<PickerMode>('date')
  const [show, setShow] = useState(false)

  const onChange = (event: Event, selectedDate?: Date) => {
    const currentDate = selectedDate || value
    setShow(Platform.OS === 'ios')
    onChangeDate(currentDate)
  }

  const showMode = (currentMode: PickerMode) => {
    setShow(true)
    setMode(currentMode)
  }

  const showDatepicker = () => {
    showMode('date')
  }

  const showTimepicker = () => {
    showMode('time')
  }
  return (
    <DateAndHourWrapper>
      <DateButton onPress={showDatepicker}>
        <DateButtonText>
          {moment(value).format('dddd, DD MMM YYYY')}
        </DateButtonText>
      </DateButton>
      <HourButton onPress={showTimepicker}>
        <HourButtonText>{timeFormat.format(value)}</HourButtonText>
      </HourButton>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={value}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </DateAndHourWrapper>
  )
}
