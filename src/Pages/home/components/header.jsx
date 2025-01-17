import React from 'react';

const Header = () => {
  return (
    <header className="p-8 px-12  w-full  z-40 absolute top-0 left-0  ">
      <nav>
        <ul className="flex ">
          <li className="flex cursor-cell justify-center items-center">
            <div className={'cursor-pointer  hover:scale-110 mr-4'}>
              <img
                style={{ width: '40px', height: '40px' }}
                src="/portfolio/textures/piece.png"
                alt="one piece"
              />
            </div>
            <div className="text-2xl group flex  text-black tracking-wider uppercase">
              <div className="text-primary-lighter  font-bold  ">E</div>
              <span className="text-secondary-main"> rfan</span>
              <span className="mx-1"></span>
              <div className="text-primary-lighter font-bold ">E</div>
              <span className="text-secondary-main"> zkat</span>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
