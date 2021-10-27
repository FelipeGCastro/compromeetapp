import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

export const Container = styled(LinearGradient).attrs({
  colors: ['#93F26D', '#F0F26D', 'transparent']
})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 20%;
`
