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

interface FrequencyProps {
  onChange: (value?: string) => void
  item?: string
}
type Frequencies = { [key: string]: string }
const frequencies: Frequencies = {
  '1d': 'Diária',
  '3d': '3 Dias',
  '7d': 'Semanalmente',
  '15d': '15 dias',
  '30d': 'Mensalmente'
}
const Frequency = ({ onChange, item }: FrequencyProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  function handleChangeFrequency(item: string) {
    setOpenModal(false)
    onChange(item)
  }
  return (
    <>
      <FrequencyButton onPress={() => setOpenModal(true)}>
        <FrequencyText>Frequencia: {item && frequencies[item]}</FrequencyText>
        {item && (
          <CloseButton onPress={() => onChange(undefined)}>
            <CloseIcon />
          </CloseButton>
        )}
      </FrequencyButton>
      <BottomSheet visible={openModal} onDismiss={() => setOpenModal(false)}>
        {Object.keys(frequencies).map(itemIndex => (
          <OptionButton
            key={itemIndex}
            onPress={() => handleChangeFrequency(itemIndex)}
          >
            <OptionButtonText>{frequencies[itemIndex]}</OptionButtonText>
          </OptionButton>
        ))}
      </BottomSheet>
    </>
  )
}

export default Frequency
