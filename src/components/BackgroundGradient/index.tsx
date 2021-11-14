import React from 'react'

import { Container } from './styles'

interface IBackgroundGradientProps {
  percentage?: number
}
const BackgroundGradient = ({ percentage = 15 }: IBackgroundGradientProps) => {
  return <Container percentage={percentage} />
}

export default BackgroundGradient
