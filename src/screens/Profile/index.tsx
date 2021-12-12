import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommitmentList } from '../../components/CommitmentList'
import { PhotoOptions } from '../../components/PhotoOptions'
import { useAuth } from '../../hooks/auth'
import { IUser } from '../../hooks/meet/types'
import { api } from '../../services/api'

import {
  Container,
  ProfileCard,
  ImageContainer,
  ImageButton,
  ImageIcon,
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
    isPublic: boolean
    user_id: number
    meets: number
  }
  invites: number
  frequency?: string
  status: string
  timestamp: string
  user_id: number
  user: IUser
}
export const Profile: React.FC = () => {
  const { user, signOut, getMe, setUser } = useAuth()
  const [photoModal, setPhotoModal] = useState(false)

  const [commitmentPlans, setCommitmentPlans] = useState<ICommitmentPlans[]>([])
  useEffect(() => {
    getMe()
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

  const handlePressPhoto = async (imgUri: string) => {
    console.log(imgUri)
    try {
      const formData = new FormData()
      formData.append('avatar', {
        uri: imgUri,
        type: 'image/jpg',
        name: user.username
      })
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      const result = await api.post('avatar', formData, config)
      if (result.data?.avatar_url) {
        setUser(result.data)
      }
    } catch (error) {
      console.log('UPDATE AVATAR', error)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <ProfileCard>
          <ImageContainer>
            <UserImg source={{ uri: user.avatar_url }} />
            <ImageButton onPress={() => setPhotoModal(true)}>
              <ImageIcon name="camera-alt" size={22} />
            </ImageButton>
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
        <CommitmentList commitmentPlans={commitmentPlans} isCommitmentPlan />
        <PhotoOptions
          visible={photoModal}
          setOpenModal={setPhotoModal}
          setImage={handlePressPhoto}
        />
      </Container>
    </SafeAreaView>
  )
}
