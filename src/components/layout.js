import React from "react"
import { Link } from "gatsby"

// import { rhythm } from "../utils/typography"
import { GlobalStyle } from '../theme/globalStyle';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: black;
  color: white;
`;

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeaderWrapper>
        <GlobalStyle />
        <h1>
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
        </HeaderWrapper>
      )
    } else {
      header = (
        <HeaderWrapper>
        <GlobalStyle />
        <h3
          style={{
            fontFamily: `Marvin, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
        </HeaderWrapper>
      )
    }
    return (
      <div>
      <header>{header}</header>
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
      </div>
    )
  }
}

export default Layout
