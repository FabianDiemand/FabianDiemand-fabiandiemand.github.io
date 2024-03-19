import React, { useEffect } from 'react';

export const UnderConstruction = () => {
  return (
    <div className={`hero w-dvw h-dvh bg-wip bg-cover`}>
      <div className={`hero-content flex-col`}>
        <div className={`-space-x-40 rtl:space-x-reverse`}>
          <div className='avatar z-10'>
            <div className='w-56 rounded-full ring ring-orange-300 ring-offset-base-100 ring-offset-2'>
              <img src='./me.jpg' />
            </div>
          </div>
          <div className='avatar hover:z-20'>
            <div className='w-56 rounded-full ring ring-red-400 ring-offset-base-100 ring-offset-2'>
              <img src='./unicorn.jpg' />
            </div>
          </div>
        </div>
        <div className={`text-center`}>
          <h1 className={`text-white text-5xl font-bold`}>
            Under Construction! 🏗️
          </h1>
          <p className={`text-white text-xl py-6`}>
            Hello there! Thanks for your interest in me, my project or whatever
            brought you here. <br />
            <br />
            This page is currently under construction, but will soon be filled
            with all sorts of information about my projects, interests, hobbies
            and myself. Until then, feel free to check out my LinkedIn profile
            and have a look at my CV. For projects I'm working on in private or
            projects for studies, consider my GitHub profile.
          </p>
        </div>
        <div
          className={`w-[50%] flex flex-row tablet:flex-col tablet:space-y-4 justify-around text-white text-xl`}
        >
          <a
            href='https://www.linkedin.com/in/fabian-diemand/'
            className={'m-auto'}
            target='_blank'
          >
            <img src='./lin.png' className={`h-8 inline mr-1 my-auto`} />{' '}
            /fabian-diemand
          </a>
          <a
            href='https://github.com/FabianDiemand'
            className={'m-auto'}
            target='_blank'
          >
            <img src='./gh.png' className={`h-8 inline mr-2 my-auto`} />
            /FabianDiemand
          </a>
        </div>
      </div>
    </div>
  );
};
