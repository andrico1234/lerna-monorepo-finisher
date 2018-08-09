const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allShoppingJson {
        edges {
          node {
            id
            title
            price
            dateAdded
            description
          }
        }
      }
    }
    `).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allShoppingJson.edges.map(edge => {
      createPage({
        path: `item/${edge.node.id}`,
        component: path.resolve('./src/pages/shoppingItem.js'),
        context: {
          data: edge.node,
        },
      })
    })
  })
}