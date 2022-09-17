import React from "react";
import tradeImg from "../assets/tradeImg.png";
import homeTradeIcon1 from "../assets/homeTradeIcon1.png";
import homeTradeIcon2 from "../assets/homeTradeIcon2.png";
import homeTradeIcon3 from "../assets/homeTradeIcon3.png";
import homeTradeIcon4 from "../assets/homeTradeIcon4.png";
import homeTradeIcon5 from "../assets/homeTradeIcon5.png";
import homeTradeIcon6 from "../assets/homeTradeIcon6.png";
import homeTradeIcon7 from "../assets/homeTradeIcon7.png";
import homeTradeIcon8 from "../assets/homeTradeIcon8.png";
import aboutIcon1 from "../assets/aboutIcon1.png";
import aboutIcon2 from "../assets/aboutIcon2.png";
import aboutIcon3 from "../assets/aboutIcon3.png";
import aboutIcon4 from "../assets/aboutIcon4.png";
import Slider from "../Components/Slider";
const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="hero__content-heading">
              Our novelty tools -<br /> your successful goals
            </h2>
            <p>
              Trading in Forex, Metals, Indexes, Energies, Stocks,
              <br /> ETFs and Cryptocurrencies
            </p>
            <a href="/">
              <button className="hero__content-btn">Open Account</button>
            </a>
          </div>
        </div>
      </section>
      {/* Info */}
      <section className="info">
        <div className=" info__wrapper">
          <div className="info__heading">
            <h2>Swiss Prime trading</h2>
          </div>
          <div className="info__content">
            <div className="info__card">
              <img src={aboutIcon1} alt="infoIcon" />
              <h2>
                INTUITIVE TOOLS AND <br />
                COMPETITIVE PRICING
              </h2>
              <p>
                Whether you’re an active trader or long-term investor our web,
                mobile, and downloadable platforms give you everything you need
                to research stocks, place trades, and manage your portfolio with
                live-streaming access, real-time quotes and specialists with
                years of floor trading experience. As an STP (Straight Through
                Processing) broker, we do not have any conflict of interest
                regarding our clients’ trades, as we only receive a commission
                on the volume of the trades and do not benefit in any additional
                way by any client losses.
              </p>
            </div>
            <div className="info__card">
              <img src={aboutIcon2} alt="infoIcon" />

              <h2>
                TRANSPARENT AND <br /> TRUSTWORTHY
              </h2>
              <p>
                For a few years now, Swiss Prime has been proud to help our
                clients pursue their financial goals while giving them more time
                to focus on what really matters in life. Everything we provide,
                from guidance to powerful trading tools, to retirement resources
                is built around one thing, you. We know it’s important to get
                professional guidance you can trust. That’s why our experienced,
                licensed reps are available by phone, email, online, and in
                person for one-on-one support when you need it most. You can
                always count on us.
              </p>
            </div>
            <div className="info__card">
              <img src={aboutIcon3} alt="infoIcon" />

              <h2>SECURED FUNDS</h2>
              <p>
                Your funds are kept in segregated 3rd party regulated financial
                institutions and we use advanced encryption tools to keep all of
                your transactions and personal data safe and secured. Also our
                flat-rate commission on all online equity trades gives you
                access to our award-winning investing and trading experience.
                Plus, we keep our pricing simple with no share limits or hidden
                fees, no trade requirements to access advanced features, and no
                deposit minimums. At Swiss Prime all transactions are simple and
                direct.
              </p>
            </div>
            <div className="info__card">
              <img src={aboutIcon4} alt="infoIcon" />

              <h2>ALGO TRADING</h2>
              <p>
                Algorithmic Trading is a program that offers everyone the
                opportunity to trade with better precision and high success rate
                than he/she would normally get. It makes use of a scenario-based
                approach and artificial intelligence so as to develop the best
                trading approach for the circumstances. Different variables such
                as price, quantity and time period are taken into serious
                consideration as well. The number of traders that use our
                Algorithmic trading keeps increasing by the day, as it makes the
                trading journey easy and well-profiting.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Slider />
      <section className="trade__info ">
        <div className="trade__info__wrapper">
          <div className="trade__info-content">
            <div className="trade__info-content-info">
              <h2>A trader oriented broker</h2>
              <p>
                At Swiss Prime we place high importance and emphasis on customer
                satisfaction, and we are dedicated to being more than just an
                online broker to our clients. Make your trading experience worth
                it, choose a right broker, and choose Swiss Prime!
              </p>
              <p>
                At Swiss Prime we ensure all our clients are up to date with the
                market trends and also provide them with latest trading
                technology and Forex tools by investing continuously in
                innovations. These instruments are updated on a regular basis
                thereby offering new platforms and services to answer the
                various questions and meet the need of every trader, in so
                doing; we are keeping our promise and commitment towards a fair
                and open trading.
              </p>
              <p>
                All our trusted clients have a 24/7 access to our various
                comprehensive educational materials. These materials help
                trader’s understand and learn more about the various online
                operations, trading and the global market in general. We have a
                great customer support team which is always and readily
                available to assist with any issue you might encounter or
                challenge you might face in the course of trading.
              </p>
              <p>
                At Swiss Prime we place high importance and emphasis on customer
                satisfaction, and we are dedicated to being more than just an
                online broker to our clients. Make your trading experience worth
                it, choose a right broker, and choose Swiss Prime!
              </p>
            </div>
            <div className="trade__info-content-img">
              <img src={tradeImg} alt="tradeImg" />
            </div>
          </div>
        </div>
      </section>
      {/* Trade  Section */}
      <section className="trade">
        <div className=" trade__wrapper">
          <div className="trade__heading">
            <h2>Trade with us</h2>
            <p>
              Swiss Prime presents its clients with the optimal platform for
              investing in Forex, Futures and Commodities.
              <br /> We are committed to providing each and every client with
              the best experience possible and always aim to provide the
              necessary means and resources for successful trading.
            </p>
          </div>
          <div className="trade__content">
            <div className="trade__content-cards">
              <div className="trade___single-card">
                <img src={homeTradeIcon1} alt="icon" />
                <h4>
                  Various account options, catering to each client`s specific
                  circumstances. You can also upgrade your account at a later
                  stage.
                </h4>
              </div>
              <div className="trade___single-card">
                <img src={homeTradeIcon2} alt="logo" />
                <h4>
                  Top notch trading platforms, available on all relevant devices
                  – PC, Mac, Android and Apple phones.
                </h4>
              </div>
              <div className="trade___single-card">
                <img src={homeTradeIcon3} alt="icon" />
                <h4>
                  Timely reports and indicators, which let you follow how your
                  trading develops with each signal, along with vital success
                  strategies
                </h4>
              </div>
              <div className="trade___single-card">
                <img src={homeTradeIcon4} alt="logo" />
                <h4>Superior request processing and spreads</h4>
              </div>

              <div className="trade___single-card">
                <img src={homeTradeIcon5} alt="logo" />
                <h4>
                  Algorithmic Trading – a computer program which aids you by
                  making trading faster and better overall
                </h4>
              </div>
              <div className="trade___single-card">
                <img src={homeTradeIcon6} alt="logo" />
                <h4>
                  Means for investing in Forex, futures and indices on a wide
                  number of international marketplaces.
                </h4>
              </div>
              <div className="trade___single-card">
                <img src={homeTradeIcon7} alt="logo" />
                <h4>
                  Excellent client care and technical support, which lets you
                  focus on trading
                </h4>
              </div>
              <div className="trade___single-card">
                <img src={homeTradeIcon8} alt="logo" />
                <h4>
                  A personalized education system – massive amounts of trading
                  information at your disposal
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="steps">
        <div className="steps__wrapper">
          <h2 className="steps__heading">
            Begin your trading experience with <br />
            Swiss Prime in 4 Easy steps
          </h2>

          <div className="steps__contents">
            {/* Single Steps */}
            <div className="steps__item">
              <div className="steps__item-number">
                <h1>1</h1>
              </div>
              <h4 className="steps__item-heading">SIGN UP</h4>
              <p className="steps__item-text">
                Create your Live Trading <br />
                Account on Swiss Prime
              </p>
            </div>
            <div className="steps__item">
              <div className="steps__item-number">
                <h1>2</h1>
              </div>

              <h4 className="steps__item-heading">VERIFICATION</h4>
              <p className="steps__item-text">
                Upload Necessary
                <br /> Documents to Verify your
                <br /> Account
              </p>
            </div>
            <div className="steps__item">
              <div className="steps__item-number">
                <h1>3</h1>
              </div>
              <h4 className="steps__item-heading">DEPOSIT</h4>
              <p className="steps__item-text">
                Login to your Account and
                <br /> Make a Deposit
              </p>
            </div>
            <div className="steps__item">
              <div className="steps__item-number">
                <h1>4</h1>
              </div>
              <h4 className="steps__item-heading">START TRADING</h4>
              <p className="steps__item-text">
                Trade and Choose from
                <br /> Numerous Instruments <br />
                Available on Swiss Prime
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
