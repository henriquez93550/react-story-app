import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          {" "}
          {/*container to center navbar contents */}
          <Link className="navbar-brand" to="/animation">
            Mad Libs!
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Mad Lib 1 <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  Mad Lib 2
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Mad Lib 3
                </Link>
              </li>

              {/* <li className="nav-item">
              <Link className="nav-link" to="/form">Form</Link>
            </li> */}
              {/* <li className="nav-item">
              <Link className="nav-link" to="/animation">Animation</Link>
            </li> */}
            </ul>
          </div>
        </div>{" "}
        {/*end of container */}
      </nav>
    );
  }
}

export default Navbar;
