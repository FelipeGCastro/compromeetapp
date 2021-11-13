import styled from 'styled-components/native';

export const InputContainer = styled.View`
    flex-direction: row;
    height: 50px;
    border: 1px solid ${({ theme }) => theme.colors.textFading};
    border-radius: 6px;
    margin: 0 10px;
    padding: 5px 10px;
    align-items: center;
    justify-content: center;
`;

export const InputContent = styled.TextInput`
    flex: 1;
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: 16px;
`
