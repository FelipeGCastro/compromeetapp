import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'
import LogoImage from '../../assets/logo.svg'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.background};
`
export const ContainerBackground = styled(LinearGradient).attrs({
  colors: ['#93F26D', 'rgba(240, 242, 109, 0.73)', 'transparent']
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 65%;
`

export const LogoImageSvg = styled(LogoImage).attrs({
  width: '45%'
})`
  max-width: 400px;
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
  background-color: ${({ theme }) => theme.colors.link};
  border-radius: 4px;
`
export const SigninIcon = styled(AntDesign).attrs({
  name: 'google',
  size: 24
})`
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.textLight};
`
export const SigninIconApple = styled(AntDesign).attrs({
  name: 'apple1',
  size: 24
})`
  margin-right: 15px;
  color: ${({ theme }) => theme.colors.textLight};
`
export const SigninText = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.textLight};
`
