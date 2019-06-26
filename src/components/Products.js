import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
// IMAGES
import BoldBeef from '../media/bold-beef.png';
import RoyalPork from '../media/royal-pork.png';
import SavoryPoultry from '../media/savory-poultry.png';
import PintoBeans from '../media/bbqpintobeans.png';
import RedBeans from '../media/bbqredbeans.png';
import BundleOne from '../media/bundle-one.png';
import BundleTwo from '../media/bundle-two.png';

import '../styles/Products.css'

function Products() {
  return(
    <div>
      <Navbar />
      <div className="products-title">Seasonings</div>
      <div className="products-container">
        <div>
          <img className="product-image" src={BoldBeef} alt="Mr. Texas Glorious Garlic Pinto Beans" />
          <div className="product-description">
            Garlic Pinto Beans
          </div>
          <hr className="product-break" />
          <div className="product-description">
            $6.99
          </div>
        </div>

        <div >
          <img className="product-image" src={RoyalPork} alt="Mr. Texas Radiant Red Beans" />
          <div className="product-description">
            Radiant Red Beans
            </div>
          <hr className="product-break" />
          <div className="product-description">
            $6.99
            </div>
        </div>

        <div >
          <img className="product-image" src={SavoryPoultry} alt="Mr. Texas Radiant Red Beans" />
          <div className="product-description">
            Radiant Red Beans
            </div>
          <hr className="product-break" />
          <div className="product-description">
            $6.99
            </div>
        </div>
      </div>

      <div className="products-title">Beans</div>
      <div className="products-container">
        <div>
        <img className="product-image" src={PintoBeans} alt="Mr. Texas Glorious Garlic Pinto Beans" />
          <div className="product-description">
            Garlic Pinto Beans
          </div>
          <hr className="product-break"/>
          <div className="product-description">
            $6.99
          </div>
        </div>

        <div>
          <img className="product-image" src={RedBeans} alt="Mr. Texas Radiant Red Beans" />
          <div className="product-description">
            Radiant Red Beans
            </div>
          <hr className="product-break" />
          <div className="product-description">
            $6.99
            </div>
        </div>
      </div>

      <div className="products-title">Bundles</div>
      <div className="products-container">
        <div>
          <img className="product-image" src={BundleOne} alt="Mr. Texas Glorious Garlic Pinto Beans" />
          <div className="product-description">
            Garlic Pinto Beans
          </div>
          <hr className="product-break" />
          <div className="product-description">
            $6.99
          </div>
        </div>

        <div className="bundle-two">
          <img className="product-image" src={BundleTwo} alt="Mr. Texas Radiant Red Beans" />

          <div className="product-description">
            Radiant Red Beans
            </div>
          <hr className="product-break" />
          <div className="product-description">
            $6.99
            </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Products;