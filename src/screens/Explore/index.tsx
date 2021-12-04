import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommitmentList } from '../../components/CommitmentList'
import { SearchInput } from '../../components/SearchInput'
import { Tab } from '../../components/Tab'
import { UserCard } from '../../components/UserCard'

import { api } from '../../services/api'

import { Container, UserList } from './styles'

interface ICommitment {
  id: number
  text: string
  favorites: number
  commitmentFavorite: { user_id?: number; id?: number }[]
  user_id: number
  user: {
    id: number
    name: string
    avatar_url: string
  }
}
interface User {
  id: number
  name: string
  avatar_url: string
  username?: string
}

export const Explore = () => {
  const [search, setSearch] = useState('')
  const [commitments, setCommitments] = useState<ICommitment[]>([])
  const [tab, setTab] = useState('Meets')
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getCommitments = async () => {
      try {
        const result = await api.get('commitments')
        setCommitments(result.data)
      } catch (error) {
        console.log('ERROR', error)
        Alert.alert('Erro ao buscar compromissos')
      }
    }
    getCommitments()
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await api.get('users')
        console.log(result.data)
        setUsers(result.data)
      } catch (error) {
        console.log('ERROR', error)
        Alert.alert('Erro ao buscar users')
      }
    }
    getUsers()
  }, [])

  const handleAddUser = async (friendId: number) => {
    try {
      const result = await api.post('friendship', { friendId })
      if (result.data) {
        const newUsers = users.filter(user => user.id !== friendId)
        setUsers(newUsers)
      }
    } catch (error) {
      console.log('ERROR', error)
      Alert.alert('Erro ao Adicionar amigo')
    }
  }
  const onTabPress = (tab: string) => {
    setTab(tab)
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Procurar amigos e compromissos"
        />
        <Tab onTabPress={onTabPress} />
        {tab === 'Meets' ? (
          <CommitmentList
            commitment={commitments}
            noLabel
          />
        ) : (
          <UserList
            data={users}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <UserCard
                user={item}
                onPressButton={handleAddUser}
                textButton="Adicionar"
              />
            )}
          />
        )}
      </Container>
    </SafeAreaView>
  )
}
