import React, { useMemo, useState } from 'react';
import { homeContext } from '@src/Pages/home/context/context';

function HomeProvider({ children }) {
  const [isHovered, setIsHovered] = useState(false);

  const values = useMemo(() => {
    return { isHovered: isHovered, setIsHovered };
  }, [isHovered, setIsHovered]);

  return <homeContext.Provider value={values}>{children}</homeContext.Provider>;
}

export default HomeProvider;
