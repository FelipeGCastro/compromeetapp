import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommitmentList } from '../../components/CommitmentList'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import {
  Container,
  ProfileCard,
  ImageContainer,
  ProfileInfoContainer,
  ProfileNameAndUsername,
  ProfileName,
  ProfileUserName,
  OptionsContainer,
  FriendsContainer,
  FriendsLabel,
  FriendsNumber,
  CommitmentContainer,
  CommitmentLabel,
  CommitmentNumber,
  UserImg,
  SettingsButton,
  SettingsIcon,
  CommitmentTitle
} from './styles'

interface ICommitmentPlans {
  id: number
  commitment_id: number
  commitment: {
    id: number
    text: string
    favorites: number
    commitmentFavorite: { user_id?: number; id?: number }[]
  }
  frequency?: string
  status: string
  timestamp: Date
  user_id: number
}
export const Profile: React.FC = () => {
  const { user, signOut } = useAuth()

  const [commitmentPlans, setCommitmentPlans] = useState<ICommitmentPlans[]>([])
  useEffect(() => {
    getCommitments()
  }, [])

  async function getCommitments() {

    try {
      const result = await api.get('commitment_plans')
      setCommitmentPlans(result.data)
    } catch (error) {
      console.log(error)
      Alert.alert('Error ao buscar seus compromissos')
    }
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <ProfileCard>
          <ImageContainer>
            <UserImg source={{ uri: user.avatarUrl }} />
          </ImageContainer>
          <ProfileInfoContainer>
            <ProfileNameAndUsername>
              <ProfileName>{user.name}</ProfileName>
              <ProfileUserName>@{user.username}</ProfileUserName>
            </ProfileNameAndUsername>
            <OptionsContainer>
              <FriendsContainer>
                <FriendsNumber>{user.friendships || 0}</FriendsNumber>
                <FriendsLabel>Amigos</FriendsLabel>
              </FriendsContainer>
              <CommitmentContainer>
                <CommitmentNumber>{commitmentPlans.length}</CommitmentNumber>
                <CommitmentLabel>Meets</CommitmentLabel>
              </CommitmentContainer>
            </OptionsContainer>
          </ProfileInfoContainer>
          <SettingsButton onPress={signOut}>
            <SettingsIcon />
          </SettingsButton>
        </ProfileCard>
        <CommitmentTitle>Meets Realizadas</CommitmentTitle>
        <CommitmentList
          commitmentPlans={commitmentPlans}
          isCommitmentPlan
        />
      </Container>
    </SafeAreaView>
  )
}
