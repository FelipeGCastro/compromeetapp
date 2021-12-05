import { AntDesign } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  margin-bottom: 20px;
`
export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 0 10px;
`
export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`
export const HeaderButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.link};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
`
export const ContentContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 10px;
`
export const ResultItem = styled.View`
  background-color: ${({ theme }) => theme.colors.link};
  padding: 10px 15px;
  border-radius: 8px;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
  align-items: center;
  justify-content: center;
  margin: 4px 6px;
`
export const ResultPerson = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
`
export const ResultPeriod = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: -3px;
`
export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  width: 25px;
  height: 25px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.attention};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
  position: absolute;
  right: -7px;
  top: -7px;
`
export const CloseIcon = styled(AntDesign).attrs({
  name: 'close'
})`
  color: ${({ theme }) => theme.colors.textLight};
`
