import React from 'react'

let Delay = React.createClass({
  displayName: 'Delay',

  propTypes: {
    wait: React.PropTypes.number
  },

  getDefaultProps() {
    return { wait: 250 }
  },

  getInitialState() {
    return { waiting: true }
  },

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({ waiting: false })
    }, this.props.wait)
  },

  componentWillUnmount() {
    clearTimeout(this.timer)
  },

  render() {
    if (!this.state.waiting) {
      return this.props.children
    }

    return (
      <div className="loading">
        <i className="fa fa-spinner fa-spin fa-fw" />
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
})

export default Delay
