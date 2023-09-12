import React, { Component } from "react";

export class Banner extends Component {
  render() {
    return (
      <div className="banner">
        <h2>Your reliable software solutions partner</h2>
        <p>We code what you need</p>
        <button className="btn btn-1">
          <i className="fa-solid fa-angle-right"></i> Learn More
        </button>
      </div>
    );
  }
}

export default Banner;
