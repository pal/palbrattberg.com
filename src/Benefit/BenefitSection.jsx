import React from 'react'
import moneyHuman from '../assets/making-money.webp'
import ticked from '../assets/ticked.svg'

const benefitsData = [
  'Understand the strengths and weaknesses of your teams',
  "Run great 1-on-1's",
  'Recruit awesome developers',
  'Manage upward to drive real company impact',
  'Balance hands-on vs hands-off mode',
  'Align your teams around shared values and purpose',
  'Setup a great process and organization to collaborate effectively with Product and Design',
  'How to communicate Roadmaps and Timelines',
  'Have difficult conversations with team members',
  'Run impactful post-mortems to build a more resilient product and organization'
]

function BenefitSection () {
  return (
    <div className='max-w-5xl mx-auto pb-10 lg:py-5 px-10 flex flex-col gap-y-10 md:flex-row items-center justify-center gap-x-10 py-5'>
      <div className='left-text lg:w-1/2 flex flex-col gap-y-3.5'>
        <h3 className='text-[#27392A] font-bold text-xl md:text-2xl lg:text-3xl flex items-center'>
          With decades of wide & deep experience and a history of impact-focused
          coaching I help you
        </h3>
        {benefitsData.map((benefit, index) => (
          <div
            key={'benefit_' + index}
            className='flex items-center gap-x-3 mt-3'
          >
            <div className='rounded-full w-8'>
              <img className='h-5 w-5' src={ticked} alt='ticked' />
            </div>
            <div className='flex flex-col gap-y-2'>
              <p className='font-semibold'>{benefit}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='right-image lg:w-1/2'>
        <div className='money-human'>
          <img src={moneyHuman} alt='running human' />
        </div>
      </div>
    </div>
  )
}

export default BenefitSection
