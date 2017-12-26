import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { css } from 'react-emotion'
import '../../css/blog.scss'

let listStyle = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const BlogIndex = ({ data }) => {
  let { edges: posts } = data.allMarkdownRemark
  return (
    // <Box bg={colors.primary}>
    //   <Box
    //     width={[1, 1, 1 / 2]}
    //     m={['3.5rem 0 0 0', '3.5rem 0 0 0', '3.5rem auto 0 auto']}
    //     px={[3, 3, 0]}
    //     color={colors.secondary}
    //   >
    <section className="content">
      <Helmet title="effulgence // blog" />

      <div id="blog" className="fade">
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }, index) => {
            let { fields, frontmatter } = post

            return (
              <div
                className={'blog-post ' + (index === 0 ? 'first' : '')}
                key={post.id}
              >
                <time dateTime={frontmatter.date}>{post.frontmatter.date}</time>
                <h2>
                  <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
                </h2>

                <p>{post.frontmatter.description}</p>
              </div>
            )
          })}
      </div>
    </section>
    // <ul className={listStyle}>
    //   {posts
    //     .filter(post => post.node.frontmatter.title.length > 0)
    //     .map(({ node: post }, index) => {
    //       return (
    //         <li key={post.id}>
    //           <Link to={post.fields.slug}>
    //             <h3>{post.frontmatter.title}</h3>
    //           </Link>
    //           <p>{post.excerpt}</p>
    //         </li>
    //       )
    //     })}
    // </ul>
    //   </Box>
    // </Box>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { draft: { ne: true } }
        fileAbsolutePath: { regex: "/blog/" }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default BlogIndex
