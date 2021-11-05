import styled from 'styled-components/native'
import { Feather, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 3px 10px;
  border-radius: 6px;
  margin-bottom: 10px;
`
export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const HeaderInfoContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const Label = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  margin-right: 7px;
`
export const CompletedIcon = styled(FontAwesome).attrs({
  name: 'check-circle',
  size: 20
})`
  color: ${({ theme }) => theme.colors.success};
  margin-right: 7px;
`
export const MoreButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})``
export const MoreIcon = styled(Feather).attrs({
  name: 'more-vertical',
  size: 18
})`
  color: ${({ theme }) => theme.colors.title};
`
export const ContentWrapper = styled.View`
  border-radius: 6px;
`

export const CommitmentTextContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  font-size: 20px;
  padding: 20px 5px;
`
export const CommitmentText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.lightItalico};
  text-align: center;
`
export const BoldText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const FavoriteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  margin-right: 15px;
  margin-left: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
type IconProps = { active: boolean }
export const FavoriteIcon = styled(AntDesign).attrs({
  size: 17
})<IconProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.attention : theme.colors.title};
`
export const FavoriteNumber = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  margin-left: 2px;
`
export const FriendContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const FriendIcon = styled(Ionicons).attrs({
  name: 'people-circle',
  size: 17
})`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 2px;
`
export const FriendText = styled.Text`
  color: ${({ theme }) => theme.colors.link};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 14px;
`
export const DateAndTimeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`
export const ClockIcon = styled(AntDesign).attrs({
  name: 'clockcircle',
  size: 13
})`
  color: ${({ theme }) => theme.colors.text};
  margin-right: 4px;
`
export const DateAndTimeText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  margin-left: 15px;
`
export const CloseIcon = styled(AntDesign).attrs({
  name: 'close',
  size: 22
})`
  color: ${({ theme }) => theme.colors.attention};
`
