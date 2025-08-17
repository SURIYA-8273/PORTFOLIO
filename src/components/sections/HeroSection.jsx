import React from 'react'

export const HeroSection = () => {
  return (
    <div id='hero' className='flex flex-col md:flex-row justify-center items-center md:pt-40'>

      <div className='text-center md:w-1/2'>

        <h1 className='text-3xl mt-[40px] font-bold'>Hello , I'm suriya</h1>

        <h1 className='text-2xl mt-[10px] font-bold'>Full stack developer</h1>
        <p className='mt-[20px]'>Enthusiastic developer skilled in Flutter, React.js, and Node.js. I love building smooth user experiences and solving
          real-world problems with clean, efficient code.</p>
      </div>

      <div className=' relative mt-[40px] bg-white   w-[290px] h-[290px] shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-full hover:border-2 border-amber-300'>
        <img className='absolute inset-0 m-auto' src="/profile.jpeg" alt="" height={200} width={200} />
      </div>

    </div>
  )
}
