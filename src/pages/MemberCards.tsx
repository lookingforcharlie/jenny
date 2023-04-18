import React from 'react';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { CiPhone } from 'react-icons/ci';
import { GrLinkedin } from 'react-icons/gr';
import { HiOutlineMail } from 'react-icons/hi';
import { RiWechatFill } from 'react-icons/ri';
import { SiFacebook } from 'react-icons/si';
import { teamMember } from '../data/types';

interface Props {
  cardItems: teamMember;
}

const MemberCards: React.FC<Props> = ({ cardItems }) => {
  const {
    name,
    id,
    title,
    imgUrl,
    bio,
    email,
    phone,
    wechat,
    website,
    linkedInLink,
    twitterLink,
    facebookLink,
  } = cardItems;
  return (
    <div className='border bg-slate-400 border-stone-900 rounded-md overflow-hidden shadow-lg py-6 px-12'>
      {/* card flex container */}
      <div className='flex flex-col items-center justify-between text-center space-y-4'>
        <img
          src={imgUrl}
          className='w-20 rounded-full mx-auto outline outline-serenity'
        />
        <div>
          <h3 className='font-semibold text-lg'>{name}</h3>
          <p className='font-thin text-sm'>{title}</p>
        </div>
        <p className='text-sm'>{bio}</p>
        {/* flex container for email and phone */}
        <div className='flex flex-col items-start  w-full'>
          <div className='flex items-center gap-3  w-full'>
            <div>
              <HiOutlineMail />
            </div>
            <div>{email}</div>
          </div>
          <div className='flex items-center gap-3  w-full'>
            <div>
              <CiPhone />
            </div>
            <div>{phone}</div>
          </div>
          <div className='flex items-center gap-3  w-full'>
            <div>
              <RiWechatFill />
            </div>
            <div>{wechat}</div>
          </div>
        </div>
        {/* container for social media icons*/}
        <div className='flex items-center space-x-8'>
          <a
            href={linkedInLink}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='linkedIn'
          >
            <GrLinkedin className='rounded-full text-2xl text-[#0e76a8]' />
          </a>
          <a
            href={twitterLink}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='twitter'
          >
            <AiFillTwitterCircle className='text-3xl text-[#11526c]' />
          </a>
          <a
            href={facebookLink}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='facebook'
          >
            <SiFacebook className='text-2xl text-[#3b5998]' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCards;
