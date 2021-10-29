import React from 'react'

import { Container } from './styles'

interface IBackgroundGradientProps {
  percentage?: number
}
const BackgroundGradient = ({ percentage = 20 }: IBackgroundGradientProps) => {
  return <Container percentage={percentage} />
}

export default BackgroundGradient
