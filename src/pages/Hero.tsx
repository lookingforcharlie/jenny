import React from 'react';
import bgImage from '../assets/gta.webp';

const heroBG = {
  backgroundImage: `url(${bgImage})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  // opacity: 0.5,
};
const Hero = () => {
  return (
    <div className='min-h-screen relative' style={heroBG}>
      {/* container */}

      <div className='border-4 border-serenity p-12 absolute top-10 left-10 max-w-md md:max-w-2xl text-2xl text-slate-900 bg-white opacity-60'>
        We are one of the best, some says we are the best, the best of the best
        real estate agent in the whole Ontario, some say in the whole Canada.
      </div>
    </div>
  );
};

export default Hero;
