import { useNavigation } from '@react-navigation/core'
import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import theme from '../../../../global/styles/theme'
import { useMeet } from '../../../../hooks/meet'

import { Container, Icon } from './styles'

export const ActionButton = () => {
  const navigation = useNavigation()
  const { reset } = useMeet()

  function handleButtonPress() {
    reset()
    navigation.navigate('CommitmentScreen' as never)
  }

  return (
    <Container onPress={handleButtonPress}>
      <LinearGradient
        colors={[theme.colors.primary, theme.colors.secondary]}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: 55,
          borderRadius: 28,
          transform: [{ rotate: '-90deg' }]
        }}
      />
      <Icon />
    </Container>
  )
}
