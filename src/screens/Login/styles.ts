import styled from 'styled-components/native'
import LogoImage from '../../assets/logo.png'
import { AntDesign } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.background};
`

export const Logo = styled.Image.attrs({
  source: LogoImage
})``
export const SigninButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  flex-direction: row;
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
export const SigninText = styled.Text`
  font-size: 16px;
`
