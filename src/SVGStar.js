export default function SVGStar({
  color,
  borderColor,
  starsWidth,
  handleMouseMove,
  handleMouseOut,
  handleClick,
  identifier,
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 280"
      width={starsWidth}
      style={{
        fill: color,
        stroke: borderColor,
        strokeWidth: 20,
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseOut}
      onClick={handleClick}
      data-current={identifier}
    >
      <polygon points="141.5 23.47 170.5 109.47 260.5 109.47 188.5 163.47 214.5 249.47 141.5 198.47 68.5 249.47 94.5 163.47 22.5 109.47 112.5 109.47 141.5 23.47" />
    </svg>
  );
}
