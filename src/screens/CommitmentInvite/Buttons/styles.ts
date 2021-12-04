import styled from 'styled-components/native'

export const ButtonsContainer = styled.View`
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 10px;
`
export const RejectButton = styled.TouchableOpacity`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.colors.attention};
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-right: 5px;
  border-radius: 6px;
`
export const AcceptButton = styled.TouchableOpacity`
  padding: 8px 15px;
  background-color: ${({ theme }) => theme.colors.link};
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  border-radius: 6px;
`
export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 15px;
  margin-top: 3px;
`
