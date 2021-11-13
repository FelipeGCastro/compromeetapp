import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Container, PeopleIcon, PeopleText } from './styles'

interface IUser {
  id: string
  name: string
  avatarUrl: string
  username: string
}

interface IAddPeopleProps {
  people: IUser[]
}

const AddPeople = ({ people }: IAddPeopleProps) => {
  const navigation = useNavigation()

  function handleAddPeoplePress() {
    navigation.navigate('PeopleSelector' as never, { people } as never)
  }

  return (
    <Container onPress={handleAddPeoplePress}>
      <PeopleIcon />
      <PeopleText>Adicionar Pessoas{!!people.length && ': '}</PeopleText>
      {people.map(user => (
        <PeopleText key={user.id}> - {user.name}</PeopleText>
      ))}
    </Container>
  )
}

export default AddPeople
