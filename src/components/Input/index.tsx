import React, { Component } from 'react'

import { InputContainer, InputContent } from './styles'
import { Ionicons } from '@expo/vector-icons'
import theme from '../../global/styles/theme'
import { TextInputProps } from 'react-native'

type IconNameType = keyof typeof Ionicons.glyphMap
interface IInputProps extends TextInputProps {
  IconName?: IconNameType
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
