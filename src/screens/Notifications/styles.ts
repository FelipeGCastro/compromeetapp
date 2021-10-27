import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 10px 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const NotificationTitle = styled.Text`
  font-size: 19px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin-bottom: 15px;
`
export const NotificationList = styled.FlatList`` as unknown as typeof FlatList
