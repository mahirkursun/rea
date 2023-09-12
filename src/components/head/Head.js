import React, { Component } from 'react'
import Navigate from './Navigate'
import Banner from './Banner'

export class Head extends Component {
  render() {
    return (
      <div className='container'>
        <Navigate/>
        <Banner/>
      </div>
    )
  }
}

export default Head