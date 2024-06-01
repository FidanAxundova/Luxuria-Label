import React from 'react'

import { Link } from 'react-router-dom'
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbBasketHeart } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
import "./header.scss"

const Header = () => {
  return (
    <header>
      <nav>
        <div className="top">
            <div className="top-left">
                <p>DOLCE&GABBANA</p>
                <p>HERMES</p>
                <p>GUCCI</p>
                <p>PRADA</p>
                <p>LACOSTE</p>
                <p>VERSACE</p>
                
               



            </div>
            <div className="top-right">
              <div className="poisk"> <FiSearch/></div>
              <div className="fav"><FaRegHeart  /></div>
              <div className="korzina"><TbBasketHeart /></div>
              <div className="log"><GoPerson /></div>
            </div>
        </div>
      
    
  
          

        
        <div className="middle">
          <h1>LUXURIA LABEL</h1>
        </div>
      </nav>
    </header>
  )
}

export default Header
