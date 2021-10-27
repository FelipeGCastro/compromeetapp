import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})`
  background-color: ${({ theme }) => theme.colors.shape};
  padding: 5px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`
export const InfoContainer = styled.View`
  flex: 1;
  margin-bottom: 8px;
  padding-right: 5px;
`
export const InfoText = styled.Text`
  font-size: 14px;
`
export const BoldText = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const ListNumberContainer = styled.View`
  align-items: center;
  justify-content: center;
  width: 63px;
  height: 63px;
  margin-right: 8px;
`
export const ListNumber = styled.Text`
  font-size: 24px;
  line-height: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
`
export const CommitmentTime = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
interface ActionProps {
  toAccept?: boolean
}
export const ActionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})<ActionProps>`
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  width: 65px;
  background-color: ${({ theme, toAccept }) =>
    toAccept ? theme.colors.link : theme.colors.success};
`
export const ActionButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.textLight};
`
