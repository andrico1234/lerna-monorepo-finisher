import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import theme from '../../theme'

const Card = styled.div`
  background: ${theme.white};
  border-radius: 3px;
  border: 1px solid ${theme.lightGrey};
  color: ${theme.black};
  display: grid;
  margin: 1%;
  padding: 5px;
  cursor: pointer;
  transition: all 150ms ease-in
  width: 30%;
  
  &:hover {
    position: relative;
    transform: translateY(-5px);
    box-shadow: 0px 6px 20px 0px rgba(0,0,0,0.25);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const CardImage = styled.div`
  background: ${theme.blue};
  color: ${theme.black};
  width: 100%;
  min-height: 120px;
`

const CardHeading = styled.p`
  color: ${theme.black};
  margin: 0;
  padding: 5px;
`

export default ({ data, slug }) => (
  <Card>
    <StyledLink to={`/${slug}/${data.id}`}>
      <CardImage />
      <CardHeading>
        {data.title}
      </CardHeading>
    </StyledLink>
  </Card>
)
