import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { CommitmentList } from '../../components/CommitmentList'
import { useAuth } from '../../hooks/auth'

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

export const Profile: React.FC = () => {
  const { user, signOut } = useAuth()

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
                <FriendsNumber>52</FriendsNumber>
                <FriendsLabel>Amigos</FriendsLabel>
              </FriendsContainer>
              <CommitmentContainer>
                <CommitmentNumber>10</CommitmentNumber>
                <CommitmentLabel>Compromissos</CommitmentLabel>
              </CommitmentContainer>
            </OptionsContainer>
          </ProfileInfoContainer>
          <SettingsButton onPress={signOut}>
            <SettingsIcon />
          </SettingsButton>
        </ProfileCard>
        <CommitmentTitle>Seus Compromissos</CommitmentTitle>
        {/* <CommitmentList
          commitmentPlans={[]}
        /> */}
      </Container>
    </SafeAreaView>
  )
}
