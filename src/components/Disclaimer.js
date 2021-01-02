import React from 'react';
import styled, { css } from 'styled-components';
import { absoluteFill } from '../utils/style';

const Disclaimer = () => {
    return <Root>&copy; 2019 Fantasy Football</Root>;
};

const Root = styled.div`
    padding: 16px;
    font-size: 0.9em;
    color: ${p => p.theme.colors.textTertiary};
`;

export default Disclaimer;
