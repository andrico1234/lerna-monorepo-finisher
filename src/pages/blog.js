import React from 'react'
import Link from 'gatsby-link'
import { ItemCard, ItemCardWrapper } from '../components/ItemCard'

const BlogPage = ({ data }) => {
  const posts = data.allFile.edges[0].node.childrenBlogJson

  return (
    <div>
      <h1>Blog Page</h1>
      <ItemCardWrapper>
        {posts && posts.map(post => <ItemCard key={post.id} data={post} />)}
      </ItemCardWrapper>
      <Link to="/">Go back to the shop</Link>
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPostsQuery {
    allFile {
      edges {
        node {
          childrenBlogJson {
            id
            title
          }
        }
      }
    }
  }
`