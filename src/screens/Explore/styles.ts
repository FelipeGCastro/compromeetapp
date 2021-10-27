import styled from 'styled-components/native'
import { MaterialIcons } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const SearchInputContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  border-radius: 20px;
  margin-top: 15px;
  padding: 0 10px 0 20px;
  margin-bottom: 20px;
`
export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
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
