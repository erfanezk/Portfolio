import React, { useRef } from 'react';
import Star from '@src/Pages/home/components/show/components/star';
import { generateUUID } from 'three/src/math/MathUtils';

const getRandomValue = (min, max, offset = 0) =>
  (Math.random() * (max - min) + min + offset) * (Math.random() < 0.5 ? -1 : 1);

const randomPosition = () => [
  getRandomValue(10, 17),
  getRandomValue(0, 17),
  getRandomValue(4, 17),
];

const randomScale = () => getRandomValue(0.3, 0.7);

const randomSpeed = () => getRandomValue(0.001, 0.007);

const createSpeedObject = () => ({
  x: randomSpeed(),
  y: randomSpeed(),
  z: randomSpeed(),
  parent: randomSpeed(),
});

const array = Array.from({ length: 15 }, (_, i) => generateUUID());

const Stars = ({ isHovered }) => {
  const groupRef = useRef();

  return (
    <group ref={groupRef}>
      {array.map((key) => (
        <Star
          isHovered={isHovered}
          key={key}
          scale={randomScale()}
          speed={createSpeedObject()}
          position={randomPosition()}
          plusOrMinus={Math.random() < 0.5 ? -1 : 1}
        />
      ))}
    </group>
  );
};

export default Stars;
