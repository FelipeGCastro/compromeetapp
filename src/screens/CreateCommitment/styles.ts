import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 15px 7px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const CommitmentInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.lightItalico};
  font-size: 20px;
  height: 130px;
  border-radius: 6px;
  padding: 10px;
`
