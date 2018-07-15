const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allFile {
        edges {
          node {
            childrenBlogJson {
              id
              title
              author
              dateAdded
              content
              href
            }
          }
        }
      }
    }
    `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allFile.edges[0].node.childrenBlogJson.map(item => {
      createPage({
        path: `post/${item.id}`,
        component: path.resolve('./src/pages/blogItem.js'),
        context: {
          data: item,
        }
      })
    })
  })
};