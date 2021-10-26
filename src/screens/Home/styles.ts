import styled from 'styled-components/native'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { FlatList } from 'react-native'
export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: center;
  padding: 0 7px;
  background-color: ${({ theme }) => theme.colors.background};
`

export const PeriodContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  flex-direction: row;
  align-items: center;
`

export const OptionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0 8px;
`
export const FilterButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})``
export const FilterIcon = styled(FontAwesome5).attrs({
  name: 'filter',
  size: 20
})`
  color: ${({ theme }) => theme.colors.title};
`
export const PeriodText = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.title};
`
export const ArrowDown = styled(AntDesign).attrs({
  name: 'caretdown',
  size: 14
})`
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.title};
`

export const CommitmentList = styled.FlatList`` as unknown as typeof FlatList
