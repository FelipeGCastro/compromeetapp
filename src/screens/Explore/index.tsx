import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import CommitmentCard from '../../components/CommitmentCard'
import { SearchInput } from '../../components/SearchInput'
import { UserCard } from '../../components/UserCard'
import { commitmentsData } from '../Home/temp'

import { Container } from './styles'

const user = {
  id: 'user84as8d4as84d98',
  name: 'Luiz Castro',
  avatar_url: 'http://github.com/felipegcastro.png',
  username: 'felipegcastro'
}

export const Explore = () => {
  const [search, setSearch] = useState('')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Procurar amigos e compromissos"
        />
        <CommitmentCard noLabel data={{ index: 0, ...commitmentsData[0] }} />
        <UserCard
          user={user}
          onPress={user => {}}
          onPressButton={() => {}}
          textButton="Enviar Convite"
        />
        <CommitmentCard noLabel data={{ index: 1, ...commitmentsData[1] }} />
      </Container>
    </SafeAreaView>
  )
}
