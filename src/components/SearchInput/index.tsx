import React from 'react'

import { SearchInputContainer, Input, SearchButton, SearchIcon } from './styles'

interface ISearchInput {
  placeholder: string
  value: string
  onChange: (value: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

export const SearchInput = ({
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur
}: ISearchInput) => {
  return (
    <SearchInputContainer>
      <Input
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchInputContainer>
  )
}
