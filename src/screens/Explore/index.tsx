import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import CommitmentCard from '../../components/CommitmentCard'
import { SearchInput } from '../../components/SearchInput'
import { UserCard } from '../../components/UserCard'

import { Container } from './styles'

export const Explore: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <SearchInput
          onChange={text => {
            console.log(text)
          }}
          placeholder="Procurar amigos e compromissos"
        />
        <CommitmentCard />
        <UserCard />
        <CommitmentCard />
      </Container>
    </SafeAreaView>
  )
}
