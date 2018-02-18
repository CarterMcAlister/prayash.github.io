import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../css/portfolio.scss'
import work from '../data/work'

export default function Work() {
  return (
    <section className="content">
      <Helmet title="Work / Prayash Thapa" />

      <div id="portfolio" className="fade">
        {work.map(item => {
          return (
            <article className="project" key={item.name}>
              <a href={item.link} target="_blank">
                <img src={item.thumbnail} alt={item.name} width="600px" />
              </a>

              <span className="project-details">
                <h2 className="project-title">{item.name}</h2>
                <h3 className="project-description">{item.description}</h3>
              </span>
            </article>
          )
        })}
      </div>
    </section>
  )
}
