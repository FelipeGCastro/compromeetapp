import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 15px 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const SearchingList = styled.FlatList`` as unknown as typeof FlatList
export const SelectedUsers = styled.FlatList`` as unknown as typeof FlatList
