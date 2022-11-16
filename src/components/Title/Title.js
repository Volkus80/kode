import styled from 'styled-components';
import { memo } from 'react';

const Text = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 24px;
    width: 100%;
    align-text: left;
    padding: 20px 0;
`;

export default memo(function Title({text}) {
    return (
        <Text>{text}</Text>
    )
});