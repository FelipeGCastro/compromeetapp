import React, { useState } from 'react'
import BottomSheet from '../../BottomSheet'

import {
  FrequencyButton,
  FrequencyText,
  OptionButton,
  OptionButtonText,
  CloseButton,
  CloseIcon
} from './styles'

interface FrequencyArg {
  value: string
  label: string
}
interface FrequencyProps {
  onChange: (value?: FrequencyArg) => void
  item?: {
    value: string
    label: string
  }
}
const frequencies = [
  { value: '1d', label: 'Diária' },
  { value: '3d', label: '3 Dias' },
  { value: '1w', label: 'Semanalmente' },
  { value: '15d', label: '15 dias' },
  { value: '1m', label: 'Mensalmente' }
]
const Frequency = ({ onChange, item }: FrequencyProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  function handleChangeFrequency(item: FrequencyArg) {
    setOpenModal(false)
    onChange(item)
  }
  return (
    <>
      <FrequencyButton onPress={() => setOpenModal(true)}>
        <FrequencyText>Frequencia: {item?.label}</FrequencyText>
        {item?.label && (
          <CloseButton onPress={() => onChange(undefined)}>
            <CloseIcon />
          </CloseButton>
        )}
      </FrequencyButton>
      <BottomSheet visible={openModal} onDismiss={() => setOpenModal(false)}>
        {frequencies.map(item => (
          <OptionButton
            key={item.value}
            onPress={() => handleChangeFrequency(item)}
          >
            <OptionButtonText>{item.label}</OptionButtonText>
          </OptionButton>
        ))}
      </BottomSheet>
    </>
  )
}

export default Frequency
