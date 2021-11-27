import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: 15px;
  align-items: stretch;
  justify-content: center;
`

export const DateField = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  margin-top: 3px;
  align-self: center;
  margin-bottom: 15px;
`

export const FrequencyField = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  margin-top: 3px;
  align-self: center;
`
