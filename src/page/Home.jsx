import React from 'react'
import img from '../assets/images/home-right.png'
import PopularDish from './PopularDish'
import StandoutDishes from './StandoutDishes'
import About from './About'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>

    <div className='mx-10 pt-10 md:mx-30'>
         <div className=" flex flex-col-reverse gap-y-5 md:flex-row justify-between">
            <div className="font-sans text-center md:text-left font-extrabold content-center text-4xl md:text-5xl w-full">
                <h1 className='leading-15'>Dive into Delights<br/>Of Delectable <span className='text-green-500'>Food</span></h1>
                <p className='py-5 leading-7 text-[16px] text-gray-600 font-light'>Where Each Plate Weaves a Story of Culinary <br/>Mastery and Passionate Craftsmanship</p>
                <a href="#"><button className='bg-green-500 text-xl px-5 py-2 rounded-full text-white cursor-pointer m-0'>Order Now</button></a>
            </div>
            <div className="md:w-full">
                <img src={img}/>
            </div>
        </div>
      
    </div>
    
    </div>
  )
}
