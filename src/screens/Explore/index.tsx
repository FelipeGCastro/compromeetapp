import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import CommitmentCard from '../../components/CommitmentCard'
import { UserCard } from '../../components/UserCard'

import {
  Container,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  SearchIcon
} from './styles'

export const Explore: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <SearchInputContainer>
          <SearchInput placeholder="Procure amigos e compromissos" />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
        </SearchInputContainer>
        <CommitmentCard />
        <UserCard />
        <CommitmentCard />
      </Container>
    </SafeAreaView>
  )
}
