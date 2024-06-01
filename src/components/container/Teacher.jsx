import React from 'react'
import Tom from "../../assets/Tom.png"
import wills from '../../assets/willSmith.png'
import { accordions } from '../../Data'
import Accordion from './Accordion'
import { motion } from 'framer-motion'
const Teacher = () => {
  return (
    <div className='section' id='teacher'>
      <div className='grid sm:grid-cols-2 
       place-items-center gap-8'>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] 
          text-[1.5rem] mb-5'>
            Become <span className='text-Teal'> An Instructor</span> <br /> Of Our
            Platform
          </div>
          <motion.p 
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration: 2}}
          className='text-leading-7 text-gray mb-5'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsam blanditiis debitis
            quis dolorum inventore? Repudiandae delectus commodi
            quae tenetur deleniti fuga nesciunt. Dolor repellendus
            temporibus ratione, voluptate obcaecati nesciunt facere!
          </motion.p>
          <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold 
          '>
            Start Teaching
            </button>
        </div>
        <motion.div 
        initial={{height:0}}
        whileInView={{height:"auto"}}
        transition={{duration: 2}}
        className='p-4 md:w-3/4 sm:row-start-1 bg-Teal'>
          <img src={Tom} alt="" />
        </motion.div>
        <div className='pl-5'>
          <div className='font-bold sm:text-[1.875rem] 
          text-[1.5rem] mb-5'>
            Become <span className='text-Teal'> An Instructor</span> <br /> Of Our
            Platform
          </div>
          <motion.p 
            initial={{scale:0}}
            whileInView={{scale:1}}
            transition={{duration: 2}}

            className='text-leading-7 text-gray mb-5'>
            Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Ipsam blanditiis debitis
            quis dolorum inventore? Repudiandae delectus commodi
            quae tenetur deleniti fuga nesciunt. Dolor repellendus
            temporibus ratione, voluptate obcaecati nesciunt facere!
          </motion.p>
          <button className='py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold 
          '>
            Get Started
            </button>
        </div>
        <motion.div 
        initial={{height:0}}
        whileInView={{height:"auto"}}
        transition={{duration: 1}}
        className='p-4 md:w-3/4 bg-Teal '>
          <img src={wills} alt="" />
        </motion.div>
      </div>
      <div className='text-center my-8 font-bold sm:text-[1.875em] text-[1.5rem] '>
        Frequently <span className='text-Teal'>Asked Question</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map(accordion =>{
          return <Accordion key={accordion.id} {...
            accordion}/>
        })}
      </div>
    </div>
  )
}

export default Teacher
