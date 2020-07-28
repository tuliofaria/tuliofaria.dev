import React from 'react'

const Footer = ({ currentDate }) => {
  return (
    <div>
      <p className='text-center my-8 py-4 border-t-2'>
        This website was built during Fullstack Master classes. We used NextJS + SSR (Server Side Rendering) + Vercel (as platform)<br />
        You can find the source-code of this website at:
        <br />
        <a href='https://github.com/tuliofaria/tuliofaria.dev'>https://github.com/tuliofaria/tuliofaria.dev</a>
      </p>
      <p className='text-center my-8 py-4 border-t-2'>Latest version: {currentDate}</p>
    </div>
  )
}
export default Footer
