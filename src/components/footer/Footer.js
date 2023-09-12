import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer-icon">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
          <i className="fa-brands fa-linkedin"></i>
        </div>
        <div className="footer-text">
          Copyright <i className="fa-regular fa-copyright"></i> 2023 -
          HermesSolutions
        </div>
      </footer>
    );
  }
}

export default Footer;
