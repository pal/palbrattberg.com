import React from 'react'
import Navbar from '../Navbar'
import FormSection from './FormSection'

const referencesData = [
  { logo: 'minna.png', name: 'Minna Technologies' },
  { logo: 'smspark.png', name: 'SMS Park / Inteleon' },
  { logo: 'piktiv.png', name: 'Piktiv' },
  { logo: 'acando.png', name: 'Acando' },
  { logo: 'sendify.png', name: 'Sendify' },
  { logo: 'speedledger.png', name: 'SpeedLedger' },
  { logo: 'bizscree.png', name: 'BizScreen' },
  { logo: 'peasy.png', name: 'Peasy.nu' }
]

function HeroSection () {
  return (
    <div>
      <div className='main-hero-section relative py-4 px-6'>
        <div className='main-hero-container max-w-5xl  mx-auto text-center flex flex-col gap-y-5 justify-center items-center'>
          <h2 className='font-bold text-[#27392A] text-5xl lg:text-7xl max-w-3xl mx-auto rounded-5xl'>
            Level up as Engineering Leader, on{' '}
            <span className='purple-underline-2'>your</span> schedule
          </h2>
          <p className='max-w-lg text-lg mx-auto'>
            Get an experienced, battle-tested engineering leader in your corner
            to give you an edge in your career.
          </p>
          <p className='max-w-lg text-lg mx-auto'>
            I will meet you where you are - starting out or 10+ years in the
            field
          </p>
          <ul className='list-disc max-w-2xl text-m lg:text-lg mx-auto'>
            <li>
              You will get a 100% personal, only-for-you video where I go over
              the topic, including stories from real life as well as things I've
              picked up from colleagues, mentors, conferences, books etc.{' '}
            </li>
            <li>
              I will break down the key points to consider in an easy-to-digest
              Q&A-type document
            </li>
            <li>
              You will get templates and checklists you can use right away in
              your life and work
            </li>
            <li>
              {' '}
              On many topics you will also get a list of more information such
              as books, blogs, videos that you can use to go deeper down the
              rabbit hole
            </li>
          </ul>
          <div className='testimonial-company flex flex-col gap-y-5 lg:gap-y-10 items-center justify-center py-5 lg:py-20'>
            <p className='text-base text-center text-slate-600/70 lg:text-xl font-medium px-20'>
              Satisfied customers at fast-paced companies
            </p>
            <div className='company-logo flex flex-row flex-wrap items-center mx-auto justify-center gap-x-10 gap-y-5'>
              {referencesData.map((reference, index) => (
                <img
                  key={index}
                  className='max-w-[100px] lg:max-w-[200px]'
                  src={'/ref/' + reference.logo}
                  alt={reference.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
