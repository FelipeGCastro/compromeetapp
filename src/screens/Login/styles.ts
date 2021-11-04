import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import LogoImage from '../../assets/logo.svg'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.background};
`

export const LogoImageSvg = styled(LogoImage).attrs({
  width: '45%'
})`
  align-self: center;
`
export const ButtonsContainer = styled.View`
  align-items: center;
`
export const SigninButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
  margin-bottom: 15px;
  elevation: 2;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 300px;
  padding: 10px 20px;
  box-shadow: 10px 5px 5px black;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
`
export const SigninIcon = styled(AntDesign).attrs({
  name: 'google',
  size: 24
})`
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.title};
`
export const SigninIconApple = styled(AntDesign).attrs({
  name: 'apple1',
  size: 24
})`
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.title};
`
export const SigninText = styled.Text`
  font-size: 16px;
`
