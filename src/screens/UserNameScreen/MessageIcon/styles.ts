import { FontAwesome } from '@expo/vector-icons'

import styled from 'styled-components/native'
interface MessageIconProps {
  isPositive?: boolean
}

export const MessageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 7px;
  padding-left: 30px;
`
export const Icon = styled(FontAwesome)<MessageIconProps>`
  margin-right: 7px;
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.success : theme.colors.attention};
`

export const UserNameExist = styled.Text<MessageIconProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, isPositive }) =>
    isPositive ? theme.colors.success : theme.colors.attention};
  font-size: 14px;
`
