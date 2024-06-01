import React from 'react'
import about from '../../assets/About.jpeg'

const About = () => {
  return (
    <div className='section' id='about'>
      <div className='grid md:grid-cols-2 gap-8
      place-items-center'>
        <div className='border-[3px] border-solid
        border-Teal rounded-lg'>
          <img src={about} alt="" className='p-4 '/>
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem]
          text-[1.5rem] mb-5'>
            We Provide the <br /> best <span className='text-Teal'>
              courses in our school</span>
              <p className='text-sm text-gray leading-7 mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Eum cum nihil dicta facere architecto reiciendis 
                 ipsam iste ad quas eaque ea ab, repellendus quae autem. 
                 Repudiandae dicta neque in laboriosam?
                </p>
                <button  className='py-3 px-6 text-sm border
                border-solid border-gray rounded-lg
                font-bold'> Know More</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default About
