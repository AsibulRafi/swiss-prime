import React, { useEffect } from "react";
import kycBg from "../assets/kycbg.png";
export default function KYC() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="docs">
      <div className="docs__heading">
        <h2>KYC Policy</h2>
      </div>
      <div className="docs__content">
        <div className="docs__content-flex">
          <div className="docs__content-flex-box">
            <p>
              Know your customer policies have become increasingly important
              worldwide lately, especially among banks and other financial
              institutions, in order to prevent identity theft, money
              laundering, financial fraud and terrorist activity.
            </p>
            <p>
              Swiss Prime holds a zero tolerance fraud policy and is taking all
              measures possible to prevent it. Any fraudulent activity will be
              documented and all related accounts to it will be immediately
              closed. All funds in these accounts will be forfeited.
            </p>
          </div>
          <div className="docs__content-flex-box">
            <h2>Prevention</h2>
            <p>
              Swiss Prime aims to ensure the integrity of any sensitive data it
              obtains, such as your account information and the transactions you
              make, using a variety of security measures and fraud controls.
              Securing your electronic transactions requires us to be provided
              with certain data from you, including your preferred deposit
              method.
            </p>
          </div>
        </div>
        <hr />
        <div className="docs__content-flex">
          <div className="docs__content-flex-box">
            <h2>
              When you deposit funds we will require the following documents:
            </h2>
            <ul>
              <li>A copy of your valid passport with the signature page</li>
              <li>
                Copies of your credit cards used to make the deposit (The front
                side with only the 4 last digits visible, backside with the CVV
                covered)
              </li>
              <li>A copy of a recent utility bill in your name and address</li>
              <li>A signed purchase history of your online transactions</li>
            </ul>
          </div>
          <div className="docs__content-flex-box">
            <h2>When do I need to provide these documents?</h2>
            <p>
              We highly appreciate you taking the time to provide us with all
              the necessary documents as soon as you can, in order to avoid any
              delays in processing your transactions. We require the receipt of
              all the necessary documents prior to making any cash transactions
              to your benefit.
            </p>
            <p>
              Some circumstances may require us to request these documents
              before allowing any other activities in your account, such as
              deposits or trades.
            </p>
            <p>
              Please note that if we will not receive the required documents on
              file, your pending withdrawals will be canceled and credited back
              to your trading account. We will notify you in such event via our
              system.
            </p>
          </div>
        </div>

        <img src={kycBg} alt="kycBg" />
        <div className="docs__content-flex">
          <div className="docs__content-flex-box">
            <h2>How do I know my documents are safe with you?</h2>
            <p>
              Swiss Prime holds the security of documentation with the highest
              priority and treats all documents it receives with utmost respect
              and confidentiality. All files we obtain are fully protected using
              the highest level possible of encryption at every step of the
              review process.
            </p>
            <p>
              We thank you for your cooperation in helping us make Swiss Prime a
              safer place to trade.
            </p>
          </div>
          <div className="docs__content-flex-box">
            <h2>How can I send you these documents?</h2>
            <p>
              Please scan your documents, or take a high-quality digital camera
              picture, save the images as jpegs, then send it to us via mail to
              support@swissprime.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
