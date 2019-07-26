import React from 'react';
import '../styles/Footer.css'

function Footer() {
  return (
    <div>
      <hr className="footer-hr" />
      <div className="back-to-top-container"><a href="#top" className="back-to-top">Back to Top</a></div>
      <div className="copyright">
        Copyright 2017 © Mr. Texas Smokehouse BBQ.
      <div className="terms-conditions">
        Terms | Conditions
      </div>
      </div>
    </div>
  )
}

export default Footer;