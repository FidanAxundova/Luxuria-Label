import React from "react";
import hermesVideo from "../../assets/hermes.mov";
import "./hermes.scss";
import hermesJson from "./json/hermes.json";
import { SlBasket } from "react-icons/sl";

const Herme = () => {
  return (
    <section className="hermes">
      <div className="hermes-in">
        <video src={hermesVideo} autoPlay loop muted></video>
      </div>

      <div className="parfume">
        {hermesJson.parfume.map((product, id) => (
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

      <div></div>
    </section>
  );
};

export default Herme;
