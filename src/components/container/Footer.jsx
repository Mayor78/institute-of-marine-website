import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitterX, BsPinterest
} from 'react-icons/bs';
import { motion } from 'framer-motion';
const Footer = () => {
  return (
    <motion.div initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 3 }}
      className="bg-Teal p-10">
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2
       grdi-cols-1 place-items-start gap-8 text-white'>
        <div>
          <div className='font-bold mb-6'>Get Started </div>
          <p className='text-sm leading-7'>
            Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Id libero doloremque possimus,
            nemo eos dolores neque! Nemo itaque delectus aut!
          </p>
        </div>
        <div>
          <div className='font-bold mb-6'>Services</div>
          <div className='flex flex-col gap-4'>
            <a href="" className='text-sm hover:underline'>Tutoring</a>
            <a href="" className='text-sm hover:underline'>Mentorship</a>
            <a href="" className='text-sm hover:underline'>Guidiance</a>
            <a href="" className='text-sm hover:underline'>Others</a>
          </div>
        </div>
        <div>
          <div className='font-bold mb-6'>Company</div>
          <div className='flex flex-col gap-4'>
            <a href="" className='text-sm hover:underline'>About Us</a>
            <a href="" className='text-sm hover:underline'>Contact Us</a>
            <a href="" className='text-sm hover:underline'>Terms & Conditions</a>
            <a href="" className='text-sm hover:underline'>Privacy Policy</a>
          </div>
        </div>
        <div>
          <div className='font-bold mb-6'>Follow Us </div>
          <div className='text-sm mb-4'>
             maritime.institute@gmail.com
          </div>
          <div className='text-sm'>+2347084718050</div>
          <div className='flex gap-4 mt-4'>
          <a href="" className='hover:scale-110 text-xl'>
              <BsFacebook />
            </a>
            <a href="" className='hover:scale-110 text-xl'>
              <BsInstagram />
            </a>
            <a href="" className='hover:scale-110 text-xl'>
              <BsTwitterX />
            </a>
            <a href="" className='hover:scale-110 text-xl'>
              <BsPinterest />
            </a>
          </div>
        </div>

      </div>

    </motion.div>
  )
}
export default Footer
