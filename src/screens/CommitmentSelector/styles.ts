import { FlatList } from 'react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 15px 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
`
export const CommitmentList = styled.FlatList`` as unknown as typeof FlatList
