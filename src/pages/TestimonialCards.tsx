import React from 'react';
import { FaQuoteLeft } from 'react-icons/Fa';
import { testimonialCardType } from '../data/types';

interface Props {
  testimonialCardItems: testimonialCardType;
}

const TestimonialCards: React.FC<Props> = ({ testimonialCardItems }) => {
  const { speaker, id, imgUrl, slogan, content, date } = testimonialCardItems;
  return (
    <div className=' bg-slate-400 shadow-lg py-6 px-8'>
      {/* flex container */}
      <div className='relative flex flex-col items-start justify-between space-y-6 '>
        <div className='flex flex-col gap-2'>
          <FaQuoteLeft className='text-4xl text-serenity' />
          <div className='text-xl font-bold'>{slogan}</div>
          <div className='font-thin'>{content}</div>
        </div>
        <div className='flex gap-6'>
          <img src={imgUrl} className='w-20 rounded-full text-left' />
          <div className='pt-3 '>
            <div>{speaker}</div>
            <div className='font-thin'>{date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
