import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

type CommitmentImageProps = {
  expanded: boolean
}
export const CommitmentImageContainer = styled.View<CommitmentImageProps>`
  width: ${({ expanded }) => (expanded ? '100%' : '100px')};
  aspect-ratio: 1;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border-width: ${({ expanded }) => (expanded ? '0' : '3px')};
  border-color: ${({ theme }) => theme.colors.primary};
`
export const CommitmentImage = styled.Image<CommitmentImageProps>`
  height: 100%;
  width: 100%;
  border-radius: ${({ expanded }) => (expanded ? '0' : '15px')};
`

export const ExpandAndMinimizeButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})<CommitmentImageProps>`
  position: absolute;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px;
  right: ${({ expanded }) => (expanded ? 'null' : '0')};
  bottom: ${({ expanded }) => (expanded ? 'null' : '0')};
  left: ${({ expanded }) => (expanded ? '0' : 'null')};
  top: ${({ expanded }) => (expanded ? '0' : 'null')};
`
export const ExpandIcon = styled(Feather).attrs({
  name: 'maximize-2',
  size: 18
})`
  transform: rotate(90deg);
  color: ${({ theme }) => theme.colors.textLight};
`
export const MinimizeIcon = styled(Feather).attrs({
  name: 'minimize-2',
  size: 18
})`
  transform: rotate(90deg);
  color: ${({ theme }) => theme.colors.textLight};
`
