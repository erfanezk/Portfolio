import React from 'react';
import ELetter from '@src/Pages/home/components/letters/e';
import RLetter from '@src/Pages/home/components/letters/r';
import FLetter from '@src/Pages/home/components/letters/f';
import ALetter from '@src/Pages/home/components/letters/a';
import NLetter from '@src/Pages/home/components/letters/n';

function Letters() {
  return (
    <div className={'flex  items-end justify-center'}>
      <ELetter />
      <RLetter />
      <FLetter />
      <ALetter />
      <NLetter />
    </div>
  );
}

export default Letters;
