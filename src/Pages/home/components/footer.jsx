import React from 'react';
import Typography from '@src/Components/typography';

function HomeFooter(props) {
  return (
    <footer className={'bg-black/80 p-10'}>
      <div className={'flex items-center justify-between'}>
        <a
          className={
            'text-primary-dark cursor-pointer capitalize underline underline-offset-4'
          }
          target={'_blank'}
          onClick={() => {
            console.log('geg');
          }}
          href={'https://www.linkedin.com/in/erfanezk/'}
          rel="noreferrer"
        >
          <Typography
            className={'text-secondary-darker cursor-pointer'}
            variant={'body'}
          >
            my linkedin
          </Typography>
        </a>

        <a
          className={
            'text-primary-dark cursor-pointer capitalize underline underline-offset-4'
          }
          target={'_blank'}
          onClick={() => {
            console.log('geg');
          }}
          href={'mailto:erfan.ezkat@gmail.com'}
          rel="noreferrer"
        >
          <Typography
            className={'text-secondary-darker cursor-pointer'}
            variant={'body'}
          >
            my email
          </Typography>
        </a>
      </div>
    </footer>
  );
}

export default HomeFooter;
