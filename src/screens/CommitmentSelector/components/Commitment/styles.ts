import styled from 'styled-components/native'

export const ContentWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.textLight};
  padding: 20px 5px;
  border-radius: 6px;
  margin-bottom: 10px;
`
export const CommitmentText = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.lightItalico};
  text-align: center;
`
export const BoldText = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`
