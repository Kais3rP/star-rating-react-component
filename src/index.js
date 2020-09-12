
import React, { useState } from 'react';
import { SVGStar } from './SVGStar';

let defaultProps = {
    options: {
    name: 'half-grad',
    numOfStars: 5,
    starsWidth: 30,
    color: "green",
    bgColor:"white",
    borderColor: "green",
    scoreColor: "inherit"
  },
  handleScore: (score)=>{console.log(score)}
}


export default function StarRating({options, handleScore}){
  const [currentStar, setCurrentStar] = useState(-1);
  const [currentScore, setCurrentScore] = useState(0);
  
  let arrOfStars = [];
  let name = options.name;
  let numOfStars =  options.numOfStars;
  let starsWidth = options.starsWidth;
  let color= options.color;
  let bgColor= options.bgColor;
  let borderColor= options.borderColor;
  let scoreColor= options.scoreColor;
  for (let i = 0; i< numOfStars; i++) 
     arrOfStars.push(i);
  
  
  const handleMouseMove = (ev) => {
    
     if (
        ev.pageX <
        ev.currentTarget.getBoundingClientRect().x +
          ev.currentTarget.getBoundingClientRect().width / 2
      )
        ev.currentTarget.style.fill = `url(#${name})`;
      else ev.currentTarget.style.fill = color;
     
     setCurrentStar(ev.currentTarget.dataset.current)
  }
  
  const handleMouseOut = (ev) => {
   setCurrentStar(-1);
  }
  
  const handleClick = (ev) => {
     if (
        ev.pageX <
        ev.currentTarget.getBoundingClientRect().x +
          ev.currentTarget.getBoundingClientRect().width / 2
      ){
        setCurrentScore(parseInt(ev.currentTarget.dataset.current) + 0.5);
        handleScore(parseInt(ev.currentTarget.dataset.current) + 0.5);
     }
       else {
         setCurrentScore(parseInt(ev.currentTarget.dataset.current) + 1);
         handleScore(parseInt(ev.currentTarget.dataset.current) + 1);
       }
  }
 
  return (
    <>
      {arrOfStars.map( (x,i) => {
      if (i <= currentStar)
     return <SVGStar name={name} identifier={i} color={color} bgColor={bgColor} borderColor={borderColor} starsWidth={starsWidth} handleMouseMove={handleMouseMove} handleMouseOut={handleMouseOut} handleClick={handleClick}/>
     if (i > currentStar)
       return <SVGStar name={name}identifier={i} color={bgColor} bgColor={bgColor} borderColor={borderColor} starsWidth={starsWidth} handleMouseMove={handleMouseMove}  handleMouseOut={handleMouseOut} handleClick={handleClick}/>
    })}
      <div style={{'font-family':'Arial', 'font-size':'15px','color': scoreColor}}>Rating: {currentScore}</div>
      </>)
}
  

StarRating.defaultProps = defaultProps;
