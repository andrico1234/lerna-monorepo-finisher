const activeEnv = process.env.ACTIVE_ENV | 'development'

require('dotenv').config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: 'Learning Lerna through Monorepos with Rico (shop)',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-json',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/data/`,
      },
    },
  ],
}