import React, { useEffect } from "react";

export default function Risk() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="docs">
      <div className="docs__heading">
        <h2>Risk Disclosure</h2>
      </div>
      <div className="docs__content" style={{ textAlign: "center" }}>
        <p>
          Don`t forget that trading company shares, investing in currency and
          any other financial instrument has its definite risks and can result
          in losses for the user. The following announcement lists some of the
          hazards related to investing in financial assets. We would like you to
          go through the disclaimer and let us know in case you have any
          questions or uncertainties about it.
        </p>
        <p>
          Because of the theoretical essence of Forex trading, it is possible
          that the user ends up losing all, or at least some of his money. In
          some cases, the amount of lost funds can be bigger than the first
          deposit. Swiss Prime highly recommends that the client uses a
          so-called risk capital for his investment purposes. Risk capital
          refers to money which is not important for covering the basic life
          needs of the client. In other words, it is money which you can afford
          to lose. It is also wise to make an assessment of what you want to
          achieve by trading Forex and how far you`re willing to go. Be aware of
          your own financial capabilities and try to find the approach to
          trading that works best for you.
        </p>
        <p>
          In case you cannot fully comprehend the uncertainty behind Forex
          trading or any of the Swiss Prime terms and conditions, we advise you
          to abstain from trading on Swiss Prime. Along with all of the
          abovementioned factors, here are some additional risk-related factors
          you should have in mind:
        </p>
        <p>
          Swiss Prime might have an advantage with amounts that go over the
          amount of the user`s margin deposit and this might lead to losses
          bigger than the amount of the deposit. Volatile market conditions and
          fluctuations, as well as building up of certain taxes and fees can
          lead to a funds deficit. In some cases, it is not possible to start
          certain trades at the designated price or a conditional stop/limit or
          stop/loss procedure, due to unpredictable market circumstances. In
          those cases, the client might be asked to make a quick deposit. Should
          the client fail to make the deposit, he will be responsible for any
          negative funds on his account along with the cancellation of the
          trade.
        </p>
        <p>
          The trading of currencies does not happen on an actual exchange
          market. There are sequences which are not traded very often. In some
          cases, there might be errors in the citation of prices because there
          is no other party. Such a trade might not be possible at the
          particular moment in time.
        </p>
        <p>
          Swiss Prime does not provide any guidance or aiding information and
          might have interests different than those of the client. In some
          cases, Swiss Prime might serve as an opposing party of a trade or act
          in a disadvantageous for the user manner. In other words, in a trade
          where the client is selling an asset, Swiss Prime might be the buyer.
          The opposite situation is also possible. It is also possible that
          Swiss Prime sets the pricing for those trades, which might not reflect
          the best possible prices for the client and might differ from the
          prices offered to other clients. The sudden closing of the client`s
          trades might occur in case of bankruptcy in Swiss Prime, an associate
          bank or any other party related to the trading process.
        </p>
        <p>
          By using Swiss Prime and its services, the client agrees that he`s
          read and comprehended the risk announcement.
        </p>
        <p></p>
      </div>
    </section>
  );
}
