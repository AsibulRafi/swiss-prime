import React, { useEffect } from "react";
import securityBg from "../assets/securiyBg.png";
export default function Security() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="docs">
      <div className="docs__heading">
        <h2>Security</h2>
      </div>
      <div className="docs__content">
        <div className="docs__content-flex">
          <div className="docs__content-flex-box">
            <h2>Security Policies</h2>
            <p>
              In No Name 1, the security of funds and our client's information
              is our topmost priority. Our security team is continually
              improving our end-to-end security measures, bettering auditing
              processes, and reducing the ‘attack surface' of our
              infrastructure. Please note that we cannot disclose too many
              details of the security measures implemented on the platform for
              security and proprietary reasons.
            </p>
            <h2>Two-factor authentication (2FA)</h2>
            <p>
              You can add an extra layer of security to your account and protect
              the various sensitive operations such as logging in, generating
              API keys, and withdrawing. Configure two-factor authentication
              using Google Authenticator, Twilio, or a U2F Security Key.
            </p>
            <ul>
              <li>
                Use a physical Security Key to take advantage of the
                ultra-secure FIDO Universal 2nd Factor (U2F) open authentication
                standard.
              </li>
              <li>
                Advanced verification tools to monitor the integrity of your
                account
              </li>
              <li>Login data is saved and analyzed for unusual activity.</li>
              <li>
                An intelligent system detects IP Address changes to prevent
                session hijacking.
              </li>
              <li>
                Email notifications report logins and include a link to
                instantly freeze your account if you suspect malicious activity.
              </li>
              <li>Limit access to your account based on IP address.</li>
            </ul>
          </div>
          <div className="docs__content-flex-box">
            <h2>User Account Protection</h2>
            <p>
              Some of the security measures highlighted below are in place by
              default, and others can be activated based on the security level
              you need.
            </p>
            <h2>User Account Protection</h2>
            <p>
              Some of the security measures highlighted below are in place by
              default, and others can be activated based on the security level
              you need.
            </p>
            <h2>Storage of funds</h2>
            <p>
              We keep all funds on so-called cold accounts. This means they are
              not directly connected to exchange servers directly. This ensures
              that no third-parties can ever get access to these funds.
              furthermore, all accounts are properly encrypted.
            </p>
            <h2>Up-to-date systems to host the platform</h2>
            <p>
              Our servers network is protected using always up-to-date software
              and the best possible practices.
            </p>
            <h2>Automatic backup of the database once a day</h2>
            <p>
              Once a day, the database of the platform is backed up, encrypted
              and compressed as an archive.
            </p>
          </div>
        </div>
        <img src={securityBg} alt="kycBg" />
        <div className="docs__content-flex">
          <div className="docs__content-flex-box">
            <h2>Withdrawals protection</h2>
            <ul>
              <li>
                Security system monitors withdrawals by IP address and other
                user behavior patterns, triggering manual admin inspection on
                withdrawals that appear unusual.
              </li>
              <li>
                Withdrawal confirmation step that is immune to malicious browser
                malware.
              </li>
              <li>
                Define an address whitelist to ensure no withdrawals can go
                anywhere else.
              </li>
              <li>Limit access to your account based on IP address.</li>
            </ul>
            <h2>Advanced API key permissions</h2>
            <ul>
              <li>
                Create API keys with advanced read/write permissions on a
                per-feature basis.
              </li>
              <li>
                Unleash the full power of the platform through our REST and
                WebSockets APIs.
              </li>
              <li>Email Encryption with OpenPGP</li>
              <li>
                Want more protection? Encrypted email communication (PGP) adds
                an extra layer of privacy and security.
              </li>
            </ul>
          </div>
          <div className="docs__content-flex-box">
            <h2>Duplication of backup data automatically</h2>
            <p>
              As soon as a new backup is ready (database, log files,…), it is
              sent to others servers in several physical locations.
            </p>
            <h2>Protection from DDoS attacks</h2>
            <p>
              We are protected by automatic Distributed Denial of Service
              protection to ensure that trading cannot be halted by outside
              attacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
