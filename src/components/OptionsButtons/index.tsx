import React from 'react'

import {
  OptionsButtonContainer,
  OptionButtonLeft,
  OptionButtonRight,
  OptionText
} from './styles'

type Options = {
  firstOption: {
    value: boolean
    label: string
  }
  secondOption: {
    value: boolean
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
        active={!data.selected}
      >
        <OptionText active={!data.selected}>
          {data.firstOption.label}
        </OptionText>
      </OptionButtonLeft>
      <OptionButtonRight
        onPress={() => onChange(data.secondOption.value)}
        active={data.selected}
      >
        <OptionText active={data.selected}>
          {data.secondOption.label}
        </OptionText>
      </OptionButtonRight>
    </OptionsButtonContainer>
  )
}
