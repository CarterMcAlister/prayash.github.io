import React, { Component } from 'react'
import Link from 'gatsby-link'
import { getBreadCrumb } from '../utils/blog'

export default class Header extends Component {
  render() {
    let { breadcrumb } = this.props
    let breadcrumbDisplay = getBreadCrumb(breadcrumb)
    let headerText = 'prayash thapa'

    return (
      <header id="header">
        <div className={'logo fade ' + (breadcrumb ? '' : 'justify-center')}>
          <div className="breadcrumb">
            <strong className="fade">{breadcrumbDisplay}</strong>
          </div>
          <h1>
            <Link to="/">{headerText}</Link>
          </h1>
        </div>
      </header>
    )
  }
}
