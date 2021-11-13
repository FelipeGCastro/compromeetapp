import { useNavigation } from '@react-navigation/core'
import React from 'react'

import {
  HeaderContainer,
  BackButton,
  BackIcon,
  ScreenTitle,
  ActionButton,
  ActionButtonText,
  MockView
} from './styles'

interface IHeaderProps {
  title: string
  buttonLabel?: string
  onPress?: () => Promise<void>
  disableButton?: boolean
  noButton?: boolean
  noBackButton?: boolean
}

export const HeaderScreens = ({
  title,
  noButton,
  noBackButton,
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
      {noBackButton ? (
        <MockView />
      ) : (
        <BackButton onPress={handleBackPress}>
          <BackIcon />
        </BackButton>
      )}

      <ScreenTitle>{title}</ScreenTitle>
      {noButton ? (
        <MockView />
      ) : (
        <ActionButton disabled={disableButton} onPress={onPress}>
          <ActionButtonText>{buttonLabel}</ActionButtonText>
        </ActionButton>
      )}
    </HeaderContainer>
  )
}
