import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Data from '../Data';
// IMAGES
import BoldBeef from '../media/bold-beef.png';
import RoyalPork from '../media/royal-pork.png';
import SavoryPoultry from '../media/savory-poultry.png';
import PintoBeans from '../media/bbqpintobeans.png';
import RedBeans from '../media/bbqredbeans.png';
import BundleOne from '../media/bundle-one.png';
import BundleTwo from '../media/bundle-two.png';
import Shirt from '../media/bbq-shirt.png'

import '../styles/Products.css'

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: 0
    }
  }

  // handleClick() {
  //   this.setState({ price: })
  // }
  render() {
    return(
      <div>
        <Navbar />
        <a name='seasonings'><div className="products-title">Seasonings</div></a>
        <div className="products-container">
          <div>
            <img className="seasonings-image" src={BoldBeef} alt="Mr. Texas Glorious Garlic Pinto Beans" />
            <div className="seasonings-description">
              {Data.spices.boldBeef.title}
            </div>
            <hr className="product-break" />
            <div className="seasonings-price">
              ${Data.spices.boldBeef.price}
            </div>
          </div>
  
          <div >
            <img className="seasonings-image" src={RoyalPork} alt="Mr. Texas Radiant Red Beans" />
            <div className="seasonings-description">
              {Data.spices.royalPork.title}
              </div>
            <hr className="product-break" />
            <div className="seasonings-price">
              ${Data.spices.royalPork.price}
              </div>
          </div>
  
          <div >
            <img className="seasonings-image" src={SavoryPoultry} alt="Mr. Texas Radiant Red Beans" />
            <div className="seasonings-description">
              {Data.spices.savoryPoultry.title}
              </div>
            <hr className="product-break" />
            <div className="seasonings-price">
              ${Data.spices.savoryPoultry.price}
              </div>
          </div>
        </div>
  
        <a name="beans"><div className="products-title">Beans</div></a>
        <div className="products-container">
          <div>
          <img className="beans-image" src={PintoBeans} alt="Mr. Texas Glorious Garlic Pinto Beans" />
            <div className="beans-description">
              {Data.beans.garlicPinto.title}
            </div>
            <hr className="product-break"/>
            <div className="beans-price">
              ${Data.beans.garlicPinto.price}
            </div>
            {/* <button className="purchase-button">add to cart</button> */}
          </div>
  
          <div>
            <img className="beans-image" src={RedBeans} alt="Mr. Texas Radiant Red Beans" />
            <div className="beans-description">
              {Data.beans.radiantRed.title}
              </div>
            <hr className="product-break" />
            <div className="beans-price">
              ${Data.beans.radiantRed.price}
              </div>
          </div>
        </div>
  
        <div className="products-title">Bundles</div>
        <div className="products-container">
          <div>
            <img className="bundle-one-image" src={BundleOne} alt="Mr. Texas Glorious Garlic Pinto Beans" />
            <div className="product-title">
              {Data.beans.garlicPinto.title}
            </div>
            <hr className="product-break" />
            <div className="bundle-one-price">
              ${Data.beans.garlicPinto.price}
  
            </div>
          </div>
  
          <div className="bundle-two">
            <img className="product-image" src={BundleTwo} alt="Mr. Texas Radiant Red Beans" />
  
            <div className="product-title">
              Radiant Red Beans
              </div>
            <hr className="product-break" />
            <div className="product-price">
              $6.99
              </div>
          </div>
          
        </div>

        <a name='merchandise'><div className="products-title">Merchandise</div></a>
        <div className="products-container">
          <div>
            <img className="product-image" src={Shirt} alt="Mr. Texas Glorious Garlic Pinto Beans" />
            <div className="merchandise-description">
              {Data.merchandise.bbqShirt.title}
            </div>
            <hr className="product-break" />
            <div className="merchandise-price">
              {Data.merchandise.bbqShirt.price}
            </div>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

const styles= {
  productDescription: {
    fontSize: '30px'
  }
}
export default Products;