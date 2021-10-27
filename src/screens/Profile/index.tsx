import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'

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
  SettingsIcon
} from './styles'

export const Profile: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <ProfileCard>
          <ImageContainer>
            <UserImg source={{ uri: 'http://github.com/felipegcastro.png' }} />
          </ImageContainer>
          <ProfileInfoContainer>
            <ProfileNameAndUsername>
              <ProfileName>Luiz Felipe Castro</ProfileName>
              <ProfileUserName>@luizfelipecastro</ProfileUserName>
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
          <SettingsButton>
            <SettingsIcon />
          </SettingsButton>
        </ProfileCard>
      </Container>
    </SafeAreaView>
  )
}
