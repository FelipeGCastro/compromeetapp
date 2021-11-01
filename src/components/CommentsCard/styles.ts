import { MaterialIcons } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  align-self: stretch;
  margin-top: 10px;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.textLight};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
  padding: 5px 7px;
  border-radius: 6px;
`

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const MockView = styled.View`
  width: 40px;
`
export const SeeAllButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})``
export const SeeAllText = styled.Text`
  color: ${({ theme }) => theme.colors.link};
`

export const Title = styled.Text`
  align-self: center;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const Comments = styled.View``
export const CommentWrapper = styled.View`
  padding: 7px 0;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.colors.background};
`
export const CommentText = styled.Text`
  margin: 0px 20px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`
export const InputWrapper = styled.View`
  flex-direction: row;
  align-self: stretch;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px 0 20px;
  border-radius: 30px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const SendButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6
})`
  padding-left: 10px;
`
export const SendIcon = styled(MaterialIcons).attrs({
  name: 'send',
  size: 24
})`
  color: ${({ theme }) => theme.colors.link};
`

export const CommentInput = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  height: 40px;
`
