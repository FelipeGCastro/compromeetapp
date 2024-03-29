import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'
import { FlatList } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const ProfileCard = styled.View`
  flex-direction: row;
  border-radius: 6px;
  margin-top: 20px;
  padding: 12px 5px;
`

export const ImageContainer = styled.View`
  border-radius: 50px;
  width: 100px;
  height: 100px;
  border: solid 5px ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: white;
`
export const UserImg = styled.Image`
  width: 90px;
  height: 90px;
  border-radius: 48px;
`

export const ImageButton = styled.TouchableOpacity`
  position: absolute;
  width: 35px;
  height: 35px;
  border-radius: 20px;
  right: -5px;
  bottom: -5px;
  background-color: ${({ theme }) => theme.colors.link};
  align-items: center;
  justify-content: center;
`
export const ImageIcon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.textLight};
`
export const ProfileInfoContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`
export const ProfileNameAndUsername = styled.View``
export const ProfileName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  margin-bottom: -3px;
`
export const ProfileUserName = styled.Text`
  color: ${({ theme }) => theme.colors.link};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  margin-top: 3px;
`
export const OptionsContainer = styled.View`
  flex-direction: row;
  margin-top: 20px;
`
export const FriendsContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  align-items: center;
  margin-right: 30px;
`
export const FriendsLabel = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const FriendsNumber = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const CommitmentContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  align-items: center;
`

export const CommitmentLabel = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const CommitmentNumber = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const SettingsButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  color: ${({ theme }) => theme.colors.link};
`
export const SettingsIcon = styled(MaterialIcons).attrs({
  name: 'settings',
  size: 24
})`
  color: ${({ theme }) => theme.colors.title};
`
export const CommitmentTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin: 10px 0;
`

export const CommitmentList = styled.FlatList`` as unknown as typeof FlatList
