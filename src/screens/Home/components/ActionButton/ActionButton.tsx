import { useNavigation } from '@react-navigation/core'
import React from 'react'

import { Container, Icon } from './styles'

export const ActionButton = () => {
  const navigation = useNavigation()

  function handleButtonPress() {
    navigation.navigate('CommitmentScreen' as never)
  }

  return (
    <Container onPress={handleButtonPress}>
      <Icon />
    </Container>
  )
}
