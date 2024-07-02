import React from 'react'
import pradaVideo from "../../assets/prada.mov";
import "./prada.scss";
import pradaJson from "./json/prada.json";
import { SlBasket } from "react-icons/sl";
const Prada = () => {
  return (
    <section className="prada">
      <div className="prada-in">
        <video src={pradaVideo} autoPlay loop muted></video>
      </div>
      <div className="jew">
        {pradaJson.jew.map((product, id) => (
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

export default Prada
