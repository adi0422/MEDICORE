import React from 'react'
import { assets } from '../assets/assets'

const footer = () => {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
          {/*--Left Section--*/}
          <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w2/3 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores harum, voluptatem mollitia saepe enim voluptatum non iste totam culpa, voluptas deleniti assumenda fuga quod repellendus impedit aperiam dolores autem? Quasi.</p>
          </div>
          {/*--Center Section --*/}
          <div>
              <p className='text-x1 font-medium mb-5'>Company</p>
              <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
          </div>
          {/*--Left Section--*/}
          <div>
              <p className='text-x1 font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+9116156115645</li>
                <li>medicore.health@gmail.com</li>
              </ul>
          </div>
    </div>
    <div>
         {/*--Copy Right Text--*/}
         <hr />
         <p className='py-5 text-sm text-center'>Copyright 2024@ Medicore - All Right Rserved.</p>
    </div>
  </div>
  )
}

export default footer
