import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { FiLink } from 'react-icons/fi'

const ContactMe = () => {
  return (
    <div className='mx-8 px-8 relative border-orange border rounded md:mx-0 md:px-16 pb-4 pt-10 mt-6'>
      <h3 className='absolute bg-orange text-white py-2 px-6 top-0 -mt-5 text-2xl font-bold uppercase'>Contact me</h3>
      <p className='text-center md:text-left'>
        <a href='https://linkedin.com/in/tuliofaria' title='LinkedIn Profile'>
          <FaLinkedin className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://github.com/tuliofaria' title='GitHub Profile'>
          <FaGithub className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://youtube.com/devplenocom' title='Youtube Channel'>
          <FaYoutube className='text-5xl md:text-6xl inline-block md:mr-6' />
        </a>
        <a href='https://devpleno.com' title='Blog'>
          <FiLink className='text-5xl md:text-6xl inline-block' />
        </a>
        <br />
        <span className='inline-block mt-4'>or drop a line: tuliofaria@gmail.com</span>
      </p>
    </div>
  )
}
export default ContactMe
