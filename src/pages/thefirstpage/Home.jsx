import React from 'react'
import bgPhoto from "../../assets/images/gucci2.jpeg"
import jsonstatham from "../../assets/images/jas3.jpeg"
import rosie from "../../assets/images/rosie.jpeg"
import prada1 from "../../assets/images/prada1.jpeg"
import guccibag from "../../assets/images/guccibag.jpeg"
import dgbag from "../../assets/images/dgbag.jpeg"
import jwdg from "../../assets/images/jwdg.jpeg"
import hermesjw from "../../assets/images/hermesjw.jpeg"
import dgjw from "../../assets/images/dgjw.jpeg"

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
        <div className="box">
        <img src={prada1} />
        </div>
        <div className="box">
        <img src={guccibag} />
        </div>
        <div className="box">
        <img src={dgbag} />
        </div>
        <div className="box">
        <img src={jwdg} />
        </div>
        <div className="box">
        <img src={hermesjw} />
        </div>
        <div className="box">
        <img src={dgjw} />
        </div>
        

        </div>
        





      </div>
    

      </div>


     
    
    </div>
  )
}

export default Home
