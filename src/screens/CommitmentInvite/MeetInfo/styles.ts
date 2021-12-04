import styled from 'styled-components/native'

export const Container = styled.View`
  margin-top: -15px;
  align-items: stretch;
  justify-content: center;
`

export const DateField = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 24px;
  margin-top: 3px;
  align-self: center;
  margin-bottom: 10px;
  max-width: 90%;
  text-align: center;
`

export const FrequencyField = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: 20px;
  margin-top: 3px;
  align-self: center;
  margin-bottom: 10px;
`
export const DataLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textFading};
  font-size: 14px;
  align-self: center;
`
export const FrequencyLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textFading};
  font-size: 14px;
  align-self: center;
`
