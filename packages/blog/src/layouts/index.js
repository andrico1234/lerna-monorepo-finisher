import React from 'react'
import PropTypes from 'prop-types'

import { PrimaryLayout } from '@lerna-monorepo/shared-ui'

const Layout = ({ children, data }) => <PrimaryLayout children={children} data={data} />;

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
