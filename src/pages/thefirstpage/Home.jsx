import React from 'react'
import bgPhoto from "../../assets/images/gucci2.jpeg"
import jsonstatham from "../../assets/images/jas3.jpeg"
import rosie from "../../assets/images/rosie.jpeg"
import prada1 from "../../assets/images/prada1.png"
import guccibag from "../../assets/images/guccibag.png"
import dgbag from "../../assets/images/dgbag.jpeg"
import jwdg from "../../assets/images/jwdg.png"
import hermesjw from "../../assets/images/hermesjw.png"
import dgjw from "../../assets/images/dgjw.png"
import children from "../../assets/images/CHILD3.jpeg"
import guccichild from "../../assets/images/guccichild.jpeg"
import menprada from "../../assets/images/menprada.jpeg"
import pradamen from "../../assets/images/pradamen.jpeg"
import dgwomen from "../../assets/images/dgwomen.jpeg"
import versacebella from "../../assets/images/versacebella.jpeg"


import "./home.scss"
import Mybutton from '../../components/button/Mybutton'

const Home = () => {
  return (
    <div className='home'>
      <div className="home-in">

        <div className="thefirst-section">
            <img src={bgPhoto} alt="bg photo" />
        </div>

        <div className="thesecond">
            <h1>FASHION WEEK</h1>
            <div className="thesecond-in">
                <div className="qutu">
                <img src={jsonstatham} />
                <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
                </div>
                <div className="qutu">
                <img src={rosie} />
                <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
                </div>
            </div>
        </div>

        



<div className="uchisse">
        <h2>It's Time to Glaaam</h2>
        <div className="uchisse-in">
          

          

       

        </div>
        

      </div>

      <div className="women">
        <h5>WOMEN'S COLLECTION</h5>
        <div className="women-in">
          <div className="box5">
          <img src={versacebella} />
          <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
          </div>
          <div className="box5">
          <img src={dgwomen} />
          <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
          </div>
        </div>
      </div>

      <div className="children">
        <h3>CHILDREN'S COLLECTION </h3>
        <div className="children-in">
         

          <div className="box">
        <img src={children} />
        <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
        </div>
        
        
        <div className="box">
        <img src={guccichild} />
        <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
        </div>


          
        </div>
      </div>


      <div className="men">
        <h4>MEN'S COLLECTION</h4>
        <div className="men-in">
          <div className="box3">
          <img src={pradamen} />
          <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
          </div>

          <div className="box3">
          <img src={menprada} />
          <Mybutton fidanButonText={"Shop Now"} en={"200px"}/>
          </div>
        </div>
      </div>

     
    

      </div>


     
    
    </div>
  )
}

export default Home
