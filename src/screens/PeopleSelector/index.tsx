import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect, useState } from 'react'

import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'
import { SearchInput } from '../../components/SearchInput'
import { UserCard } from '../../components/UserCard'

import { Container, SearchingList, SelectedUsers } from './styles'
import { users } from './temp'
interface IUser {
  id: string
  name: string
  avatarUrl: string
  username: string
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
  const [usersSelected, setUsersSelected] = useState<typeof users>([])

  useEffect(() => {
    if (route.params?.people) {
      setUsersSelected(route.params?.people)
    }
  }, [route.params?.people])

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

  function handleRemoveUser(user: IUser) {
    const filtedUsers = usersSelected.filter(u => u.id !== user.id)
    setUsersSelected(filtedUsers)
  }

  async function handleSavePress() {
    navigation.navigate('CommitmentScreen' as 'PeopleSelector', {
      people: usersSelected
    })
  }

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
        />
        {searching ? (
          <SearchingList
            data={users}
            keyboardShouldPersistTaps="handled"
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <UserCard user={item} onPress={handleSelectUser} noButton />
            )}
          />
        ) : (
          <SelectedUsers
            data={usersSelected}
            keyExtractor={item => item.id}
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
