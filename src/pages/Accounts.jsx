import React from "react";
import stepIcon1 from "../assets/stepsIcon1.png";
import stepIcon2 from "../assets/stepsIcon2.png";
import stepIcon3 from "../assets/stepsIcon3.png";
import segregatedImg from "../assets/segregatedImg.png";
import mini from "../assets/mini.png";
import classic from "../assets/classic.png";
import premium from "../assets/premium.png";
export default function Accounts() {
  return (
    <>
      <section className="accounts" id="types">
        <div className="accounts__wrapper">
          <div className="accounts__heading">
            <h2>Account Types</h2>
            <p>
              Our accounts provide benefits of Forex market to private and
              corporate clients, using one of the most advanced trading
              platforms available.
            </p>
          </div>
          <section className="pricing">
            {/* Pricing Card */}
            <div
              className="pricing__card"
              style={{ backgroundColor: "#FFFFFF", color: "#212121" }}
            >
              <div className="pricing__card-heading">
                {/* Heading */}
                <img src={mini} alt="priceIcon" />
                <h2>MINI</h2>
                <p>
                  Basic Trading <br /> for Beginners
                </p>
                <h3>$1 000</h3>
              </div>
              {/* Info */}
              <div className="pricing__card-info">
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Online Chat Support</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Platforms: MT4﹠Mobile</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Instruments: Forex, CFDs﹠Commodities</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Free E-book </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Individual Competitive Spreads﹠Commissions </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Access to Breaking News﹠ Market Research</p>
                </div>
              </div>
              <a
                href="/"
                className="pricing__card-btn"
                style={{ backgroundColor: "#406C83", color: "#fff" }}
              >
                Open Account
              </a>
            </div>
            {/* Pricing Card */}
            <div
              className="pricing__card"
              style={{ backgroundColor: "#406C83", color: "#fff" }}
            >
              <div className="pricing__card-heading">
                {/* Heading */}
                <img src={classic} alt="priceIcon" />
                <h2>Classic</h2>
                <p>
                  For Skilled <br />
                  Investors
                </p>
                <h3>$5 000</h3>
              </div>
              {/* Info */}
              <div className="pricing__card-info">
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Online Chat Support</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Platforms: MT4﹠Mobile</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Instruments: Forex, CFDs﹠Commodities </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Free E-book </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Individual Competitive Spreads﹠Commissions </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Access to Breaking News﹠ Market Research</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Online Phone Support </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Real-Time Trading Signals </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Trading Education Program</p>
                </div>
              </div>
              <a href="/">
                <button className="pricing__card-btn">Open Account</button>
              </a>
            </div>

            {/* Pricing Card */}
            <div
              className="pricing__card"
              style={{ backgroundColor: "#ffffff", color: "#212121" }}
            >
              <div className="pricing__card-heading">
                {/* Heading */}
                <img src={premium} alt="priceIcon" />
                <h2>Premium</h2>
                <p className="pricingM">Advanced Trading For</p>
                <p> Experienced Investors</p>
                <h3>$20 000</h3>
              </div>
              {/* Info */}
              <div className="pricing__card-info">
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Online Chat Support</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Platforms: MT4﹠Mobile</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Instruments: Forex, CFDs﹠Commodities </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Free E-book </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Individual Competitive Spreads﹠Commissions </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Access to Breaking News﹠ Market Research</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Online Phone Support </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Real-Time Trading Signals </p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Trading Education Program</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Account Executive Team</p>
                </div>
                <div className="info__box">
                  <i className="fas fa-check"></i>
                  <p>Available 24/7 Trade Mentor</p>
                </div>
              </div>
              <a
                href="/"
                className="pricing__card-btn"
                style={{ backgroundColor: "#406C83", color: "#fff" }}
              >
                Open Account
              </a>
            </div>
          </section>
        </div>
      </section>
      <section className="accountSteps">
        <div className="accountSteps__wrapper">
          <div className="accountSteps__heading">
            <h2>
              Steps for opening a Swiss <br /> Prime Trading Profile
            </h2>
          </div>
          <div className="accountSteps__content">
            <div className="accountSteps__content-box">
              <img src={stepIcon1} alt="stepIcon" />
              <div className="accountSteps__content-box-info">
                <h2>
                  Pick the account types depending on your objectives and needs
                </h2>
                <p>
                  Three available account types are supplemented with lots of
                  additional features that bring some extra pluses to the
                  investor. You can easily sign up for any of them. And keep the
                  notice that you can change the account type after putting
                  money on your acc.
                </p>
              </div>
            </div>
            <div className="accountSteps__content-box">
              <img src={stepIcon2} alt="stepIcon" />
              <div className="accountSteps__content-box-info">
                <h2>
                  Fill out the demanded information and confirm your identity
                </h2>
                <p>
                  Three available account types are supplemented with lots of
                  additional features that bring some extra pluses to the
                  investor. You can easily sign up for any of them. And keep the
                  notice that you can change the account type after putting
                  money on your acc.
                </p>
              </div>
            </div>
            <div className="accountSteps__content-box">
              <img src={stepIcon3} alt="stepIcon" />
              <div className="accountSteps__content-box-info">
                <h2>Depositing money into your account</h2>
                <p>
                  Once we approve and authorize your application, you will be
                  able to make your payments and withdrawals swiftly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="funding" id="funding">
        <div className="funding__wrapper">
          <div className="funding__heading">
            <h2>Account Funding</h2>
            <p>There are 3 different ways to fund your Swiss Prime account: </p>
          </div>
          <div className="funding__content">
            <div className="funding__content-flex">
              <div className="funding__content-flex-box">
                <h2>1. Credit Card/Debit Card</h2>
                <p>
                  The best way to fund your account is with a credit or debit
                  card. The transfer is immediate and secure. Minimum
                  transaction amount $250 with a maximum amount $500. Please not
                  your card should be enabled for international transactions.
                </p>
              </div>
              <div className="funding__content-flex-box">
                <h2>2. Bank Draft</h2>
                <p>
                  You can utilize your banks services and transfer funds using a
                  bank draft. Please note that in some cases it might take up to
                  5 days for your funds to clear.
                </p>
              </div>
            </div>
            <h2>3. Wire Transfer</h2>
            <p>
              Please use the details provided by your Senior Broker. The minimum
              amount is $10.000 for bank wires. If you have online banking you
              can input the details provided online, or visit your bank and fill
              in the wire transfer form. Please remember to provide your Senior
              Broker the remittance slip. Depending on your bank your funds
              might take up to 5 days to clear. As soon as the funds are in your
              trading account you will receive an email notification.
            </p>
            <div
              className="funding__content-flex"
              style={{ marginTop: "10rem" }}
            >
              <div className="funding__content-flex-box">
                <h2>Things you should take into account:</h2>
                <ul>
                  <li>
                    The initial amount invested will be returned through the
                    same method deposited. If the requested amount exceeds the
                    initial invested amount, you need to provide us with the
                    bank account details of an account under your name, in order
                    to receive the excess amount.
                  </li>
                  <li>
                    For further inquiries regarding funding please contact us on
                    support@Swiss Prime.com or through our live chat.
                  </li>
                  <li>
                    In case you would like to ask anything related to putting
                    money on the Live Account, feel free to get in touch with a
                    Swiss Prime employee.
                  </li>
                </ul>
              </div>
              <div className="funding__content-flex-box">
                <h2>Withdrawing Funds</h2>

                <ul>
                  <li>
                    In order to submit a withdrawal request you need to log in
                    to your account in your client area and submit a withdrawal
                    request.
                  </li>
                  <li>
                    Your request will be addressed and processed promptly.
                    Usually, provided the account is verified the request is
                    process within the next 2 business days. Depending on your
                    bank, your funds might take longer to appear in your bank
                    account.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="segregated" id="segregated">
        <div className="segregated__wrapper">
          <div className="segregated__heading">
            <h2>Segregated Accounts</h2>
            <p>
              The unique Swiss Prime Account allows our clients to conduct
              trades perfectly protects them out of slow transaction times or
              information and payments errors.
            </p>
          </div>
          <div className="segregated__content">
            <div className="segregated__content-item">
              <h2>Advantages</h2>
              <p>
                There are few more additional benefits that are shaped exactly
                to satisfy our client’s needs. You can be sure in:
              </p>
              <ul>
                <li> 100% client orientated experience</li>
                <li> Effective use of your capital</li>
                <li>Convenient and client-friendly management of your funds</li>
                <li>
                  24/5 client support and help in dealing with the most common
                  issues
                </li>
                <li> 128 bit SSL Security Protocols</li>
              </ul>
            </div>
            <div className="segregated__content-item">
              <h2>When will a Senior Broker be assigned to me?</h2>
              <p>
                Your Personal Senior Broker will be assigned to you upon
                activating and funding your account.
              </p>
              <img src={segregatedImg} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
