import React from 'react'
import Navbar from '../Navbar'
import FormSection from './FormSection'

function HeroSection () {
  return (
    <div>
      <Navbar />
      <div className='main-hero-section relative py-4 px-6'>
        <div className='main-hero-container max-w-5xl  mx-auto text-center flex flex-col gap-y-5 justify-center items-center'>
          <h2 className='font-bold text-[#27392A] text-5xl lg:text-7xl max-w-3xl mx-auto rounded-5xl'>
            Level up as Engineering Leader, on{' '}
            <span className='purple-underline-2'>your</span> schedule
          </h2>
          <p className='max-w-lg text-sm lg:text-lg mx-auto'>
            Get an experienced, battle-tested engineering leader in your corner
            to give you an edge in your career.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
