import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Emblem from '../components/emblem'

export default ({ data }) => {
  let myData = data.allContentJson.edges[0].node.index

  return (
    <section>
      <Helmet title="Prayash Thapa / Code, Art & Music" />
      <Emblem />
    </section>
  )
}

export const pageQuery = graphql`
  query contentQuery {
    allContentJson {
      edges {
        node {
          index {
            title
            subtitle
          }
        }
      }
    }
  }
`
