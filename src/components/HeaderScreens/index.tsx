import { useNavigation } from '@react-navigation/core'
import React from 'react'

import {
  HeaderContainer,
  BackButton,
  BackIcon,
  ScreenTitle,
  ActionButton,
  ActionButtonText
} from './styles'

interface IHeaderProps {
  title: string
  buttonLabel: string
  onPress?: () => Promise<void>
  disableButton?: boolean
}

export const HeaderScreens = ({
  title,
  buttonLabel,
  onPress,
  disableButton
}: IHeaderProps) => {
  const navigation = useNavigation()
  function handleBackPress() {
    navigation.goBack()
  }
  return (
    <HeaderContainer>
      <BackButton onPress={handleBackPress}>
        <BackIcon />
      </BackButton>
      <ScreenTitle>{title}</ScreenTitle>
      <ActionButton disabled={disableButton} onPress={onPress}>
        <ActionButtonText>{buttonLabel}</ActionButtonText>
      </ActionButton>
    </HeaderContainer>
  )
}
