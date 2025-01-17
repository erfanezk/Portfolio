import { createContext, useContext } from 'react';

const homeContext = createContext({
  isHovered: false,
  setIsHovered: (b) => {},
});

const useHomeContext = () => useContext(homeContext);

export { homeContext, useHomeContext };
