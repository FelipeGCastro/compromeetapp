import React from 'react'
import { UserImage } from '../UserImage'
import {
  Container,
  InfoAndInviteWrapper,
  UserName,
  UserUsername,
  EnviteButton,
  EnviteButtonText
} from './styles'
const avatarUrl = 'http://github.com/felipegcastro.png'
export const UserCard: React.FC = () => {
  return (
    <Container>
      <UserImage avatarUrl={avatarUrl} />
      <InfoAndInviteWrapper>
        <UserName>Lucas Moura Castro</UserName>
        <UserUsername>@lucas.silva</UserUsername>
        <EnviteButton>
          <EnviteButtonText>Enviar Convite</EnviteButtonText>
        </EnviteButton>
      </InfoAndInviteWrapper>
    </Container>
  )
}
