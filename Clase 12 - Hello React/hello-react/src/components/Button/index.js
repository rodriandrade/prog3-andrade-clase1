import React from 'react';

const Button = props =>{

    const { caption } = props

    return (
          <button className="button colorBtn"> 
          {caption} 
          </button>
      );
    }
    
 export default Button;