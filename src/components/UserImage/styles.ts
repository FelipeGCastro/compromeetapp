import styled from 'styled-components/native'

export const ImageContainer = styled.View`
  border-radius: 29px;
  width: 63px;
  height: 63px;
  border: solid 3px ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: white;
`
export const UserImg = styled.Image`
  width: 55px;
  height: 55px;
  border-radius: 29px;
`
