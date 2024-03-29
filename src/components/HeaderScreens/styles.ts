import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  padding-bottom: 10px;
`
export const BackButton = styled.TouchableOpacity`
  width: 80px;
`
export const BackIcon = styled(AntDesign).attrs({
  name: 'arrowleft',
  size: 24
})`
  color: ${({ theme }) => theme.colors.title};
`
export const ActionButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.link};
  align-items: center;
  justify-content: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  padding: 7px 0;
  width: 80px;
  border-radius: 6px;
`
export const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`

export const ScreenTitle = styled.Text`
  font-size: 19px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`
export const MockView = styled.View`
  width: 65px;
`
