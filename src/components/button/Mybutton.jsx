import React from 'react'
import "./mybutton.scss"

const Mybutton = ({fidanButonText,en}) => {
  return (
    <div className='my-button' style={{width: en}}>
      <p>{fidanButonText}</p>
    </div>
  )
}

export default Mybutton
