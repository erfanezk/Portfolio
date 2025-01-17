import { Canvas } from '@react-three/fiber';
import React, { memo } from 'react';
import Stars from '@src/Pages/home/components/show/components/stars';
import { useHomeContext } from '@src/Pages/home/context/context';

const Show = () => {
  const { isHovered } = useHomeContext();

  return (
    <Canvas
      camera={{
        position: [23, 23, 23],
      }}
      shadows={true}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[100, 100, 100]} />
      {/* <axesHelper args={[8, 8, 8]} /> */}
      <Stars isHovered={isHovered} />
    </Canvas>
  );
};

export default memo(Show);
