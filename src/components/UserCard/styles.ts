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
type Props = {
  remove: boolean
}
export const ActionButton = styled.TouchableOpacity<Props>`
  align-self: flex-end;
  padding: 5px 20px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background-color: ${({ theme, remove }) =>
    remove ? theme.colors.attention : theme.colors.success};
`
export const ActionButtonText = styled.Text`
  font-size: 15px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.textLight};
`
