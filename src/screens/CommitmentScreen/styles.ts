import { FontAwesome, AntDesign } from '@expo/vector-icons'
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
  height: 35px;
  padding: 0 15px;
  margin-top: 15px;
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
  border-radius: 6px;
  min-height: 130px;
  justify-content: center;
  align-items: center;
`
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
export const CommitmentInput = styled.TextInput`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.lightItalico};
  font-size: 20px;
  flex: 1;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 20px;
`
