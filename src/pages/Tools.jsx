import React, { useEffect, useState } from "react";
import toolsBg from "../assets/toolsBg.png";
import Index from "../Components/Tools";
import forexBg from "../assets/forexBg.png";
import { FiPlus, FiMinus } from "react-icons/fi";
export default function Tools() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedLetter, setSelectedLetter] = useState("a");
  const [clicked, setClicked] = useState(false);
  const alpabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const LettersBlock = () => {
    return alpabet.map((letter) => {
      return (
        <div
          key={letter}
          className={letter === selectedLetter ? "tg__active" : "tg_text"}
          onClick={() => setSelectedLetter(letter)}
        >
          {letter.toUpperCase()}
        </div>
      );
    });
  };
  // FAQ
  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null);
    }

    setClicked(index);
  };
  const render = (item) => {
    return (
      <div className="accordion__dropDown">
        <p>{item?.answer}</p>
      </div>
    );
  };
  const Data = [
    {
      id: 1,
      question: "What is the minimum amount required to open an account?",
      answer:
        "There is no minimum to open a new account; however, a $2,000 deposit is required to be considered for margin and options privileges, regardless of any promotional offer.",
    },
    {
      id: 2,
      question: "What is the fastest way to open a new account?",
      answer:
        "Opening an account online is the fastest way to open and fund an account. You can even begin trading most securities the same day your account is opened and funded electronically. We work 24 hours a day, 7 days a week.",
    },
    {
      id: 3,
      question: "Are there restrictions on funds deposited into my account?",
      answer:
        "Funds typically post to your account 1-2 days after we receive your check or electronic deposit. Once the fund`s post, you can trade most securities. Electronic deposits can take another 3-4 business days to clear; checks can take 5-6 business days. Until your deposit clears, we restrict withdrawals and trading off some securities based on market risk. This includes—but isn’t limited to—options and most stocks priced under $5 per share.All electronic deposits are subject to review and may be restricted for 60 days. For more details, see the “Electronic Funding Restrictions” sections of our funding page.",
    },
    {
      id: 4,
      question: "What types of investments can I make with a No Name1 account?",
      answer:
        "Digitexmarkets offers a comprehensive and diverse selection of investment products. You can trade stocks, options, mutual funds, ETFs, futures, forex, and bonds and CDs in a standard account. Please note that investment choices may vary in less common account types such as Trust accounts, 529 education accounts, and pension plans. Each plan will specify what types of investments are allowed. See Account Types and Investment Products for more information. Yes. As you're completing the Account Application, simply complete the margin and/or options section. We'll review the information, and if appropriate, extend margin and/or options privileges to your account.Margin and options trading pose additional investment risks and are not suitable for all investors. In addition, certain account types may not be eligible for margin, options, or advanced options trading privileges. Please read Characteristics and Risks of Standardized Options, Margin Disclosure Document, Margin Account Handbook, and Day Trading Margin Requirements.",
    },
    {
      id: 5,
      question: "Can I write checks from my account?",
      answer:
        "The stop-loss order and the limit order are the most common risk management tools in Forex trading. A limit order sets a restriction on the minimum price to be received or the maximum price to be paid.An automatic liquidation at a predetermined price for a particular position is called a stop loss. This is used to limit potential losses if the market moves against an investor’s position.",
    },
    {
      id: 6,
      question: "Do I earn interest in my account?",
      answer:
        "Yes. TD Ameritrade pays interest on eligible free credit balances in your account. Simple interest is calculated on the entire daily balance and is credited to your account monthly. This service is subject to the current TD Ameritrade rates and policies, which may change without notice.      ",
    },
    {
      id: 7,
      question: "Is my account protected?",
      answer:
        "If you lose cash or securities from your account due to unauthorized activity, we’ll reimburse you for the cash or shares of securities you lost. We offer you this protection, which adds to the provisions that already govern your account, in case unauthorized activity ever occurs and it was through no fault of your own.",
    },
    {
      id: 8,
      question: "Are there any fees?",
      answer:
        "We believe in fair, straightforward pricing and for you, that means flat-rate $6.95 commissions on every Internet equity trade, regardless of account balance or how many shares you buy; however, you won’t be charged any platform, inactivity, or market data fees. Please review our Commission and Fees for complete details.",
    },
  ];
  return (
    <>
      <section className="tools">
        <div className="tools__wrapper">
          <div className="tools__heading">
            <h2>Tools</h2>
            <p>
              Begginer or an expert, everyone needs tools to be the best!No
              Name1 provides you with some great recources which could benefit
              to your trading career.
            </p>
          </div>
          <div className="tools__content">
            <div className="tools__content-img">
              <img src={toolsBg} alt="toolsBg" />
            </div>
            <div className="tools__content-info">
              <h2>Spreads and Trading hours</h2>
              <p style={{ marginBottom: "10rem" }}>
                Trading with Swiss Prime, you have access to a wide spectrum of
                 currency pairs, available 24/5. Free  of  strict  margin
                boundaries,   item powers  you to  trade using  more  profitable
                conditions.
              </p>
              <h2>Margin requirments</h2>
              <ul>
                <li>
                  You have the ability to select leverages from 1:1 up to 1:40
                </li>
                <li>Minimum Trade Size </li>
                <li>
                  The minimum trade size  for all assets is 0.01 for a standard
                  lot.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="trading__letter" id="glossary">
        <LettersBlock />
      </section>
      <section className="trading">
        <Index letter={selectedLetter} />
      </section>
      <section className="forex" id="forex">
        <div className="forex__wrapper">
          <div className="forex__content">
            <div className="forex__content-info">
              <h2>Forex Signals</h2>
              <p>
                At Swiss Prime we provide the best Forex signals by working{" "}
                <br />
                closely with technology providers who are at the forefront of
                <br />
                the industry.
              </p>
              <a href="/">Open Account</a>
            </div>
            <div className="forex__content-img">
              <img src={forexBg} alt="forexImg" />
            </div>
          </div>
          <div className="accordion__section">
            <h2 className="accordion__section-heading">FAQ's</h2>
            <div className="accordion__container">
              {Data.map((item) => {
                return (
                  <div key={item.id}>
                    <div className="wrap" onClick={() => toggle(item?.id)}>
                      <h1>{item?.question}</h1>
                      <span>
                        {clicked === item?.id ? <FiMinus /> : <FiPlus />}
                      </span>
                    </div>

                    {clicked === item?.id ? render(item) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
