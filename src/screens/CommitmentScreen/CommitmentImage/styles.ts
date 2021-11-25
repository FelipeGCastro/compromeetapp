import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const ImageContainer = styled.View`
  margin-top: 10px;
  width: 107px;
  height: 107px;
  border-radius: 10px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 5px;
  align-items: center;
  justify-content: center;
`
export const DeleteButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  position: absolute;
  right: -10px;
  bottom: -10px;
  background-color: ${({ theme }) => theme.colors.attention};
  padding: 5px;
  border-radius: 30px;
`
export const DeleteButtonIcon = styled(AntDesign).attrs({
  name: 'close',
  size: 20
})`
  color: ${({ theme }) => theme.colors.textLight};
`
export const ImageSelected = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`
