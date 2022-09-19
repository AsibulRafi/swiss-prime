import React, { useEffect } from "react";

export default function MoneyLaundering() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="docs">
      <div className="docs__heading">
        <h2>Anti-Money Laundering</h2>
        <p>
          Swiss Prime puts a strong emphasis on counter-money laundering and
          takes it very seriously. The platform strongly abides by the AML
          terms, and as a prominent and global forex platform, it stands as firm
          opposition against money laundering. The following protocol has been
          made for the purpose of keeping any money laundering activities from
          happening and providing timely information on the matter. Swiss Prime
          encourages its users to read the protocol against money laundering and
          let us know in case there are any unclear points.
        </p>
      </div>
      <div className="docs__content">
        <div className="docs__content-flex">
          <div className="docs__content-flex-box">
            <h2>The meaning of money laundering? </h2>
            <p>
              The concealment of any illegal money by moving them to a legally
              valid place or financial institution, unnoticed and hidden from
              the eye of the law.
            </p>
            <p>
              It is possible that funds moved to lawful financial institutions
              by members of terrorist organizations can be used to buy goods or
              services to be utilized in unlawful actions or to aid other
              similar activities.
            </p>
            <p>
              Swiss Prime abides by all legal restrictions and is going to
              notify about all effort of any company, entity or person to hide
              the possession or source of any funds obtained by unlawful
              actions. The following are also contained: fraudulent actions,
              unlawful gambling, stealing, anything drug related and others.
            </p>
          </div>
          <div className="docs__content-flex-box">
            <h2>
              For what reasons do we need to verify your identity when trading?
            </h2>
            <p>
              Every Swiss Prime client is obliged to provide verification of his
              identity along with a proven source of income. The client has to
              give some form of ID in order to verify his name, place of
              residence and other relevant info.
            </p>
            <h2>Which documents are necessary for verifying the identity?</h2>
            <h4>Legal ID document.</h4>
            <h4>
              Duplicate of a utility payment. It must have the client`s name and
              address.
            </h4>
            <p>
              The user has to distinctly show the name of the recipient when
              filling in the Swiss Prime contract. The name on the contract
              should be the same as the one of the account recipient and the one
              on the identification papers. Also, any withdrawals should go to
              the same recipient.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
