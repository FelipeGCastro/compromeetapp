import styled from 'styled-components/native'
import { Feather, AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
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
  margin-right: 10px;
`
export const CompletedIcon = styled(FontAwesome).attrs({
  name: 'check-circle',
  size: 20
})`
  color: ${({ theme }) => theme.colors.success};
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
  padding: 20px 5px;
  border-radius: 6px;
`
export const CommitmentText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.lightItalico};
`
export const BoldText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
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
