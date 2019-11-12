import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { rhythm, scale } from "../utils/typography"

import styled from 'styled-components';

const Date = styled.p`
  font-size: var(--f7);
  font-family: var(--code);
  color: var(--gray-6);
  text-align: center;
`;
const Header = styled.header`
  h1 {
    font-family: var(--orbitron);
    font-size: var(--f1);
    margin-bottom: var(--space-sm);
    line-height: var(--lh-solid);
  }
  margin-bottom: var(--space-xxl);
`;
const Nav = styled.nav`
  margin: var(--space-xl) 0;
  display: flex;
  ul {
    max-width: 100%;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
  }
  li {
    font-size: var(--f3);
    font-weight: 600;
    font-family: var(--orbitron);
  }
  li:first-child a {
    color: var(--orange-6);
  }
  li:last-child a {
    color: var(--red-6);
  }
`;
const Section = styled.section`
  margin: 0 0 var(--space-xxl);
  padding: 0 0 var(--space-xxl);
  border-bottom: 1px solid rgba(0,0,0,.1);
  p,
  li {
    font-family: var(--serif);
  }

  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  pre {
    max-width: 44rem;
  }
  h2 {
    margin-bottom: var(--space-lg);
    font-size: 1.5rem;
  }
  h3 {
    font-family: var(--serif);
  }
`;

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <Header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <Date>
              {post.frontmatter.date}
            </Date>
          </Header>
          <Section dangerouslySetInnerHTML={{ __html: post.html }} />
          <footer>
            <Bio />
          </footer>
        </article>

        <Nav>
          <ul>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </Nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
