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
  onChange: (value?: number) => void
  item?: number
}
type Frequencies = { [key: string]: string }
const frequencies: Frequencies = {
  1: 'Diária',
  3: '3 Dias',
  7: 'Semanalmente',
  15: '15 dias',
  30: 'Mensalmente'
}
const Frequency = ({ onChange, item }: FrequencyProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false)

  function handleChangeFrequency(item: number) {
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
            onPress={() => handleChangeFrequency(Number(itemIndex))}
          >
            <OptionButtonText>{frequencies[itemIndex]}</OptionButtonText>
          </OptionButton>
        ))}
      </BottomSheet>
    </>
  )
}

export default Frequency
