import React from 'react'
import signupIcon from '../assets/sign-up-icon.svg'
import smileIcon from '../assets/smile-icon.svg'
import linekdIcon from '../assets/linked-icon.svg'

const servicesData = [
  {
    title: '100% Async',
    description:
      'No meetings, no calendar pressure. Everything happens on your timeline. ',
    image: signupIcon
  },
  {
    title: 'Your topics, always',
    description:
      'Select topic whenever you want, to whatever you want. We stay on it until you\'re happy.',
    image: smileIcon
  },
  {
    title: 'Flexible by default',
    description:
      'Pause or cancel at any time. I\'m here to help you when it makes sense for you, not force you into my flow.',
    image: linekdIcon
  }
]

const Card = ({ title, description, image }) => (
  <div className='services-card-box bg-white border border-slate-500/20 rounded-xl p-6 flex flex-col items-center justify-center gap-y-6'>
    <div className='h-16 w-16 flex items-center justify-center bg-[#F4EDFF] rounded-full'>
      <img className='h-8 w-8 bg-transparent' src={image} alt={title} />
    </div>
    <div className='card-content flex flex-col items-center justify-center gap-y-2'>
      <h3 className='text-xl lg:text-2xl font-bold text-[#27392A]'>{title}</h3>
      <p className='text-sm text-[#7c7c7c] font-medium text-center'>{description}</p>
    </div>
  </div>
)

const Services = () => (
  <div className='service-section'>
    <div className='services max-w-5xl mx-auto px-0 pt-28 lg:py-10 justify-center items-center'>
      <h3 className='text-3xl lg:text-[34px] font-bold max-w-xs sm:max-w-4xl lg:max-w-2xl sm:mx-auto text-center leading-[1.15]'>
        I help new and seasoned Engineering Leaders level up and get a true ally
        in their corner
      </h3>
      <h2 className='text-xl lg:text-[24px] max-w-xs sm:max-w-4xl lg:max-w-2xl sm:mx-auto text-center leading-[1.15] mt-3'>
        With decades of wide & deep experience and a history of impact-focused
        coaching I help you
      </h2>
      <div className='services-card grid px-10 lg:px-14 xl:px-2 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12 lg:py-14'>
        {servicesData.map((service, index) => (
          <Card key={index} {...service} />
        ))}
      </div>
    </div>
  </div>
)

export default Services
