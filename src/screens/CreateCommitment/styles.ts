import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 15px 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  margin-bottom: 20px;
`
export const BackButton = styled.TouchableOpacity`
  width: 80px;
`
export const BackIcon = styled(AntDesign).attrs({
  name: 'arrowleft',
  size: 24
})`
  color: ${({ theme }) => theme.colors.title};
`
export const CreateButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.link};
  align-items: center;
  justify-content: center;
  padding: 7px 0;
  width: 80px;
  border-radius: 6px;
`
export const CreateButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
`

export const CommitmentScreenTitle = styled.Text`
  font-size: 19px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
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
