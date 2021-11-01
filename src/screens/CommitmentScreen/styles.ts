import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 15px 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const PrivacyAndPhoto = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const PhotoButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.textLight};
  justify-content: center;
  align-items: center;
  height: 30px;
  padding: 0 15px;
  margin-top: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
`
export const PhotoIcon = styled(FontAwesome).attrs({
  name: 'camera',
  size: 20
})`
  color: ${({ theme }) => theme.colors.link};
`

export const CommitmentContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  height: 130px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
export const CommitmentText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.lightItalico};
  font-size: 20px;
  text-align: center;
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
export const PickerButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
`
export const PickerButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
`
