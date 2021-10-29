import React from 'react'

import { SearchInputContainer, Input, SearchButton, SearchIcon } from './styles'

interface ISearchInput {
  placeholder: string
  onChange: (value: string) => void
}

export const SearchInput = ({ placeholder, onChange }: ISearchInput) => {
  return (
    <SearchInputContainer>
      <Input onChangeText={onChange} placeholder={placeholder} />
      <SearchButton>
        <SearchIcon />
      </SearchButton>
    </SearchInputContainer>
  )
}
