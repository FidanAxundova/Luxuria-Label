import React from "react";
import gucci1Video from "../../assets/gucci1.mov";
import "./gucci.scss";
import gucciJson from "./json/gucci.json";
import { SlBasket } from "react-icons/sl";
const Gucci = () => {
  return (


        
        <section className="gucci">
      <div className="gucci-in">
        <video src={gucci1Video} autoPlay loop muted></video>
      </div>
      <div className="glasses">
        {gucciJson.glasses.map((product, id) => (
          <div className="product-qutu">
            <div className="product-qutu-in">
              <div className="top-hisse">
                <img src={product.productImage} alt="product Image" />
              </div>
              <div className="bottom-hisse">
                <div className="sebet-icon">
                  <SlBasket className="icon"/>
                </div>
                <h5>{product.productName}</h5>
                <div className="qiymetler">
                  <div className="new-price">{product.newPrice}$</div>
                  <div className="old-price">{product.oldPrice}$</div>
                </div>

                <p className="sizes">{product.size}</p>
              </div>
            </div>
          </div>
        ))}
      </div>



    </section>
   
  )
}

export default Gucci
