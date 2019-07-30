import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  display: inline-block;
  border: 2px solid ${({theme}) => theme.primary};
  width: 18px;
  height: 18px;
  &:hover{
    cursor: pointer;
  }
`;

const Checkbox = ({isChecked, onClick, theme}) => (
      <CheckboxContainer onClick={() => onClick && onClick()} theme={theme}>
        {
          isChecked &&
          <svg  width="100%" height="100%" viewBox="0 0 200 200">
            <polyline points="25.1,101 76.9,154 177,45.9" style={{ stroke: theme.primary, fill: 'none', strokeWidth: 25 }}/>
          </svg>
        }
      </CheckboxContainer>
)

export default Checkbox;