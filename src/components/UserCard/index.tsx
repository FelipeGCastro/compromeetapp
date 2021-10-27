import React from 'react'
import {
  Container,
  ImageContainer,
  UserImage,
  InfoAndInviteWrapper,
  UserName,
  UserUsername,
  EnviteButton,
  EnviteButtonText
} from './styles'

export const UserCard: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        <UserImage source={{ uri: 'https://github.com/felipegcastro.png' }} />
      </ImageContainer>
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
