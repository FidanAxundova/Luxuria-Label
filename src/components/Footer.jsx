import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
import { LuFacebook } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { BsSpotify } from "react-icons/bs";
import "./footer.scss"
import { Link } from 'react-router-dom';
import { FaPhone } from "react-icons/fa6";


const Footer = () => (
    <footer>

        <div className="footer-in">
            <h1>LUXURIA LABEL</h1>
            <div className="UMUMI">
            <div className="Contact">
                <form>
                    <input type='email' placeholder='E-mail' required />
                    <FaArrowRight  className='arrow-icon'/>
                </form>
                <div className="iconlar">
                    <GrInstagram  className='icon'/>
                    <LuFacebook  className='icon'/>
                    <FaXTwitter  className='icon'/>
                    <BsSpotify  className='icon'/>
                </div>

                <div className="zeng">
                    <p>Customers Service: 7/24 </p>
                    <p>Contact Us:</p>
                  <div className="umumii">
                  <FaPhone /> 
                    <p>+994-10-110-11-10</p>
                  </div>
                </div>
              
            </div>

            <div className="linkler">
             < Link>DOLCE&GABBANA</Link>  
             < Link>HERMES</Link>  
             < Link>GUCCI</Link> 
             < Link>PRADA</Link> 
             < Link> LACOSTE</Link>  
             < Link>VERSACE</Link>  
            
       


                
            </div>
            </div>

            <div className="copyright">
                <div className="copyright-in">
                © All rights reserved. Fidan Akhundova
                </div>


                    



                </div>

        </div>
    </footer>
)

export default Footer
