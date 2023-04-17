import React from 'react';
import testimonials from '../data/testimonials';
import TestimonialCards from './TestimonialCards';

const Testimonial = () => {
  return (
    <div className=' min-h-screen container mx-auto max-w-6xl'>
      <div className='mx-auto mt-12 text-center space-y-4 max-w-md md:max-w-2xl mb-12 border-b-2 border-serenity'>
        <h3 className='text-4xl font-semibold'>Testimonials</h3>
        <p className='text-2xl pb-4'>What our customers say ...</p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center px-8 mb-16'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {testimonials.map((testimonial) => (
            <TestimonialCards
              key={testimonial.id}
              testimonialCardItems={testimonial}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
