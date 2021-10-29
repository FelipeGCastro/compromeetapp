import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'
import { SearchInput } from '../../components/SearchInput'

import { Container } from './styles'

export const PeopleSelector = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens title="Adicionar Pessoas" buttonLabel="Guardar" />
        <SearchInput placeholder="Amigos" onChange={text => {}} />
      </Container>
    </SafeAreaView>
  )
}
