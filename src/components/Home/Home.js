import React, { Component } from "react";
import { Link, HashRouter } from "react-router-dom";
import routes from "../../routes";

export default class Home extends Component {
  render() {
    return (
      <HashRouter>
        <div className="box">
          <Link to="/">
            <button>Products</button>
          </Link>
          <Link to="/form">
            <button>Form</button>
          </Link>
        </div>
        {routes}
      </HashRouter>
    );
  }
}
