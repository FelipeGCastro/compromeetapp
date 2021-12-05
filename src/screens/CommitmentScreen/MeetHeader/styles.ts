import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const CommitmentHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const RemoveButton = styled.TouchableOpacity`
  align-self: flex-start;
  flex-direction: row;
  align-items: center;
  padding: 7px;
  border-top-right-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: ${({ theme }) => theme.colors.attention};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
`
export const RemoveIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.textLight};
`
