import React from 'react'
import sparcbuy from "../assest/sparcby.png"

const Logo = ({ w = 100, h = 100 }) => {
    return (
      <div>
        <img src={sparcbuy} width={w} height={h} />
      </div>
    )
  }
  
  export default Logo;
  