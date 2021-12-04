import React from 'react'

import {
  ButtonsContainer,
  RejectButton,
  AcceptButton,
  ButtonText
} from './styles'
interface IButtonsProps {
  onePressAccept: () => void
  onPressReject: () => void
}
const Buttons = ({ onePressAccept, onPressReject }: IButtonsProps) => {
  return (
    <ButtonsContainer>
      <RejectButton onPress={onPressReject}>
        <ButtonText>Rejeitar</ButtonText>
      </RejectButton>
      <AcceptButton onPress={onePressAccept}>
        <ButtonText>Aceitar</ButtonText>
      </AcceptButton>
    </ButtonsContainer>
  )
}

export default Buttons
