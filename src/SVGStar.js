
import React from 'react';

export function SVGStar ({ name,color, bgColor, borderColor, starsWidth,handleMouseMove, handleMouseOut, handleClick, identifier}){
    return (
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283 268.01" width={starsWidth} style={{'fill':color, 'stroke':borderColor, 'stroke-width':20, 'cursor': 'pointer'}}
     onMouseMove={handleMouseMove} onMouseOut={handleMouseOut} onClick={handleClick} data-current={identifier}>
    <defs>
     <linearGradient id={name} x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stop-color={color}/>
          <stop offset="50%" stop-color={bgColor}/>
      </linearGradient>
      </defs>
    <polygon points="141.5 23.47 170.5 109.47 260.5 109.47 188.5 163.47 214.5 249.47 141.5 198.47 68.5 249.47 94.5 163.47 22.5 109.47 112.5 109.47 141.5 23.47" />
  </svg>
    
    )
    
  }