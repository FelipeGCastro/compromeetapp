import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useRef, useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'
import { SearchInput } from '../../components/SearchInput'
import { UserCard } from '../../components/UserCard'
import { api } from '../../services/api'

import { Container, SearchingList, SelectedUsers } from './styles'
interface IUser {
  id: number
  name: string
  avatar_url: string
  username?: string
}

type PeopleSelectorStackParamList = {
  PeopleSelector: {
    people: IUser[]
  }
}
type Props = StackScreenProps<PeopleSelectorStackParamList, 'PeopleSelector'>
export const PeopleSelector = ({ route, navigation }: Props) => {
  const [searching, setSearching] = useState(false)
  const [searchInput, setSearchInput] = useState('')
  const [users, setUsers] = useState<IUser[]>([])
  const [usersSelected, setUsersSelected] = useState<IUser[]>([])

  useEffect(() => {
    if (route.params?.people) {
      setUsersSelected(route.params?.people)
    }
  }, [route.params?.people])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await api.get('friends')
        console.log(result.data)
        setUsers(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers()
  }, [])

  useEffect(() => {
    if (/\S/.test(searchInput)) setSearching(true)
    else setSearching(false)
  }, [searchInput])

  function handleChangeText(text: string) {
    setSearchInput(text)
  }
  function handleSelectUser(user: IUser) {
    const hasUser = usersSelected.find(us => us.id === user.id)
    if (!hasUser) {
      setUsersSelected([...usersSelected, user])
    }
    setSearching(false)
    setSearchInput('')
  }

  function handleRemoveUser(userId: number) {
    const filtedUsers = usersSelected.filter(u => u.id !== userId)
    setUsersSelected(filtedUsers)
  }

  async function handleSavePress() {
    navigation.navigate('CommitmentScreen' as 'PeopleSelector', {
      people: usersSelected
    })
  }

  const handleOnFocus = () => setSearching(true)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <HeaderScreens
          title="Adicionar Pessoas"
          onPress={handleSavePress}
          buttonLabel="Guardar"
        />
        <SearchInput
          value={searchInput}
          placeholder="Amigos"
          onChange={handleChangeText}
          onFocus={handleOnFocus}
        />
        {searching ? (
          <SearchingList
            data={users}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <UserCard user={item} onPress={handleSelectUser} noButton />
            )}
          />
        ) : (
          <SelectedUsers
            data={usersSelected}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <UserCard
                user={item}
                onPressButton={handleRemoveUser}
                remove
                textButton="Remover"
              />
            )}
          />
        )}
      </Container>
    </SafeAreaView>
  )
}
