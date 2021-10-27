import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background: ${({ theme }) => theme.colors.shape};
  padding: 3px 5px;
  border-radius: 6px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`
export const ImageContainer = styled.View`
  border-radius: 29px;
  width: 63px;
  height: 63px;
  border: solid 3px ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: white;
`
export const UserImage = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 29px;
`
export const InfoAndInviteWrapper = styled.View`
  flex: 1;
`
export const UserName = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`
export const UserUsername = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};
`
export const EnviteButton = styled.TouchableOpacity`
  align-self: flex-end;
  padding: 5px 20px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.success};
`
export const EnviteButtonText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`
