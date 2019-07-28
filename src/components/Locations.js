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
      <hr className="locations-hr" />

      <div className="locations-row-one">
        <div className="locations">
          <b>Harbor Greens</b>
          <br />
          5225 Olympia Drive NW
          Gig Harbor, Washington 98335
          <br />
          Phone: 253-851-7911
          <br />
          <iframe className="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.4300032805945!2d-122.58547018437984!3d47.30593747916585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491acd2b5d11819%3A0x36f2743a7c5a5f33!2s5225+Olympic+Dr+NW%2C+Gig+Harbor%2C+WA+98335!5e0!3m2!1sen!2sus!4v1564119080657!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen></iframe>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.855527681529!2d-122.35508968531533!3d47.21940907916089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490ff2165707ec9%3A0xec4060fb0c72781e!2sValley+Farms!5e0!3m2!1sen!2sus!4v1564119190252!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen></iframe>
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.86935608341!2d-122.30144078528451!3d47.316890715940715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54905780359d414b%3A0x2d6fe76d528cbfa7!2sMarlene&#39;s+Market+%26+Deli!5e0!3m2!1sen!2sus!4v1564353242368!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen></iframe>
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
          <br />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.8555276815296!2d-122.35508968438282!3d47.21940907916088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490ff2165707ec9%3A0xec4060fb0c72781e!2sValley+Farms!5e0!3m2!1sen!2sus!4v1564353061228!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className="locations">
          <b>AA Meats</b>
          <br />
          5116 111th Street SW
          Lakewood, WA 98499
          <br />
          Phone: 253-588-7979
          <br />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.0865840349757!2d-122.5075875852919!3d47.15615862697985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54910122a25516bd%3A0xef47ec259a4b5516!2sAA+Meats%2C+Inc!5e0!3m2!1sen!2sus!4v1564353174284!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen></iframe>
          <br />
        </div>
        <div className="locations">
          <b>Harbor Greens</b>
          <br />
          2620 Bridgeport Way W
          University Place Washington 98466
          <br />
          Phone: 253-460-2901
          <br />
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.9946913762637!2d-122.54000488528818!3d47.23624972148257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5491aae6c6a33437%3A0x6f77a7ef9c1b7d03!2sHarbor+Greens!5e0!3m2!1sen!2sus!4v1564353349320!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen></iframe>
          <br />
        </div>
      </div>
      <div className="last-location">
       <b> H&L Produce – Lakewood Store</b>
        <br />
        7320 Lakewood Drive W
        Lakewood, WA 98467
        <br />
        Phone: 253-471-1830
        <br />
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86687.66842609967!2d-122.60785682929055!3d47.236348561588784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54910061e9442429%3A0x2b93a586b08d8157!2sH+%26+L+Produce!5e0!3m2!1sen!2sus!4v1564353409539!5m2!1sen!2sus" width="600" height="450" frameborder="0" allowfullscreen></iframe>
        <br />
      </div>

      <Footer />
    </div>
  )
}

export default Locations;