import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10px;
`

export const UserImageContainer = styled.View`
  width: 90px;
  height: 90px;
  margin-right: 12px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
`

export const UserImage = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
`

export const UserInfoContainer = styled.View`
  flex: 1;
  align-items: stretch;
`

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
`
export const UserUsername = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.link};
  font-size: 15px;
  margin-top: 3px;
`
