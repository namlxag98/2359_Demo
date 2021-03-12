/** @format */

import React, { Component } from "react";
import BodyComponent from "./BodyComponent";
import FooterComponent from "./FooterComponent";
import NavsComponent from "./NavsComponent";
import SearchComponent from "./SearchComponent";

class DashboardPageComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <NavsComponent />
        <SearchComponent/>
        <BodyComponent />
        <FooterComponent />
      </React.Fragment>
    );
  }
}

export default DashboardPageComponent;
