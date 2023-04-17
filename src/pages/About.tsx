import React from 'react';

const About = () => {
  return (
    <div className='relative min-h-screen flex flex-col'>
      <div className='bg-slate-700 text-center pt-20 pb-56 text-6xl text-[#fef1de]'>
        Our Story
      </div>
      <div className='relative -top-40 flex flex-col items-center justify-between space-y-6 max-w-6xl mx-auto px-6 -mb-24'>
        <img src='/assets/realestate_1.jpg' className='shadow-lg' />
        <p className='text-left text-[#fef1de] max-w-2xl pt-4'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sit
          possimus repudiandae quibusdam magnam ad. Expedita, at velit? Est,
          nesciunt repudiandae! Doloribus perspiciatis, dolorum tempore rem
          pariatur quibusdam blanditiis veniam itaque ab velit tempora animi
          incidunt quae! Consequatur quos itaque sapiente. Repellendus
          laudantium deserunt impedit corrupti cupiditate dolores obcaecati
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sit
          possimus repudiandae quibusdam magnam ad. Expedita, at velit? Est,
          nesciunt repudiandae! Doloribus perspiciatis, dolorum tempore rem
          pariatur quibusdam blanditiis veniam itaque ab velit tempora animi
          incidunt quae! Consequatur quos itaque nihil possimus repudiandae
          quibusdam magnam ad. Expedita, at velit? Est, nesciunt repudiandae!
          Doloribus perspiciatis, dolorum tempore rem pariatur quibusdam
          blanditiis veniam itaque ab velit tempora animi incidunt quae!
          Consequatur quos itaque nihil.
        </p>
      </div>

      {/* part 2 - our mission*/}
      <div className='bg-[#fef1de] flex flex-col items-center justify-between md:flex-row'>
        <img
          src='/assets/realestate_2.jpg'
          className='shadow-lg w-full md:w-1/2 md:p-8'
        />
        <div className='p-8 flex flex-col items-start justify-center py-12 md:w-1/2'>
          <h3 className='text-4xl font-bold'>Our Mission</h3>
          <p className='text-left pt-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sit
            possimus repudiandae quibusdam magnam ad. Expedita, at velit? Est,
            nesciunt repudiandae! Doloribus perspiciatis, dolorum tempore rem
            pariatur quibusdam blanditiis veniam itaque ab velit tempora animi
            incidunt quae! Consequatur quos itaque sapiente. Repellendus
            laudantium deserunt impedit corrupti cupiditate dolores obcaecati
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sit
          </p>
        </div>
      </div>

      {/* our future */}
      <div className='bg-slate-200 flex flex-col-reverse items-center justify-between md:flex-row'>
        <div className='p-8 flex flex-col items-start justify-center py-12 md:w-1/2'>
          <h3 className='text-4xl font-bold'>Our Future</h3>
          <p className='text-left pt-4'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sit
            possimus repudiandae quibusdam magnam ad. Expedita, at velit? Est,
            nesciunt repudiandae! Doloribus perspiciatis, dolorum tempore rem
            pariatur quibusdam blanditiis veniam itaque ab velit tempora animi
            incidunt quae! Consequatur quos itaque sapiente. Repellendus
            laudantium deserunt impedit corrupti cupiditate dolores obcaecati
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sit
          </p>
        </div>
        <img
          src='/assets/realestate_3.jpg'
          className='shadow-lg w-full md:w-1/2 md:p-8'
        />
      </div>
    </div>
  );
};

export default About;
