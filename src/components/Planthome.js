import React, { Component } from "react";
import Navbar from "./Navbar";

export default class planthome extends Component {
  render() {
    return (
      <div>
        {/* <!-- nav --> */}
        <Navbar />

        {/* <!-- back to top --> */}
        <a href="#" id="scroll" style={{ display: "none" }}>
          <span></span>
        </a>

        {/* <!-- header --> */}
        <section className="header-container">
          <div className="wrapper">
            <header>
              <div className="header-content">
                <div>
                  Get the best Plants on
                  <span className="brown-text">
                    {" "}
                    PlantHome
                    <img src="./Images/main.svg" alt="" />
                  </span>
                </div>
                <p>
                  Brighten the colors of your home with the best quality plants
                  of various types
                </p>
                <a href="#">Shop Plants Now</a>
              </div>

              <div className="header-img">
                <img src="./Images/headerimg.png" alt="get plants here" />
                <div className="img-bg-g"></div>
                <div className="img-bg-w"></div>
              </div>
            </header>
          </div>
        </section>

        {/* <!-- showcase - I did not know what to call it so lets just call it that --> */}
        <section className="showcase-container">
          <div className="wrapper">
            <div className="coll" id="collection">
              <h2 className="coll-header">Collections</h2>
              <div className="coll-grid">
                <div className="coll-img">
                  <img src="./Images/coll1.png" alt="valentine collection" />
                  <p>
                    Valentine Collection <img src="./Images/arrow.svg" />
                  </p>
                </div>
                <div className="coll-img">
                  <img src="./Images/coll2.png" alt="live plants" />
                  <p>
                    Live Plants <img src="./Images/arrow.svg" alt="" />
                  </p>
                </div>
                <div className="coll-img">
                  <img src="./Images/coll3.png" alt="best sellers" />
                  <p>
                    Best Sellers <img src="./Images/arrow.svg" alt="" />
                  </p>
                </div>
              </div>
            </div>

            <div className="best" id="plants">
              <h2 className="best-header">Best Sellers</h2>
              <div className="best-grid">
                <div>
                  <img src="./Images/best1.png" alt="Philodendron green" />
                  <div className="product">
                    <p>Philodendron Green</p>
                    <p>$60</p>
                  </div>
                  <div className="specs">
                    <p>2 colors</p>
                    <p>Large</p>
                  </div>
                  <div className="colors">
                    <div></div>
                    <div></div>
                  </div>
                </div>
                <div>
                  <img src="./Images/best2.png" alt="plant parent" />
                  <div className="product">
                    <p>Plant Parent</p>
                    <p>$90</p>
                  </div>
                  <a href="#" className="opt">
                    more options
                  </a>
                </div>
                <div>
                  <img src="./Images/best3.png" alt="monstera deliciosa" />
                  <div className="product">
                    <p>Monstera Deliciosa</p>
                    <p>$30 - 70</p>
                  </div>
                  <a href="#" className="opt">
                    more options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- featured --> */}
        <section className="feat-container">
          <div className="price-tag">
            <h2>Price</h2>
            <h1>$289</h1>
          </div>
          <div className="wrapper">
            <div className="feat">
              <h1 className="feat-head">Featured Plant</h1>

              <div className="feat-flex">
                <div className="feat-content">
                  <h1>Bamboo Palm</h1>
                  <p>
                    Potted Bamboo palm brings colors and warmth to any room in
                    the house. Unlike most plants that need direct light to
                    thrive, these will grow even in low light conditions.
                    Although they will grow taller with more light.
                  </p>
                  <a href="#">Buy Now</a>
                </div>
                <div className="feat-group">
                  <img className="vector" src="./Images/Vector.png" alt="" />
                  <img
                    className="feat-img"
                    src="./Images/featured.png"
                    alt="get plants here"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- subscription --> */}
        <section className="sub-container" id="contact">
          <div className="wrapper">
            <div className="sub-text">
              Want to join the Plant family for our offers, Care tips and many
              more sent straight to your
              <span className="inbox">
                {" "}
                inbox?
                <img src="./Images/pointer.png" alt="" />
              </span>
            </div>
            <div className="sub-form">
              <img className="sub-img" src="./Images/main-lg.svg" alt="" />
              <form>
                <div className="form-div">
                  <input
                    type="text"
                    placeholder="We saved a spot for your email"
                  />
                  <button>SEND</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* <!-- image grid --> */}
        <section className="img-grid-container">
          <div className="wrapper">
            <div className="img-grid">
              <img src="./Images/grid1.png" alt="" />
              <img src="./Images/grid2.png" alt="" />
              <img src="./Images/grid3.png" alt="" />
              <img src="./Images/grid4.png" alt="" />
              <img src="./Images/grid5.png" alt="" />
            </div>
          </div>
        </section>

        {/* <!-- footer --> */}
        <footer>
          <div className="wrapper">
            <div className="full-footer">
              <div>
                <img src="./Images/main-lg.svg" alt="home for plants" />
                <h1>PlantHome</h1>
              </div>
              <div className="footer-items">
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Location</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Subscription</a>
                  </li>
                  <li>
                    <a href="#">Frequently Asked Questions</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Accessibility</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="social-links">
              <p>
                All rights reserved 2020
                <a
                  href="https://karenane.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Karen
                </a>{" "}
                and
                <a
                  href="https://fiyifoluwa.vercel.app"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Fiyi.
                </a>
              </p>
              <div>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="./Images/twitter-logo.svg" alt="" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="./Images/facebook-logo.svg" alt="" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img src="./Images/instagram-logo.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
