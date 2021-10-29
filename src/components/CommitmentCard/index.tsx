import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Alert } from 'react-native'

import {
  Container,
  HeaderInfoContainer,
  Label,
  CompletedIcon,
  DateAndTimeContainer,
  ClockIcon,
  DateAndTimeText,
  MoreButton,
  MoreIcon,
  Header,
  CommitmentText,
  BoldText,
  ContentWrapper,
  Footer,
  FriendContainer,
  FriendIcon,
  FriendText,
  CloseButton,
  CloseIcon
} from './styles'

const CommitmentCard = () => {
  const navigation = useNavigation()
  function handlePress() {
    Alert.alert('Tem certeza?')
  }

  function handleCardPress() {
    navigation.navigate('createCommitment' as never)
  }
  return (
    <Container onPress={handleCardPress}>
      <Header>
        <HeaderInfoContainer>
          <Label>#1</Label>
          <CompletedIcon />
        </HeaderInfoContainer>
        <MoreButton onPress={handlePress}>
          <MoreIcon />
        </MoreButton>
      </Header>
      <ContentWrapper>
        <CommitmentText>
          <BoldText>"</BoldText>
          Arrume Tempo para seu amigo que não fala a muito tempo.
          <BoldText>"</BoldText>
        </CommitmentText>
      </ContentWrapper>
      <Footer>
        <FriendContainer>
          <FriendIcon />
          <FriendText>@lucas.silva.pereira ...</FriendText>
        </FriendContainer>
        <DateAndTimeContainer>
          <ClockIcon />
          <DateAndTimeText>09/10 14:30</DateAndTimeText>
        </DateAndTimeContainer>
        <CloseButton onPress={handlePress}>
          <CloseIcon />
        </CloseButton>
      </Footer>
    </Container>
  )
}

export default CommitmentCard
