

import React, { useState } from 'react';
import { SVGStar } from './SVGStar';

let defaultProps = {
  options: {
    name: 'half-grad',
    numOfStars: 5,
    starsWidth: 30,
    color: "green",
    bgColor: "white",
    borderColor: "green",
    scoreColor: "inherit"
  },
  handleScore: (score) => { console.log(score) }
}



export default function StarRating({ options, handleScore }) {
  const [currentStar, setCurrentStar] = useState(-1);
  const [currentScore, setCurrentScore] = useState(0);

  const arrOfStars = [];
  const { name, 
    numOfStars,
    starsWidth,
    color,
    bgColor,
    borderColor,
    scoreColor
   } = options;
   
  for (let i = 0; i < numOfStars; i++)
    arrOfStars.push(i);


  const handleMouseMove = (ev) => {
   ev.currentTarget.style.fill = ev.pageX <
      ev.currentTarget.getBoundingClientRect().x +
      ev.currentTarget.getBoundingClientRect().width / 2
      ? `url(#${name})`
      : color;

    setCurrentStar(ev.currentTarget.dataset.current)
  }

  const handleMouseOut = (ev) => {
    setCurrentStar(-1);
  }

  const handleClick = (ev) => {
   
    let score = ev.pageX <
      ev.currentTarget.getBoundingClientRect().x +
      ev.currentTarget.getBoundingClientRect().width / 2 ? 0.5 : 1;
    
      setCurrentScore(parseInt(ev.currentTarget.dataset.current) + score);
      handleScore(parseInt(ev.currentTarget.dataset.current) + score);
  
  }

  return (
    <div onMouseLeave={handleMouseOut}>
      <Gradient name={name} color={color} bgColor={bgColor} />
      {arrOfStars.map((x, i) => 
        <SVGStar key={i} identifier={i} color={i <= currentStar ? color : bgColor} bgColor={bgColor} borderColor={borderColor} starsWidth={starsWidth} handleMouseMove={handleMouseMove} handleClick={handleClick} />
 )}
<div style={{ 'fontFamily': 'Arial', 'fontSize': '15px', 'color': scoreColor }}>Rating: {currentScore}</div>
    </div>
  )
}


StarRating.defaultProps = defaultProps;
