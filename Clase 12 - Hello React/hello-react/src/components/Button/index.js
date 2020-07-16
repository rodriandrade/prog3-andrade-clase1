import React from 'react';

const Button = props =>{

    const { caption } = props

    return (
          <button className="button is-primary"> 
          {caption} 
          </button>
      );
    }
    
 export default Button;