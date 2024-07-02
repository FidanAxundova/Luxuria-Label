import React from 'react'
import versaceVideo from "../../assets/versace.mov";
import "./versace.scss";
import versaceJson from "./json/versace.json";
import { SlBasket } from "react-icons/sl";



const Versace = () => {
  return (
    <section className="versace">
    <div className="versace-in">
      <video src={versaceVideo} autoPlay loop muted></video>
    </div>
    <div className="smt">
      {versaceJson.smt.map((product, id) => (
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

export default Versace
