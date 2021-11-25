import styled from 'styled-components/native'

export const CommitmentFixedContainer = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`
export const CommitmentText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.lightItalico};
  font-size: 20px;
  padding: 10px;
  text-align: center;
`
