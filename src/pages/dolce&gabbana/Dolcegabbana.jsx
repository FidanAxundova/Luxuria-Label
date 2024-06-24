import React from 'react'
import dolceVideo from "../../assets/dgvideo.mov"
import "./dolce.scss"
import dolceJson from "../../pages/json/dolcegabbana.json"


const Dolcegabbana = () => {
  




  return (

    <section className='dolce-gabbana'>
      
        <div className="dolcegabbana-in">
            <video src={dolceVideo} autoPlay loop muted></video>

         <div className="sumkalar">
          {
            dolceJson.sumka.map((product,id) => (
              <div className="product-qutu">
               <div className="product-qutu-in">
               <div className="top-hisse">
                  <img src={product.productImage} alt='product Image' />

                </div>
                <div className="bottom-hisse">
                  <h5>{product.productName}</h5>
                  <div className='qiymetler'>
                    <div className="new-price">{product.newPrice}$</div>
                    <div className="old-price">{product.oldPrice}$</div>


                  </div>
                  
                  <p className="sizes">
                    {product.size}
                  </p>


                </div>
               </div>

              </div>


            ))
          }

         </div>

        </div>







    </section>



    
  )
}

export default Dolcegabbana
