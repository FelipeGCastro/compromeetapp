import React from 'react'
import { UserImage } from '../UserImage'
import {
  Container,
  InfoAndInviteWrapper,
  UserName,
  UserUsername,
  ActionButton,
  ActionButtonText
} from './styles'

interface IUser {
  id: string
  name: string
  username: string
  avatar_url: string
}
interface IUserCard {
  user: IUser
  onPress?: (user: IUser) => void
  noButton?: boolean
  onPressButton?: (user: IUser) => void
  textButton?: string
  remove?: boolean
}

export const UserCard = ({
  user,
  noButton,
  onPress = () => {},
  onPressButton = () => {},
  textButton,
  remove
}: IUserCard) => {
  function handleOnPress() {
    onPress(user)
  }
  return (
    <Container onPress={handleOnPress}>
      <UserImage avatarUrl={user.avatar_url} />
      <InfoAndInviteWrapper>
        <UserName>{user.name}</UserName>
        <UserUsername>@{user.username}</UserUsername>
        {!noButton && (
          <ActionButton remove={!!remove} onPress={() => onPressButton(user)}>
            <ActionButtonText>{textButton}</ActionButtonText>
          </ActionButton>
        )}
      </InfoAndInviteWrapper>
    </Container>
  )
}
