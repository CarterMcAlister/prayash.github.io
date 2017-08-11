import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import CSSTransition from 'react-transition-group/CSSTransition'

import Header from '../components/Header'
import Waves from '../components/Waves'
import '../css/typography.css'
import '../css/index.scss'

const Fade = ({ children, ...props }) =>
  <CSSTransition {...props} timeout={2000} classNames="singleFade">
    {children}
  </CSSTransition>

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  constructor(...args) {
    super(...args)
    this.state = { show: false }

    setTimeout(() => {
      this.setState({ show: true })
    }, 1)
  }

  render() {
    const route = this.props.location.pathname

    return (
      <main className={route === '/' ? 'home' : 'notHome'}>
        <Header breadcrumb={route === '/' ? '' : route} />

        {/* <Fade in={this.state.show}> */}
        <Waves cameraZoom={route === '/' ? 7 : 10} key="waves" />
        {/* </Fade> */}

        {this.props.children()}
      </main>
    )
  }
}
