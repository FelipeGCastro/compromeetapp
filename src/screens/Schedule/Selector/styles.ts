import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

interface ContainerProps {
  disabled: boolean
}

export const Container = styled.View<ContainerProps>`
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  margin-bottom: 20px;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 10px;
`
export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`

export const InputAndButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
interface InputProps {
  showInput: boolean
  focused: boolean
}
export const InputContainer = styled.View<InputProps>`
  background-color: ${({ theme }) => theme.colors.textLight};
  border-radius: 15px;
  height: 30px;
  width: ${({ showInput }) => (showInput ? '100%' : '0')};
  padding: ${({ showInput }) => (showInput ? '0 15px' : '0')};
  border: ${({ theme, focused }) =>
    focused ? '1px solid ' + theme.colors.success : '0'};
  max-width: 150px;
  margin: 0 10px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
`
export const InputField = styled.TextInput`
  flex: 1;
  height: 30px;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`
interface ButtonProps {
  focused: boolean
}
export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})<ButtonProps>`
  width: ${({ focused }) => (focused ? '35px' : '30px')};
  height: ${({ focused }) => (focused ? '35px' : '30px')};
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.link};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
`
export const IconPlus = styled(AntDesign).attrs({
  name: 'plus',
  size: 22
})`
  color: ${({ theme }) => theme.colors.textLight};
`
export const IconSend = styled(MaterialIcons).attrs({
  name: 'send',
  size: 18
})`
  color: ${({ theme }) => theme.colors.textLight};
  margin-left: 3px;
`
export const ContentContainer = styled.ScrollView`
  padding-left: 10px;
`
export const ContentWrapper = styled.View`
  padding-right: 40px;
`
export const ContentRow = styled.View`
  flex-direction: row;
`
interface Item {
  selected: boolean
  disabled?: boolean
}
export const ItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})<Item>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.link : theme.colors.textLight};
  height: 30px;
  z-index: ${({ disabled }) => (disabled ? 4 : 1)};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 4px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
`
export const ItemTitle = styled.Text<Item>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.textLight : theme.colors.text};
`
