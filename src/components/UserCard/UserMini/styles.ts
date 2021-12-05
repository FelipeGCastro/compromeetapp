import styled from 'styled-components/native'

export const UserContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`
export const UserImage = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin-right: 7px;
`
export const NameAndUsername = styled.View``
export const UserName = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-right: 7px;
`
export const UserUsername = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textFading};
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-right: 7px;
  margin-top: -2px;
`
