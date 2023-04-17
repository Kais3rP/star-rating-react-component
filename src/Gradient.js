import React from 'react';

export default function Gradient({ name, color, bgColor }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 0 0"
      width={0}
      height={0}
    >
      <defs>
        <linearGradient id={name} x1="0" x2="100%" y1="0" y2="0">
          <stop offset="50%" stopColor={color} />
          <stop offset="50%" stopColor={bgColor} />
        </linearGradient>
      </defs>
    </svg>
  );
}
