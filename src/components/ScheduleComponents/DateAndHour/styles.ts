import styled from 'styled-components/native'

export const DateAndHourWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 15px;
`

export const DateButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.textLight};
  padding: 5px 15px;
  border-radius: 6px;
  elevation: 1;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  margin-right: 10px;
`
export const DateButtonText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`
export const HourButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.textLight};
  padding: 5px 15px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
`
export const HourButtonText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`
