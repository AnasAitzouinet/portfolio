import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div id='home' className='bg-white text-black h-[80vh] mx-5 border-white rounded-xl mt-4 shadow-lg shadow-purple-400 rid grid sm:grid-cols-2 grid-rows-2 overflow-hidden'>
        <section className='p-5  sm:p-10'>
        <h1 className='text-7xl sm:py-10  sm:text-[6rem]'>Hello <br /> I&apos;m Anas</h1>
        <p className='text-2xl text-purple-600'>Full stack Developer </p>
        <p className='py-2 '>Ahoy there! Front-end, back-end—I handle it all like a pro! Let&apos;s team up and build some digital magic! ✨💻 Let the coding journey begin! 🚀😄</p>
        </section>
        <section className= 'pt-5 sm:p-16 animate-move '>
            <Image src='/hero.png' alt='programmer' width={600} height={600} />
        </section>
    </div>
  )
}

export default Hero