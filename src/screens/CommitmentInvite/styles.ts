import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  padding: 10px 7px;
  background-color: ${({ theme }) => theme.colors.background};
`
export const Space = styled.View`
  height: 25px;
`
