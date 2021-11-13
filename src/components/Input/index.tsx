import React, { Component } from 'react'

import { InputContainer, InputContent } from './styles'
import { Ionicons } from '@expo/vector-icons'
import theme from '../../global/styles/theme'

type IconNameType = keyof typeof Ionicons.glyphMap
interface IInputProps {
  value: string
  placeholder: string
  onChangeText: (txt: string) => void
  IconName?: IconNameType
  onBlur?: () => void
  onFocus?: () => void
}
const Input = ({ IconName = 'at-outline', ...rest }: IInputProps) => {
  return (
    <InputContainer>
      {IconName && (
        <Ionicons
          style={{ marginRight: 7 }}
          name={IconName}
          size={20}
          color={theme.colors.text}
        />
      )}

      <InputContent {...rest} />
    </InputContainer>
  )
}

export default Input
