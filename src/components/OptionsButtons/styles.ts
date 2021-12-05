import styled from 'styled-components/native'

export const OptionsButtonContainer = styled.View`
  flex-direction: row;
  margin-top: 15px;
  align-items: center;
  justify-content: flex-start;
`
interface ActiveProps {
  active: boolean
}
export const OptionButtonLeft = styled.TouchableOpacity<ActiveProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.attention : theme.colors.textLight};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
  height: 35px;
  width: 120px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`
export const OptionButtonRight = styled.TouchableOpacity<ActiveProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.success : theme.colors.textLight};
  align-items: center;
  justify-content: center;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.18);
  elevation: 4;
  height: 35px;
  width: 120px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`
export const OptionText = styled.Text<ActiveProps>`
  color: ${({ theme, active }) =>
    active ? theme.colors.textLight : theme.colors.textFading};
  font-size: 16px;
  font-family: ${({ theme, active }) =>
    active ? theme.fonts.medium : theme.fonts.regular};
`
