import React from "react";
import aboutBg from "../assets/aboutBg.png";
import contactBg from "../assets/contactBg.png";
import contactIcon1 from "../assets/contactIcon1.png";
import contactIcon2 from "../assets/contactIcon2.png";
export default function About() {
  return (
    <>
      <section className="about" id="about">
        <div className="about__wrapper">
          <h2 className="about__heading">About Us</h2>
          <div className="about__content">
            <div className="about__content-info">
              <p>
                Swiss Prime was launched a few years back with a unique vision
                to provide unparalleled advanced trading conditions, advanced
                education, and state-of-the-art trading tools in the forex
                industry. Due to the continuous focus on localizing our products
                and services to suit each market, together with our successful
                collaboration with talented and experienced teams from all over
                the world.Swiss Prime was quickly established as the global
                trademark it is today.
              </p>
              <p>
                Our number one mission is centered on time. By valuing time and
                understanding the importance of efficiency in the fluctuating,
                lightning-fast world of financial markets, every decision we
                make is designed to ensure that our clients and business
                partners, as well as our team of professionals, invest their
                time wisely. This road is paved by an ironclad focus on
                educating our customers. Knowledge is power, and empowering
                traders to get the best value for their investments is our
                passion.
              </p>
              <p>
                AtSwiss Prime we are committed to making sure all our clients
                and investors stay connected to the various opportunities that
                arise in the market on a daily basis and ease in connecting with
                one another. WithSwiss Prime has your financial stockbroker you
                are sure to get all the professional backing and support you
                require to soar in Forex trading.
              </p>
            </div>
            <div className="about__content-img">
              <img src={aboutBg} alt="aboutImg" />
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact__wrapper">
          <h2 className="contact__heading">Contact Us</h2>
          <div className="contact__content">
            <div className="contact__content-img">
              <img src={contactBg} alt="contactImg" />
            </div>
            <div className="contact__content-info">
              <div className="contact__content-info-flexs">
                <img src={contactIcon1} alt="contactIcon" />
                <h4>Support email:</h4>
                <p>support@swissprime.com</p>
              </div>
              <hr />
              <div className="contact__content-info-flexs">
                <img src={contactIcon2} alt="contactIcon" />
                <h4>Monday to Friday:</h4>
                <p>9:30-21:00 GMT</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
