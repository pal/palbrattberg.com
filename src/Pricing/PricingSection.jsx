import React, { useState } from 'react'
import pricingIcon from '../../src/assets/basic-price-icon.svg'
import checked from '../../src/assets/Check Circle Icon.svg'

function PricingSection () {
  const pricingData = [
    {
      id: 1,
      type: 'For individuals',
      name: 'Basic',
      description:
        'Show social proof notifications to increase leads and sales.',
      /* Pricing data on the top ☝ */
      includedFeatures: [
        'All analytics features',
        'Up to 250,000 tracked visits',
        'Normal support',
        'Up to 3 team members'
      ],
      price: '4,995',
      duration: '/month'
    }
    // Add more pricing options as needed
  ]

  return (
    <div className='max-w-3xl mx-auto pb-20 px-5 lg:px-0' id='pricing'>
      <div className='max-w-3xl flex flex-col gap-y-5 mx-auto'>
        <div className='flex w-fit mx-auto items-center justify-center rounded-full bg-[#D0E4FF] text-black py-[3px] px-2 lg:px-4 lg:py-1.5 font-semibold text-[10px] lg:text-xs'>
          <span>PRICING</span>
        </div>
        <h2 className='text-3xl lg:text-5xl px-5 font-bold w-fit mx-auto text-center lg:text-left'>
          Simple pricing 
        </h2>
        <p className='w-fit max-w-lg mx-auto text-center text-sm lg:text-base'>
          Many managers are able to get some budget for training or coaching. Spend your budget on something that is immediately useful for <b>you</b> to maximize your personal benefit!
          Cancel or pause at any time. 
        </p>
      </div>
      {pricingData.map(option => (
        <div
          key={option.id}
          className='pricing-card-container mt-10 flex flex-col lg:flex-row rounded-xl border border-slate-400/20'
        >
          <div className='left-pricing-section lg:w-1/2 p-10 flex flex-col gap-y-5 rounded-xl'>
            <div className='left-pricing-section__card flex items-center gap-x-4'>
              <div className='bg-[#ECEBFF] p-2 rounded-xl'>
                <img src={pricingIcon} alt='' />
              </div>
              <div>
                <p>{option.type}</p>
                <h3 className='font-bold text-xl text-[#170F49]'>
                  {option.name}
                </h3>
              </div>
            </div>
            <p>{option.description}</p>
            <div className='flex items-center gap-x-2'>
              <h3 className='font-bold text-5xl text-[#170F49]'>
                ${option.price}{' '}
                <span className='text-lg font-[400] text-[#6F6C90]'>
                  {option.duration}
                </span>
              </h3>
            </div>
            <button className='flex w-full items-center text-white justify-center rounded-full bg-[#6498DD] px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200'>
              <span>Get Started</span>
            </button>
          </div>
          <div className='right-section lg:w-1/2 bg-[#FFF4F2] p-10 rounded-br-xl flex items-center md:items-start justify-start lg:items-center lg:justify-center rounded-r-xl'>
            <div className='flex flex-col gap-y-3'>
              <p className='text-sm font-bold text-black'>What's included</p>
              {option.includedFeatures.map((feature, index) => (
                <div className='flex items-center gap-x-2' key={index}>
                  <img className='h-5 w-5' src={checked} alt='' />
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PricingSection
