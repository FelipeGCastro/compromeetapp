import React, { useEffect, useRef, useState } from 'react'
import { TextInput } from 'react-native'

import {
  Container,
  Header,
  HeaderTitle,
  InputAndButtonWrapper,
  InputContainer,
  InputField,
  HeaderButton,
  IconPlus,
  IconSend,
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
  disabled: boolean
  loaded: boolean
}

export const Selector = ({
  title,
  rowOne,
  rowTwo,
  onSelect,
  disabled,
  loaded
}: SelectorProps) => {
  const [itemSelected, setSelected] = useState('')
  const [showInput, setShowInput] = useState(false)
  const [focused, setFocused] = useState(false)
  const [textInput, setTextInput] = useState('')
  const inputRef = useRef<TextInput>(null)
  useEffect(() => {
    if (loaded) setSelected('')
  }, [loaded])
  useEffect(() => {
    showInput && inputRef.current?.focus()
  }, [showInput])
  const handleSelectItem = (item: string) => {
    setTextInput('')
    setShowInput(false)
    setSelected(item)
    onSelect(item)
  }
  const handlePressAddButton = () => {
    if (showInput) {
      if (textInput) {
        inputRef.current?.blur()
        onSelect(textInput)
        setTextInput('')
        setShowInput(false)
        setFocused(false)
      }
    } else {
      setShowInput(prev => !prev)
    }
  }
  const handleOnBlur = () => {
    setFocused(false)
  }

  return (
    <Container disabled={disabled}>
      <Header>
        <HeaderTitle>{title}</HeaderTitle>
        <InputAndButtonWrapper>
          <InputContainer focused={focused} showInput={showInput}>
            <InputField
              value={textInput}
              onChangeText={setTextInput}
              ref={inputRef}
              onBlur={handleOnBlur}
              onFocus={() => setFocused(true)}
              onSubmitEditing={handlePressAddButton}
            />
          </InputContainer>
          <HeaderButton
            focused={focused}
            disabled={disabled}
            onPress={handlePressAddButton}
          >
            {focused ? <IconSend /> : <IconPlus />}
          </HeaderButton>
        </InputAndButtonWrapper>
      </Header>
      <ContentContainer horizontal showsHorizontalScrollIndicator={false}>
        <ContentWrapper>
          <ContentRow>
            {rowOne.map((item, index) => (
              <ItemContainer
                selected={itemSelected === item}
                onPress={() => handleSelectItem(item)}
                disabled={disabled}
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
                disabled={disabled}
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
