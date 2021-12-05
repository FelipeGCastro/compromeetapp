import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const SearchInputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.textLight};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  border-radius: 20px;
  padding: 0 10px 0 20px;
  margin-bottom: 20px;
  elevation: 4;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
`
export const Input = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const SearchButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})``

export const SearchIcon = styled(MaterialIcons).attrs({
  name: 'search',
  size: 24
})`
  color: ${({ theme }) => theme.colors.text};
`
