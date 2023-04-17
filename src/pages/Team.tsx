import React, { useState } from 'react';
import teamMembers from '../data/teamMember';
import MemberCards from './MemberCards';

const Team = () => {
  return (
    <div className=' min-h-screen container mx-auto max-w-6xl'>
      <div className='mx-auto mt-12 text-center space-y-4 max-w-md md:max-w-2xl mb-12'>
        <h3 className='text-xl font-semibold'>Our Team</h3>
        <p>
          We are a dynamic and dedicated team of professionals with diverse
          backgrounds and expertise, working towards a common goal of delivering
          high-quality results to our clients. Our team is passionate about
          solving complex problems and leveraging innovative technologies to
          drive business growth and success. With a collaborative and
          client-focused approach, we strive to exceed expectations and build
          long-lasting partnerships.
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center px-8 mb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>
          {teamMembers.map((member) => (
            <MemberCards key={member.id} cardItems={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
