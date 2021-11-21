import React from 'react'

import {
  Container,
  Header,
  HeaderTitle,
  ContentContainer,
  ResultItem,
  ResultPerson,
  ResultPeriod,
  CloseButton,
  CloseIcon
} from './styles'
interface PersonAndPeriod {
  person: string
  period?: string
}
interface ResultsProps {
  data: PersonAndPeriod[]
  remove: (index: number) => void
}

export const Results = ({ data, remove }: ResultsProps) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Resultado</HeaderTitle>
      </Header>
      <ContentContainer>
        {data.map((item, index) => (
          <ResultItem key={index.toString()}>
            <ResultPerson>{item.person}</ResultPerson>
            <ResultPeriod>{item.period}</ResultPeriod>
            <CloseButton onPress={() => remove(index)}>
              <CloseIcon />
            </CloseButton>
          </ResultItem>
        ))}
      </ContentContainer>
    </Container>
  )
}
