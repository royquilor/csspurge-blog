import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components';

const Article = styled.article`
  padding: var(--space-xl) 0;
`;
const Header = styled.header`
  text-align:center;
`;
const Date = styled.p`
  font-size: var(--f7);
  font-family: var(--code);
  margin: 0;
  color: var(--gray-6);
`;
const Heading3 = styled.h3`
  font-size: 1.5rem;
  line-height: 1.25;
  font-family: var(--orbitron);
  margin-top: var(--space);
  margin-bottom: var(--space);
`;
const Paragraph = styled.p`
  color: var(--gray-9);
  font-size: var(--f5);
  line-height: var(--lh-copy);
`;

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div id="component-cssfilesize"></div>
        <SEO title="All posts" />
        {/*
          <Bio />
        */}
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Article key={node.fields.slug}>
              <Header>
                <Date>{node.frontmatter.date}</Date>
                <Heading3>
                  <Link to={node.fields.slug}>
                    {title}
                  </Link>
                </Heading3>
              </Header>
              <section>
                <Paragraph
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
            </section>
          </Article>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
