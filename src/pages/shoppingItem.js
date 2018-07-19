import React from 'react'
import Link from 'gatsby-link'
import Button from '../components/Button'

export default ({ pathContext: { data }}) => (
  <div>
    <h1>{data.title}</h1>
    <p>{data.content}</p>
    <Button>Purchase</Button>
    <Link to="/">Back to Shop</Link>
  </div>
)
