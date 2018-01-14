import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import '../css/portfolio.scss'
import nucleactor from '../assets/img/nucleactor.jpg'
import musiverse from '../assets/img/musiverse.jpg'
import processes from '../assets/img/processes.jpg'

export default function Work() {
  return (
    <section className="content">
      <Helmet title="Work / Prayash Thapa" />

      <div id="portfolio" className="fade">
        <article className="project">
          <a href="http://prayash.io/nucleactor" target="_blank">
            <img src={nucleactor} alt="nucleactor" width="600px" />
          </a>
          <span className="project-details">
            <h2 className="project-title">Nucleactor</h2>
            <h3 className="project-description">
              soundcloud audio visualization
            </h3>
          </span>
        </article>

        <article className="project">
          <a href="http://prayash.io/musiverse" target="_blank">
            <img src={musiverse} alt="musiverse" width="600px" />
          </a>
          <span className="project-details">
            <h2 className="project-title">Musiverse</h2>
            <h3 className="project-description">audio-reactive musical toy</h3>
          </span>
        </article>

        <article className="project">
          <a href="http://processes.effulgence.io" target="_blank">
            <img src={processes} alt="processes" width="600px" />
          </a>
          <span className="project-details">
            <h2 className="project-title">Processes</h2>
            <h3 className="project-description">365 days of creative coding</h3>
          </span>
        </article>
      </div>
    </section>
  )
}
