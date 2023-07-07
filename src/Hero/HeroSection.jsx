import React from 'react'
import Navbar from '../Navbar'
import FormSection from './FormSection'

function HeroSection () {
  return (
    <div>
      <Navbar />
      <div className='main-hero-section relative py-14 px-7 md:px-10 xl:px-0'>
        <div className='main-hero-container max-w-5xl pb-44 lg:pb-24 mx-auto text-center flex flex-col gap-y-5 justify-center items-center'>
          <h2 className='font-bold text-[#27392A] text-5xl lg:text-7xl max-w-3xl mx-auto rounded-5xl'>
            Level up as Engineering Leader, on{' '}
            <span className='purple-underline-2'>your</span> schedule
          </h2>
          <p className='max-w-lg text-sm lg:text-lg mx-auto'>
            Get an experienced, battle-tested engineering leader in your corner
            to give you an edge in your career.
          </p>
        </div>
        <div className='form-section-container absolute -bottom-36 lg:-bottom-10 left-0 right-0 max-w-5xl p-10 mx-auto py-20'>
          <FormSection />
        </div>
      </div>
    </div>
  )
}

export default HeroSection
