import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const FrequencyButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.textLight};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 1;
  padding: 5px 15px;
  align-self: flex-start;
  border-radius: 6px;
`
export const FrequencyText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`
export const OptionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  margin-top: 3px;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 15px 15px;
  border-radius: 6px;
`
export const OptionButtonText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`

export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  padding-left: 7px;
`
export const CloseIcon = styled(AntDesign).attrs({
  name: 'closecircle',
  size: 22
})`
  color: ${({ theme }) => theme.colors.attention};
`
