import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './redux+react/header'
import Content from './redux+react/content'


class App extends Component {
  
  render() {

    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
}

export default App;