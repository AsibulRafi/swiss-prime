import React from "react";
import metaTrader from "../assets/platformHerobg.png";
import metaTraderBg from "../assets/platformImg1.png";
import webTrader from "../assets/webTrader.png";
import mobileTrader from "../assets/mobileTrader.png";
import mobileTraderBg from "../assets/mobileTraderBg.png";
export default function Platform() {
  return (
    <>
      <section className="platform">
        <div className="platform__wrapper">
          <div className="platform__heading">
            <h2>Platforms</h2>
            <p>
              Our company provides the best platforms on the market <br />
              which enable you to invest from anywhere and on the move.
            </p>
          </div>
          <div className="platform__content">
            <div className="platform__content-info">
              <h2>Meta Trader 4</h2>
              <p>
                Swiss Prime Meta Trade 4 provides the optimal platform for
                making the most out of Forex trading
              </p>
              <p>
                MT4 is globally acclaimed software made specifically for the
                purpose of delivering the best Forex experience, along with
                Commodities, Futures and different tradable assets. It is
                perfect for new traders, as well as seasoned veterans, because
                it covers all aspects of the trading process. Due to its
                reliability, easiness of use, timely access to vital information
                and trading strategies, along with the latest economic data and
                occurrences, MT4 is considered to be the leading platform
                worldwide
              </p>
              <div className="platform__content-info-btn">
                <button>Windows</button>
                <button>MAC OS</button>
              </div>
              <p>Dowload Metatrader 4 for Windows and Mac</p>
            </div>
            <div className="platform__content-img">
              <img src={metaTrader} alt="metaTrader" />
            </div>
          </div>
          <div className="platform__info">
            <div className="platform__info-img">
              <img src={metaTraderBg} alt="info" />
            </div>
            <div className="platform__info-text">
              <h2>
                Meta Trader 4 gives you <br />
                the opportunity to:
              </h2>
              <ul>
                <li>
                  Invest in a wide variety of Currencies, Commodities and
                  Futures.
                </li>
                <li>Make analysis of securities quotes.</li>
                <li>Create a trading strategy.</li>
                <li>
                  Use your mobile phone to trade, no matter where you are.
                </li>
                <li>Look at many charts at the same time.</li>
                <li>Make customizations to the screens.</li>
                <li>Get support for many currencies.</li>
                <li>Choose from a wide number of support languages.</li>
                <li>Instant Execution and Automated Trading.</li>
                <li>Secure Application and Slippage protection.</li>
                <li>Advanced charts availability.</li>
                <li>3rd party bridging.</li>
                <li>Availability of four pending orders</li>
                <li>Buy Limit, Buy Stop, Sell Limit, Sell Stop.</li>
                <li>0.01 lot sizes</li>
                <li>Partial closing and many others.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="webTrader">
        <div className="webTrader__wrapper">
          <div className="webTrader__content">
            <div className="webTrader__content-img">
              <img src={webTrader} alt="metaTrader" />
            </div>
            <div className="webTrader__content-info">
              <h2>Web Trader</h2>
              <p>
                Swiss Prime highest purpose is to turn its clients into
                successful traders and increase their success rates as much as
                possible. For that purpose we give you the Swiss Prime Online
                trader, which enables you to be 100% involved in the trading
                process and adjust according to the market conditions, all the
                while letting you plan your trading activities to your
                preference.
              </p>
              <p>
                Utilize the full scope of the latest technological developments
                in the field by trading from any internet connectible device.
                Investing in Forex, Commodities and CFD has never been easier
                thanks to the Swiss Prime Online Trader.
              </p>
              <a href="/" className="webTrader__content-info-btn">
                Open Account
              </a>
            </div>
          </div>
          <div className="webTrader__info">
            <div className="webTrader__info-text">
              <p>
                Swiss Prime grants you a gateway to all your trading needs with
                the online and mobile trading applications. They are extremely
                intuitive and functional, enabling you to start a trade whenever
                you want, from anywhere in the world. In case you already have a
                trading account you can start a trade immediately.
              </p>
              <p>
                The Swiss Prime Online Trader present clients with the option to
                choose from a number of languages, it features the latest
                charts, fast operation of the trades, and best of all, it makes
                everything easy. You have the ability to access to trader from a
                number of different devices such as Apple or Android phone,
                tablet or PC. The platform is easy to use on every device and
                you can handle your investments with just a few clicks.
              </p>
              <p>
                Due to the intuitiveness and easiness of use, the Swiss Prime
                Online trader will make sure that you are fully informed about
                all trades that interest you. Stay knowledgeable on the latest
                market news and trends, without having to leave your couch.
              </p>
              <p>
                The financial market can be very volatile and the conditions can
                change in a matter of minutes. Therefore, you need to be able to
                react quickly in such cases. With the Swiss Prime Online Trader,
                you act accordingly and access your trades at any moment. The
                advantage is in your hands.
              </p>
              <p>
                With the hastened pace of modern life, you need to be constantly
                on the go, but the platform lets you combine that with your
                trading needs, without having to compromise. It`s accessible
                from any browser, there is no need for you to be stuck to any
                specific place. Be it in your office, or from a friend`s PC,
                logging into your account and trading or just checking something
                is quick and simple. Using Swiss Prime to trade is like a walk
                in the park.
              </p>
            </div>
            <div className="webTrader__info-text">
              <h2>
                Web Trader gives you the
                <br /> opportunity to:
              </h2>
              <ul>
                <li>Instant Execution</li>
                <li>Automated Trading</li>
                <li>Secure Application</li>
                <li>Advanced charts availability</li>
                <li>Slippage protection</li>
                <li>3rd party bridging</li>
                <li>Availability of four pending orders</li>
                <li>Buy Limit, Buy Stop, Sell Limit, Sell Stop</li>
                <li>0.01 lot sizes</li>
                <li>Partial closing and many others</li>
                <li>Have full control over your profile</li>
                <li>Perform in-depth market analysis</li>
                <li>Invest in a wide selection of assets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="mobileTrader">
        <div className="mobileTrader__wrapper">
          <div className="mobileTrader__content">
            <div className="mobileTrader__content-info">
              <h2>Mobile Trader</h2>
              <p>
                Swiss Prime Trading Mobile Application: The independence to
                trade at any time and place
              </p>
              <p>
                Don’t lag – begin making trades from your device, no matter if
                it’s phone or tablet, Apple or Android Swiss Prime mobile
                software gives you the opportunity to invest, operate your
                profile and check Special Swiss Prime mobile software affords
                you with abilities to invest, to operate personal profile and to
                check the newest financial tendencies with no strict attachment
                to time and place where you are, and without a fee. The possible
                potential of that software is to please every trader, whether a
                beginner or an advanced patron. Keywords inside of that are
                intuitive plain.
              </p>
              <div className="mobileTrader__content-info-btn">
                <button>Windows</button>
                <button>MAC OS</button>
              </div>
            </div>
            <div className="mobileTrader__content-img">
              <img src={mobileTrader} alt="metaTrader" />
            </div>
          </div>
          <div className="mobileTrader__info">
            <div className="mobileTrader__info-img">
              <img src={mobileTraderBg} alt="info" />
            </div>
            <div className="mobileTrader__info-text">
              <h2>
                Trading Mobile Application: <br />
                The independence to trade at any time and place
              </h2>
              <ul>
                <li>
                  Invest in a wide variety of Currencies, Commodities and
                  Futures.
                </li>
                <li>Make analysis of securities quotes.</li>
                <li>Create a trading strategy.</li>
                <li>
                  Use your mobile phone to trade, no matter where you are.
                </li>
                <li>Look at many charts at the same time.</li>
                <li>Make customizations to the screens.</li>
                <li>Get support for many currencies.</li>
                <li>Choose from a wide number of support languages.</li>
                <li>Instant Execution and Automated Trading.</li>
                <li>Secure Application and Slippage protection.</li>
                <li>Advanced charts availability.</li>
                <li>3rd party bridging.</li>
                <li>Availability of four pending orders</li>
                <li>Buy Limit, Buy Stop, Sell Limit, Sell Stop.</li>
                <li>0.01 lot sizes</li>
                <li>Partial closing and many others.</li>
              </ul>
            </div>
          </div>
          <div className="mobileTrader__text">
            <p>
              As we have mentioned before, this software is suitable for almost
              all devices, whether it’s Apple or Android products. Stay informed
              regarding newest market processes, and act deliberately keeping to
              it. Place deals freely strict from your mobile.
            </p>
            <p>
              Invest your capital in a broad assortment of instruments and come
              in the global markets. Combined chartings among with symbols,
              together with technological statistics and the newest financial
              tendencies could assist you in the decision to open or close
              agreed position. Besides of that, platform affords an absolutely
              safeness and privacy of its mobile software for your use.{" "}
            </p>
            <p>
              Use your mobile device to invest in a variety of financial
              instruments – Forex, Futures and Commodities.
            </p>
            <p>
              Try your mobile device to invest in wide range of trading
              instruments, such as Forex, Futures and Commodities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
