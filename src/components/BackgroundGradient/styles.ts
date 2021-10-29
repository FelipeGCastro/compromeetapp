import styled from 'styled-components/native'
import { LinearGradient } from 'expo-linear-gradient'

interface ContainerProps {
  percentage: number
}
export const Container = styled(LinearGradient).attrs({
  colors: ['#93F26D', '#F0F26D', 'transparent']
})<ContainerProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: ${({ percentage }) => `${percentage}%`};
`
