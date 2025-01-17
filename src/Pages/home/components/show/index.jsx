import { Canvas } from '@react-three/fiber';
import React, { memo } from 'react';
import { useHomeContext } from '@src/Pages/home/context/context';
import * as THREE from 'three';
import Stars from '@src/Pages/home/components/show/components/stars';

const Show = () => {
  const { isHovered } = useHomeContext();

  return (
    <Canvas
      camera={{
        position: new THREE.Vector3(23, 23, 23),
      }}
      shadows={true}
    >
      <ambientLight intensity={0.1} />
      <directionalLight color="white" position={[100, 100, 100]} />
      <Stars isHovered={isHovered} />
    </Canvas>
  );
};

export default memo(Show);
