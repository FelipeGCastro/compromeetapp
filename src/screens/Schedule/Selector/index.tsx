import React, { useState } from 'react'

import {
  Container,
  Header,
  HeaderTitle,
  HeaderButton,
  IconPlus,
  ContentContainer,
  ContentWrapper,
  ContentRow,
  ItemContainer,
  ItemTitle
} from './styles'

interface SelectorProps {
  title: string
  rowOne: string[]
  rowTwo: string[]
  onSelect: (item: string) => void
}

export const Selector = ({
  title,
  rowOne,
  rowTwo,
  onSelect
}: SelectorProps) => {
  const [itemSelected, setSelected] = useState('')

  const handleSelectItem = (item: string) => {
    setSelected(item)
  }
  return (
    <Container>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <HeaderButton>
          <IconPlus />
        </HeaderButton>
      </Header>
      <ContentContainer horizontal showsHorizontalScrollIndicator={false}>
        <ContentWrapper>
          <ContentRow>
            {rowOne.map((item, index) => (
              <ItemContainer
                selected={itemSelected === item}
                onPress={() => handleSelectItem(item)}
                key={index.toString()}
              >
                <ItemTitle selected={itemSelected === item}>{item}</ItemTitle>
              </ItemContainer>
            ))}
          </ContentRow>
          <ContentRow>
            {rowTwo.map((item, index) => (
              <ItemContainer
                selected={itemSelected === item}
                onPress={() => handleSelectItem(item)}
                key={index.toString()}
              >
                <ItemTitle selected={itemSelected === item}>{item}</ItemTitle>
              </ItemContainer>
            ))}
          </ContentRow>
        </ContentWrapper>
      </ContentContainer>
    </Container>
  )
}
