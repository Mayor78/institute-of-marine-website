import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className='text-center max-w-[600px] mx-auto'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>Subscribe <span className='text-Teal'>Newsletter</span></div>
      </div>
      <motion.p 
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.3}}


       className='text-sm leading-7 text-gray'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Illum dolore harum tempora sequi in assumenda
         alias laborum ipsam dolor soluta, tenetur ipsa incidunt, 
        neque omnis! At deserunt quidem nemo officia? Lorem ipsum dolor 
        sit amet consectetur adipisicing elit.
         At, esse?
      </motion.p>
      <motion.form initial={{scale:2}} whileInView=
      {{scale: 1}}
      transition={{duration:0.3}}>
        <input type="text" 
        placeholder='Enter your email address' 
        className='sm:p-3 
        p-2 outline-none text-sm shadow-md sm:w-72 w-60'/>
        <button className='text-sm text-white 
        bg-Teal shadow-md font-bold sm:p-3 p-2'>Subscribe</button>
      </motion.form>
    </div>
  )
}

export default Contact
