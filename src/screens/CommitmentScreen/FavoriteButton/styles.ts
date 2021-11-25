import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const AddCommitmentButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 7px;
  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: ${({ theme }) => theme.colors.link};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
`
export const AddCommitmentText = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  margin: 0 7px;
`
export const AddCommitmentIcon = styled(FontAwesome).attrs({
  name: 'heart',
  size: 16
})`
  color: ${({ theme }) => theme.colors.textLight};
`
