import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Container, PeopleIcon, PeopleText, PeopleTextPerson } from './styles'

interface IUser {
  id: number
  name: string
  avatar_url: string
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
        <PeopleTextPerson key={user.id}> - @{user.username}</PeopleTextPerson>
      ))}
    </Container>
  )
}

export default AddPeople
