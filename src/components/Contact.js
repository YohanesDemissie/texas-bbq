import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Contact.css';

class Contact extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
        <div className="contact-container">
          <div className="contact-description">Bowse through our products page and click below to place your order. Please write a detailed invoice with product name(s), quantity, and store location. Our inventory specialists will respond promptly to confirm the details and have your order ready in no time!</div>
          <div className="link-container">
            <a className="email-link"
              href="mailto:yohanes2o6@gmail.com
              ?subject=Mr.Texas Online Order
              &body=Company Name:
              %0A%0A Address:
              %0A%0A Products and Quantity:
              %0A%0A Additional Note:
              %0A%0A %0A%0A We value each and every customer and thank you for supporting our humble family business. Our inventory specialists will get back to you as soon as possible to help you complete your order. Thank you and have a wonderful day!">
              Place Order Here
            </a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact