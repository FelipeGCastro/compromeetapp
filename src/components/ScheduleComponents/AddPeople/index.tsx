import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Container, PeopleIcon, PeopleText } from './styles'

const AddPeople = () => {
  const navigation = useNavigation()

  function handleAddPeoplePress() {
    navigation.navigate('peopleSelector' as never)
  }

  return (
    <Container onPress={handleAddPeoplePress}>
      <PeopleIcon />
      <PeopleText>Adicionar Pessoas</PeopleText>
    </Container>
  )
}

export default AddPeople
