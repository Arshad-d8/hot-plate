import React from 'react'
import img from "../assets/images/footer-left.png"

export default function About() {
    return (
        <div className='mx-10 md:mx-10 md:my-40'>
            <div className="flex flex-col-reverse md:flex-row justify-evenly ">
                <div className="bg-red700  ">
                    <img className='sm:h-[600px] sm:w-[400px]' src={img} />
                </div>
                <div className="font-sans flex flex-col gap-y-4 justify-center ">
                    <h4 className='font-sans font-semibold text-red-600 text-lg'>
                        TESTIMONIALS
                    </h4>
                    <h1 className='text-5xl font-bold '>What Our Customers<br />Say About Us</h1>
                    <p className='text-lg text-gray-500 leading-10'>"I had the pleasure of dining at foodi last night, and<br />i'm still raving about the experience! the
                        attention to<br />detail in presentation and service was impeccable"</p>
                </div>
            </div>
        </div>
    )
}