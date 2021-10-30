import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
  margin-top: 10px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.textLight};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
  padding: 5px 15px;
  align-self: flex-start;
  border-radius: 6px;
`
export const PeopleIcon = styled(Ionicons).attrs({
  name: 'people-circle-sharp',
  size: 24
})`
  margin-right: 5px;
  color: ${({ theme }) => theme.colors.title};
`
export const PeopleText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`
