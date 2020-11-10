import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <div className="container">
        <h2 className="Footer-header">Cool Story Bro © </h2>
        <div className="Footer-icon-box">
          <h4 className="Footer-icon-text">
            <i className="Footer-icon las la-mobile fa-2x"></i>
            On your mobile
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon lab la-facebook la-2x"></i>
            On facebook
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon lab la-instagram la-2x"></i>
            On instagram
          </h4>
          <h4 className="Footer-icon-text">
            <i className="Footer-icon las la-envelope la-2x"></i>
            Contact us
          </h4>
        </div>
        <div className="Footer-copyright">
          <p className="Footer-copyright-text">Copyright© 2020 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
