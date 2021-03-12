/* eslint-disable jsx-a11y/anchor-is-valid */
/** @format */

import React, { Component } from "react";

const easyStyle = {
  color: "black",
  fontWeight: "bold",
};
const colorText = {
  color: "#6C757D",
};
class NavsComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className='nav' style={({ borderBottom: "solid" }, colorText)}>
          <li className='nav-item'>
            <a className='nav-link ' href='#' style={colorText}>
              Galler<span style={easyStyle}>easy</span>
            </a>
          </li>
          <li
            className='nav-item'
            style={({ alignItems: "center" }, colorText)}>
            <span>|</span>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#' style={colorText}>
              Search
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link disabled' href='#' style={colorText}>
              Favourites
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
export default NavsComponent;
