import React from "react";
import { HashLink as Link } from "react-router-hash-link";
const Footer = () => {
  return (
    <section className="footer__padding">
      <section className="footer">
        <div className="footer__wrapper">
          <div className="footer__content">
            <div className="footer__content-links">
              <div className="footer__content-links-single">
                <h3>Account</h3>
                <Link to="/">Log In</Link>
                <Link to="/">Sign Up</Link>
              </div>
              <div className="footer__content-links-single">
                <h3>About</h3>
                <Link to="/about#about">About Us</Link>
                <Link to="/about#contact">Contact Us</Link>
                <Link to="/careers">Careers</Link>
                <Link to="/">Security</Link>
              </div>
              <div className="footer__content-links-single">
                <h3>Accounts</h3>
                <Link to="accounts#types">Accounts Types</Link>
                <Link to="accounts#funding">Accounts Funding</Link>
                <Link to="accounts#segregated">Segregated Accounts</Link>
                <Link to="accounts#faq"> Accounts FAQ's</Link>
              </div>
              <div className="footer__content-links-single">
                <h3>Platforms</h3>
                <Link to="/platforms">Meta Trader</Link>
                <Link to="/platforms">Web Trader</Link>
                <Link to="/platforms">Mobile Trader</Link>
              </div>
              <div className="footer__content-links-single">
                <h3>Tools</h3>
                <Link to="/spreads">Spreads and Trading Hours</Link>
                <Link to="/trading">Trading Glossary</Link>
              </div>
              <div className="footer__content-links-single">
                <h3>Assets</h3>
                <Link to="/assets">CFD Trading</Link>
                <Link to="/assets">Forex</Link>
                <Link to="/assets">Commodities</Link>
                <Link to="/assets">Indices</Link>
                <Link to="/assets">Stocks</Link>
                <Link to="/assets">Algorithmic trading</Link>
              </div>
              <div className="footer__content-links-single">
                <h3>Resources</h3>
                <Link to="/terms">Terms and Conditions</Link>
                <Link to="/privacy">Privacy Policy</Link>
                <Link to="/kyc">KYC Policy</Link>
                <Link to="/risk">Risk Disclosure</Link>
                <Link to="/laundering">Anti-Money Laundering</Link>
                <Link to="/kyc">FAQ’s</Link>
              </div>
            </div>
            <div className="footer__content-risk">
              <h2 className="footer__content-risk__heading">Risk Warning</h2>
              <p>
                Trading in Forex and CFDs carries a high level of risk and can
                result in the loss of part or all of your investment. Trading in
                Forex and CFDs may not be appropriate for all investors. You
                rights aware of all the risks associated with Forex and CFD
                trading and seek for independent advice. Past performance does
                not constitute a reliable indication of future results,
                Forecasts for the future do not constitute a reliable indicator
                of future performance. Copyright for the pages and for the
                screens displaying the pages, and for the information, material
                and their arrangement, is owned Swiss Prime limited all rights
                reserved.
              </p>
              <p>
                This information is intended for investors outside the United
                States who are not US Japanese citizens and residents. This
                website is intended for informational purposes only. This
                website is not directed at any jurisdiction and is not intended
                for any use that would be contrary to local law or regulation,
                The products described on this are not offered and may not be
                sold in the United States/Japan or to USA/Japanese citizens and
                residents.
              </p>
            </div>
          </div>
          <div className="copyright">
            <h4>© 2022 ALL right reserved Swiss Prime</h4>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Footer;
