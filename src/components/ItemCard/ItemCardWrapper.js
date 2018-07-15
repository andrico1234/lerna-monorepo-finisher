import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
`

export default ({ children }) => (
  <CardWrapper>
    {children}
  </CardWrapper>
)