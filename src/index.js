import { useState } from 'react';
import Gradient from './Gradient';
import SVGStar from './SVGStar';

const defaultProps = {
  options: {
    name: 'half-grad',
    numOfStars: 5,
    starsWidth: 30,
    color: 'green',
    bgColor: 'white',
    borderColor: 'green',
    scoreColor: 'inherit',
    showText: true,
  },
  handleScore: (score) => {
    console.log(score);
  },
};

export default function StarRating({ options, handleScore, ...props }) {
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
    showText,
  } = options;

  for (let i = 1; i <= numOfStars; i++) arrOfStars.push(i);

  const handleMouseMove = (ev) => {
    setIsFullStar(
      !(
        ev.pageX
        < ev.currentTarget.getBoundingClientRect().x
          + ev.currentTarget.getBoundingClientRect().width / 2
      ),
    );
    setCurrentStar(parseInt(ev.currentTarget.dataset.current));
  };

  const handleMouseOut = () => {
    setCurrentStar(0);
  };

  const handleClick = () => {
    const score = isFullStar ? currentStar : currentStar - 0.5;
    setCurrentScore(score);
    handleScore(score);
  };

  return (
    <div onMouseLeave={handleMouseOut} {...props}>
      <Gradient name={name} color={color} bgColor={bgColor} />
      {arrOfStars.map((x) => (
        <SVGStar
          key={x}
          identifier={x}
          color={
            x < currentStar
              ? color
              : x === currentStar
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
      ))}

      {showText ? (
        <div
          style={{ fontFamily: 'Arial', fontSize: '15px', color: scoreColor }}
        >
          Rating:
          {' '}
          {currentScore}
        </div>
      ) : null}
    </div>
  );
}

StarRating.defaultProps = defaultProps;
