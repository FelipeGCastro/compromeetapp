import React from 'react'

import { SearchInputContainer, Input, SearchButton, SearchIcon } from './styles'

interface ISearchInput {
  placeholder: string
  value: string
  onChange: (value: string) => void
}

export const SearchInput = ({ value, placeholder, onChange }: ISearchInput) => {
  return (
    <SearchInputContainer>
      <Input value={value} onChangeText={onChange} placeholder={placeholder} />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchInputContainer>
  )
}
