

import React, { useState } from 'react';
import SVGStar from './SVGStar';
import Gradient from './Gradient';

let defaultProps = {
  options: {
    name: 'half-grad',
    numOfStars: 5,
    starsWidth: 30,
    color: "green",
    bgColor: "white",
    borderColor: "green",
    scoreColor: "inherit",
    showText:true
  },
  handleScore: (score) => { console.log(score) }
}



export default function StarRating({ options, handleScore }) {
  const [currentStar, setCurrentStar] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [isFullStar, setIsFullStar] = useState(false);

  const arrOfStars = [];
  const {
    name,
    numOfStars,
    starsWidth,
    color,
    bgColor,
    borderColor,
    scoreColor,
    showText
  } = options;

  for (let i = 1; i <= numOfStars; i++) arrOfStars.push(i);

  const handleMouseMove = (ev) => {
    setIsFullStar(
        ev.pageX <
        ev.currentTarget.getBoundingClientRect().x +
          ev.currentTarget.getBoundingClientRect().width / 2
          ? false
          : true
    );
    setCurrentStar(parseInt(ev.currentTarget.dataset.current));
  };

  const handleMouseOut = (ev) => {
    setCurrentStar(0);
  };

  const handleClick = (ev) => {
    let score = isFullStar ? currentStar : currentStar - 0.5;

    setCurrentScore(score);
    handleScore(score);
  };

  return (
    <div onMouseLeave={handleMouseOut}>
      <Gradient name={name} color={color} bgColor={bgColor} />
      {arrOfStars.map((x) => {
        return (
          <SVGStar
            key={x}
            identifier={x}
            color={
              x < currentStar
                ? color
                : x == currentStar
                ? isFullStar
                  ? color
                  : `url(#${name})`
                : bgColor
            }
            bgColor={bgColor}
            borderColor={borderColor}
            starsWidth={starsWidth}
            handleMouseMove={handleMouseMove}
            handleClick={handleClick}
          />
        );
      })}

      {showText ? (<div style={{ fontFamily: "Arial", fontSize: "15px", color: scoreColor }}>
        Rating: {currentScore}
      </div>) : null}
    </div>
  );
}



StarRating.defaultProps = defaultProps;
