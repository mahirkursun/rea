import React, { Component } from 'react'

export class Navigate extends Component {
  render() {
    return (
        <div className="header">
        <div className="hermes">
          <i className="fa-solid fa-book-open"></i>
          <h3>
            <span>Hermes</span>Solutions
          </h3>
        </div>

        <nav id="nav">
          <a href="#Home">Home</a>
          <a href="#About">About</a>
          <a href="#References">References</a>
          <a href="#OurPicks">Our Picks</a>
          <a href="#Contact">Contact</a>
        </nav>
      </div>
    )
  }
}

export default Navigate