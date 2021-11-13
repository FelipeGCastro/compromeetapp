import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 0 7px;
  background-color: ${({ theme }) => theme.colors.background};
  padding-top: 15px;
`
export const TextContainer = styled.View`
  padding: 20px;
  align-items: center;
  margin: 40px 0px 80px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 6px;
`
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
  font-size: 22px;
  margin-bottom: 20px;
`
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.lightItalico};
  color: ${({ theme }) => theme.colors.title};
  font-size: 20px;
  text-align: center;
`
export const UserNameExist = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.attention};
  font-size: 14px;
`

export const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 7px;
  padding-left: 30px;
`
export const Icon = styled(FontAwesome)`
  margin-right: 7px;
  color: ${({ theme }) => theme.colors.attention};
`
