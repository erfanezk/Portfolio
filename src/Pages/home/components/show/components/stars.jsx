import React from 'react';
import Star from '@src/Pages/home/components/show/components/star';
import { generateUUID } from 'three/src/math/MathUtils';
import * as THREE from 'three';
import { useTexture } from '@react-three/drei';

const getRandomValue = (min, max, offset = 0) =>
  (Math.random() * (max - min) + min + offset) * (Math.random() < 0.5 ? -1 : 1);

const array = Array.from({ length: 15 }, (_, i) => {
  return {
    key: generateUUID(),
    scale: getRandomValue(0.3, 0.7),
    speed: {
      x: getRandomValue(0.001, 0.007),
      y: getRandomValue(0.001, 0.007),
      z: getRandomValue(0.001, 0.007),
      parent: getRandomValue(0.001, 0.007),
    },
    direction: Math.random() < 0.5 ? -1 : 1,
    position: new THREE.Vector3(
      getRandomValue(10, 17),
      getRandomValue(0, 17),
      getRandomValue(4, 17)
    ),
  };
});

const Stars = ({ isHovered }) => {
  const texture = useTexture('/portfolio/textures/1.jpg');

  return (
    <group>
      {array.map((object) => (
        <Star
          texture={texture}
          isHovered={isHovered}
          key={object.key}
          scale={object.scale}
          speed={object.speed}
          position={object.position}
          direction={object.direction}
        />
      ))}
    </group>
  );
};

export default Stars;
