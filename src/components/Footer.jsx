import React from 'react'

export default function Footer() {
  return (
    <div className='mt-20 mb-10 border-t border-t-gray-200'>
        <div className="mx-10 md:mx-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[320px_1fr_1fr_1fr] gap-y-10 pt-10">
            <div className="flex flex-col gap-5">
                <p className='text-4xl md:text-5xl font-extrabold text-black font-sans'><span className='m-0 font-extrabold text-green-500'>H</span>OT <span className='m-0 text-green-500'>P</span>LATE</p>
                <p className='leading-7 text-lg  text-gray-500'>Savor the artistry where<br/>every dish is a cilinary<br/>masterpiece</p>
            </div>
            <div className="flex flex-col gap-y-5 md:justify-self-center">
                <h2 className='font-bold text-xl font-sans'>Useful links</h2>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">About us</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Events</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Blogs</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">FAQ</a>
            </div>
            <div className="flex flex-col gap-y-5 md:justify-self-center">
                <h2 className='font-bold text-xl font-sans'>Main Menu</h2>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Home</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Offers</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Menus</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Reservation</a>
            </div>
            <div className="flex flex-col gap-y-5 md:justify-self-center">
                <h2 className='font-bold text-xl font-sans'>Contact Us</h2>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Example@email.com</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">+64 958 248 966</a>
                <a className='decoration-none font- text-gray-500 text-lg  hover:text-green-500' href="#">Social media</a>
            </div>
        </div>
      
    </div>
  )
}
