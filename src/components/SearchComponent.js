/** @format */

import React, { Component } from "react";

class SearchComponent extends Component {
  render() {
    return (
      <div>
        <nav className='navbar navbar-light'>
          <form className='container-fluid'>
            <div className='input-group'>
              <input
                type='text'
                className='form-control'
                placeholder='Start searching for images!'
                aria-describedby='basic-addon1'
              />
            </div>
          </form>
        </nav>
      </div>
    );
  }
}

export default SearchComponent;
