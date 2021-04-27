import React, { Component } from "react";
import { Link } from "react-scroll";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="wrapper">
            <nav>
              <h1 className="logo">
                <img
                  src="./Images/main.svg"
                  alt="planthome logo"
                  onClick={this.scrollToTop}
                />
                PlantHome
              </h1>

              <ul className="nav-items">
                <li>
                  <Link
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {" "}
                    Home{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="collection"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {" "}
                    Collections{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="plants"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {" "}
                    Plants{" "}
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    {" "}
                    Contact Us{" "}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
