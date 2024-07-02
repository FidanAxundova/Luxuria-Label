import React, { useEffect, useRef, useState } from 'react'

import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbBasketHeart } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import { FaBars } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import "./header.scss"

const Header = () => {
  const [overlay,setOverlay] = useState(false)
  const openOverlay = ()=>{
    //arrow function yaziliw qaydasi

    setOverlay(true) 



  }

  const closeOverlay = ()=>{
    setOverlay(false)
  }
  const navRef = useRef()   //hooklar(use) 
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setSticky(true);
        // Optionally, you can add an alert for testing purposes
       
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 

  
  
  return (
    <header ref={navRef} className={isSticky ? "stiki" : ""}>
      <nav >
        <div className="top">
            <div className="top-left">
                <Link to={"/dolce&gabbana"}>Dolce&gabbana</Link>
                <Link to={"/hermes"}>Hermes</Link>
                <Link to={"/gucci"}>Gucci</Link>
                <Link to={"/prada"}>Prada</Link>
                <Link to={"/versace"}>Versace</Link>
                
               



            </div>
            <div className="top-right">
              <div className="poisk"> <FiSearch/></div>
              <div className="fav"><FaRegHeart  /></div>
              <div className="korzina"><TbBasketHeart /></div>
              <div className="log"><GoPerson /></div>
            </div>
           
        </div>
        <div className="bars-icon" onClick={openOverlay}><FaBars /></div>

      
  {
    overlay && (  //java hissesi
      <div className="overlay">
        <div className="top-left">
                <Link to={"/dolce&gabbana"}>Dolce&gabbana</Link>
                <Link to={"/hermes"}>HERMES</Link>
                <Link to={"/gucci"}>Gucci</Link>
                <Link to={"/prada"}>Prada</Link>
                <Link to={"/versace"}>Versace</Link>
                
               



            </div>
            <div className="top-right">
              <div className="poisk"> <FiSearch/></div>
              <div className="fav"><FaRegHeart  /></div>
              <div className="korzina"><TbBasketHeart /></div>
              <div className="log"><GoPerson /></div>
            </div>

            <div className="close-icon" onClick={closeOverlay}>< IoIosCloseCircleOutline /></div>
        </div>
      
    )
  }
  
          

        
        <div className="middle">
          <h1>LUXURIA LABEL</h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
