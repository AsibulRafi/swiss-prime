import React from "react";
import Carousel from "react-elastic-carousel";
import { HashLink as Link } from "react-router-hash-link";
import sliderImg1 from "../assets/sliderImg1.png";
import sliderImg2 from "../assets/sliderImg2.png";
import sliderImg3 from "../assets/sliderImg3.png";
import sliderImg4 from "../assets/sliderImg4.png";
import sliderImg5 from "../assets/sliderImg5.png";
import sliderImg6 from "../assets/sliderImg6.png";
import sliderIcon1 from "../assets/sliderIcon1.png";
const Slider = () => {
  const breakPoints = [{ width: 1, itemsToShow: 1 }];
  return (
    <section className="slider">
      <Carousel
        breakPoints={breakPoints}
        autoPlaySpeed={5000}
        enableAutoPlay={true}
      >
        <div
          className="slider__single"
          style={{
            backgroundImage: `url(${sliderImg1})`,
          }}
        >
          <div className="slider__single-wrapper">
            <div className="slider__single-content">
              <h2>Trade Now</h2>
              <p>
                Trade Shares, Indices, Forex, Commodities and
                <br /> Cryptocurrencies with CFDs
              </p>
              <Link to="/about#contact">SIGN UP FOR FREE</Link>
              <h4>TradingCFDs involves risk for loss</h4>
            </div>
          </div>
        </div>
        <div
          className="slider__single"
          style={{
            backgroundImage: `url(${sliderImg2})`,
          }}
        >
          <div className="slider__single-wrapper">
            <div className="slider__single-content">
              <h2>
                The financial market can be very volatile - control it with our
                webtrader
              </h2>

              <Link to="/about#contact">Start Trade</Link>
            </div>
          </div>
        </div>
        <div
          className="slider__single"
          style={{
            backgroundImage: `url(${sliderImg3})`,
          }}
        >
          <div className="slider__single-wrapper">
            <div className="slider__single-content">
              <h2>24 Hours live assistence by</h2>
              <img src={sliderIcon1} alt="sliderIcon" />
              <Link to="/">Click Here</Link>
            </div>
          </div>
        </div>
        <div
          className="slider__single"
          style={{
            backgroundImage: `url(${sliderImg4})`,
          }}
        >
          <div className="slider__single-wrapper">
            <div className="slider__single-content">
              <h2>Take on the market with our innovative powerful platforms</h2>

              <Link to="/">Start Now</Link>
              <h4>
                Trade on the go with our unique
                <br /> mobile platform
              </h4>
            </div>
          </div>
        </div>
        <div
          className="slider__single"
          style={{
            backgroundImage: `url(${sliderImg5})`,
          }}
        >
          <div className="slider__single-wrapper">
            <div className="slider__single-content">
              <h2>
                The NO NAME 1 Meta Trader Four provides the optimal platform for
                making the most out of Forex trading
              </h2>
              <Link to="/">Download Here</Link>
            </div>
          </div>
        </div>
        <div
          className="slider__single"
          style={{
            backgroundImage: `url(${sliderImg6})`,
          }}
        >
          <div className="slider__single-wrapper">
            <div className="slider__single-content">
              <h2>
                Super-fast speed in the execution of orders,with millions of
                orders executed so far
              </h2>
              <Link to="/">Live Assistance</Link>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
