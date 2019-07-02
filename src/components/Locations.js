import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/Locations.css';

function Locations() {
  return(
    <div>
      <Navbar />
      <div className="locations-title">
        Find a Store Near You
      </div>
      {/* <hr className="locations-line"/> */}
      <div className="locations-row-one">
        <div className="locations">
          <b>Harbor Greens</b>
          <br />
          5225 Olympia Drive NW
          Gig Harbor, Washington 98335
          <br />
          Phone: 253-851-7911
          <br />
        </div>
        <div className="locations">
          <b>Marlene’s Market & Deli</b>
          <br />
          2951 S 38th Street
          Tacoma, Washington 98409
          <br />
          Phone: 253-472-4080
          <br />
        </div>
        <div className="locations">
          <b>Marlene’s Market & Deli</b>
          <br />
          2565 S Gateway Center Place
          Federal Way, Washington 98003
          <br />
          Phone: 253-839-0933
          <br />
        </div>
      </div>

      <div className="locations-row-two">
        <div className="locations">
          <b>Valley Farms</b>
          <br />
          5728 River Road East
          Puyallup, WA 98371
          <br />
          Phone: 253-922-2520
        </div>
        <div className="locations">
          <b>AA Meats</b>
          <br />
          5116 111th Street SW
          Lakewood, WA 98499
          <br />
          Phone: 253-588-7979
        </div>
        <div className="locations">
          <b>Harbor Greens</b>
          <br />
          2620 Bridgeport Way W
          University Place Washington 98466
          <br />
          Phone: 253-460-2901
        </div>
      </div>
      <div className="last-location">
       <b> H&L Produce – Lakewood Store</b>
        <br />
        7320 Lakewood Drive W
        Lakewood, WA 98467
        <br />
        Phone: 253-471-1830
      </div>

      <Footer />
    </div>
  )
}

export default Locations;