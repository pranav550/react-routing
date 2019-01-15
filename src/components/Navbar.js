import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
class Navbar extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="selected">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="selected">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="selected">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
