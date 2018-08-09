import React from 'react'
import { ItemCard, ItemCardWrapper } from '@lerna-monorepo/shared-ui'

const IndexPage = ({ data }) => {
  const edges = data.allShoppingJson.edges

  return(
    <div>
      <h1>Hi people</h1>
      <ItemCardWrapper>
        {edges && edges.map(edge => <ItemCard key={edge.node.id} data={edge.node} slug="item" />)}
      </ItemCardWrapper>
      <a href={`http://${process.env.BLOG_URL}`}>Go to Blog</a>
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