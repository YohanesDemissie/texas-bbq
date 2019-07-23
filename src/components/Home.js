import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

import '../styles/Home.css'

function Home() {
  return (
    <div className="blue-background">
      <Navbar />
        <div className="title">Where Southern Comfort Begins</div>
        <hr className="home-hr" />
        <div className="home-container">
          <div className="home-text">Our products consist of the necessary foundations for your favorite southern dishes. From our famous hickory seasonings to our smokey savoury snacks, we put of every bit of southern flavor in every bite. </div>
        </div>

        <hr className="home-hr" />

        <div className="products-shortcut">
          <div className="seasonings">
              Seasonings
            <div className="seasonings-img"></div>
          </div>

          <a href='/products/#chapter4'><div className="beans">
            Beans
            <div className="beans-img"></div>
          </div>
          </a>

          <div className="apparel">
            Apparel
            <div className="apparel-img" alt="apparel"></div>
          </div>
        </div>

      <hr className="home-hr" />

      <Footer />
    </div>
  )
}

export default Home;