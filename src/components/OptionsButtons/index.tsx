import React from 'react'

import {
  OptionsButtonContainer,
  OptionButtonLeft,
  OptionButtonRight,
  OptionText
} from './styles'

type Options = {
  firstOption: {
    value: string | number
    label: string
  }
  secondOption: {
    value: string | number
    label: string
  }
  selected: any
}
interface OptionsButtonsProps {
  onChange: (value: any) => void
  data: Options
}

export const OptionsButtons = ({ onChange, data }: OptionsButtonsProps) => {
  return (
    <OptionsButtonContainer>
      <OptionButtonLeft
        onPress={() => onChange(data.firstOption.value)}
        active={data.selected === data.firstOption.value}
      >
        <OptionText active={data.selected === data.firstOption.value}>
          {data.firstOption.label}
        </OptionText>
      </OptionButtonLeft>
      <OptionButtonRight
        onPress={() => onChange(data.secondOption.value)}
        active={data.selected === data.secondOption.value}
      >
        <OptionText active={data.selected === data.secondOption.value}>
          {data.secondOption.label}
        </OptionText>
      </OptionButtonRight>
    </OptionsButtonContainer>
  )
}
