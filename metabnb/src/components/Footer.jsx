import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer--base">
        <div><img className="footer--logo" src="/footer-logo.svg" /></div>
        <div className="footer--links">
        <a className="footer-svg" href="#"><img src="/facebook-f.svg" /></a>
        <a className="footer-svg" href="#"><img src="/twitter.svg" /></a>
        <a className="footer-svg" href="#"><img src="/instagram.svg" /></a>
        <p className="copyright">&copy; 2022 Metabnb</p>
        </div>
      </div>
      <div className="footer--text">
        <h4 className="footer--header">Community</h4>
        <p>
          <a>NFT</a>
        </p>
        <p>
          <a>Tennis</a>
        </p>
        <p>
          <a>Linkedln</a>
        </p>
        <p>
          <a>Discord</a>
        </p>
      </div>
      <div className="footer--text">
        <h4 className="footer--header">Places</h4>
        <p>
          <a>Castle</a>
        </p>
        <p>
          <a>Farms</a>
        </p>
        <p>
          <a>Beach</a>
        </p>
        <p>
          <a>Learn more</a>
        </p>
      </div>
      <div className="footer--text">
        <h4 className="footer--header">About us</h4>
        <p>
          <a>Road map</a>
        </p>
        <p>
          <a>Creators</a>
        </p>
        <p>
          <a>Career</a>
        </p>
        <p>
          <a>Contact us</a>
        </p>
      </div>
    </footer>
  );
}
