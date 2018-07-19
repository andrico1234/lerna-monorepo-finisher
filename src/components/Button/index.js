import React from 'react'
import styled from 'styled-components'
import theme from '../../theme'

const StyledButton = styled.button`
  background: ${theme.purple};
  border-radius: 2px;
  border: none;
  color: ${theme.white};
  cursor: pointer;
  display: block;
  margin-bottom: 20px;
  transition: all 150ms ease-in;
  padding: 5px 10px;
  
  &:hover {
    position: relative;
    transform: translateY(-3px);
    box-shadow: 0px 6px 20px 0px rgba(0,0,0,0.25);
  }
  
  &:active {
    box-shadow: 0px 6px 20px 0px rgba(0,0,0,0.25);
    opacity: 0.6;
    transform: translateY(0);
  }
`

export default ({ children }) => (
  <StyledButton>{children}</StyledButton>
)
