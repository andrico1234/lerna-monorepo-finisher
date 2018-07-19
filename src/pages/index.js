import React from 'react'
import Link from 'gatsby-link'
import { ItemCard, ItemCardWrapper } from '../components/ItemCard'

const IndexPage = ({ data }) => {
  const edges = data.allShoppingJson.edges

  return(
    <div>
      <h1>Hi people</h1>
      <ItemCardWrapper>
        {edges && edges.map(edge => <ItemCard key={edge.node.id} data={edge.node} slug="item" />)}
      </ItemCardWrapper>
      <Link to="/blog/">Go to Blog</Link>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query ShoppingPageQuery {
    allShoppingJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`