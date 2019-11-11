import React from "react"
import { Link } from "gatsby"

// import { rhythm } from "../utils/typography"
import { GlobalStyle } from '../theme/globalStyle';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background: black;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-xxl) 0;
  margin-bottom: var(--space-xl);
`;
const PostHeader = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  padding: var(--space-xl);
  h3 {
    font-family: var(--marvin);
    margin: 0;
    position:absolute;
    left: var(--space-xl);
  }
`;
const SiteTitle = styled.h1`
  margin: 0;
  line-height: var(--lh-solid);
  letter-spacing: .25rem;
  a {
    color: white;
  }
`;
const MainWrap = styled.div`
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  footer {
    margin-left: auto;
    margin-right: auto;
    max-width: 42rem;
  }
  blockquote p {
    max-width: 60rem;
  }
`;
const Footer = styled.div`
  font-family: var(--code);
  font-size: var(--f6);
  margin: var(--space-xxl) 0;
  text-align: center;
`;
const SiteDescription = styled.p`
  font-family: var(--code);
  font-size: var(--f6);
  margin: 0;
  color: var(--gray-6);
`;

class Layout extends React.Component {
  render() {
    const { location, title, description, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <HeaderWrapper>
          <GlobalStyle />
          <SiteTitle>
            <Link to={`/`}>
              {title}
            </Link>
          </SiteTitle>
          <SiteDescription>
            A blog about CSS and HTML to make and design websites
          </SiteDescription>
        </HeaderWrapper>
      )
    } else {
      header = (
        <PostHeader>
        <GlobalStyle />
        <h3>
          <Link to={`/`}>
            {title}
          </Link>
        </h3>
        <SiteDescription>
          A blog about CSS and HTML to make and design websites
        </SiteDescription>
      </PostHeader>
      )
    }
    return (
      <div>
      <header>{header}</header>
      <MainWrap>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with ❤️ and
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </MainWrap>
      </div>
    )
  }
}

export default Layout
