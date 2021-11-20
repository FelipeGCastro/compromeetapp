import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View``
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
export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.link};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 2;
`
export const IconPlus = styled(AntDesign).attrs({
  name: 'plus',
  size: 22
})`
  color: ${({ theme }) => theme.colors.textLight};
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
}
export const ItemContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})<Item>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.colors.link : theme.colors.textLight};
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  margin: 4px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
`
export const ItemTitle = styled.Text<Item>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.textLight : theme.colors.text};
`
