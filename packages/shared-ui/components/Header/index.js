import React from 'react'
import Link from 'gatsby-link'
import { theme } from '../../'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: `${theme.purple}`,
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `${theme.white}`,
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
