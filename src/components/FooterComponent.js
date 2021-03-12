/** @format */

import React, { Component } from "react";

const footerStyle = {
  left: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgb(204 204 204)",
  position: "fixed",
};
const colorText = {
  color: "gray",
  fontWeight: "none",
};
class FooterComponent extends Component {
  render() {
    return (
      <div style={footerStyle}>
        <div className='badge float-start' style={colorText}>
          Gallereasy POC web app
        </div>
        <div className='badge float-end' style={colorText}>
          2359 Media
        </div>
      </div>
    );
  }
}

export default FooterComponent;
