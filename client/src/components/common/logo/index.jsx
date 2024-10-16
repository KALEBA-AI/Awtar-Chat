import React from 'react';
import AwtarLogo from '../../../assets/AwtarLogo.svg';
const Logo = () => {
  return (
    <div className="flex p-5  justify-start items-center gap-2">
     <img src={AwtarLogo} alt="Awtar Logo" width="32" height="32" />
      <span className="text-3xl font-semibold ">Awtar</span>
    </div>
  );
};

export default Logo;
