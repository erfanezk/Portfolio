import React from 'react';
import { useHomeContext } from '@src/Pages/home/context/context';

function InteractiveText() {
  const { setIsHovered, isHovered } = useHomeContext();
  console.log('isHovered', isHovered);

  return (
    <div className="realtive cursor-pointer h-full">
      <div
        onPointerLeave={() => {
          setIsHovered(false);
        }}
        onPointerOver={() => {
          setIsHovered(true);
        }}
        style={{
          WebkitTextStroke: `2px black`,
        }}
        className="absolute  md:text-[4rem] drop-shadow-2xl  font-extrabold whitespace-nowrap tracking-widest -translate-y-1/2 text-white left-1/2 top-1/2 -translate-x-1/2 uppercase "
      >
        i
        <span
          className={''}
          style={{
            WebkitTextStroke: `2px ${!isHovered ? '#5bccf6' : 'red'}`,
          }}
        >
          {isHovered ? 'solve' : 'seek'}
        </span>
        problems
      </div>
    </div>
  );
}

export default InteractiveText;
