import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Contact.css';

class Contact extends React.Component {
  render() {
    return(
      <div>
        <Navbar />
          <h1>Bowse through our products and click below to place your order. We Will respond promptly via email and have your order ready in no time!</h1>
        <a class="email-link" href="mailto:yohanes2o6@gmail.com">place order here</a>
        <Footer />
      </div>
    )
  }
}

export default Contact