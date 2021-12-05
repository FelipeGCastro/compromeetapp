import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  position: absolute;
  right: 20px;
  bottom: 10px;
  border-radius: 30px;
  width: 55px;
  height: 55px;
  align-items: center;
  justify-content: center;
  elevation: 4;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.18);
  background-color: ${({ theme }) => theme.colors.primary};
`
export const Icon = styled(AntDesign).attrs({
  name: 'plus',
  size: 27
})`
  color: ${({ theme }) => theme.colors.textLight};
`
