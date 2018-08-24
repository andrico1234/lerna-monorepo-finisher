import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const StyledAnchor = styled.a`
  display: block;
`

export default ({ pathContext: { data }}) => {
  if (!data) return null

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <StyledAnchor href={data.href}>Full article</StyledAnchor>
      <Link to="/">Back to Blog</Link>
    </div>
  )
}

