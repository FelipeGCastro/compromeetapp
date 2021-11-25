import styled from 'styled-components/native'

export const PickerButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
`
export const PickerButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textFading};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;
`
