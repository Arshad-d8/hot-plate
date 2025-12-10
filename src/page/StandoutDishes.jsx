import React from 'react'
import img1 from '../assets/images/egg-salad.png'
import img2 from '../assets/images/fattoush-salad.png'
import img3 from '../assets/images/vegetable-salad.png'


export default function StandoutDishes() {
  return (
    <div className='mx-10 md:mx-30 '>
        <h4 className='text-red-500 font-bold font-sans'>SPECIAL DISHES</h4>
        <h1 className='text-black text-5xl font-sans font-bold'>Standout Dishes<br/>From Our Menu</h1>
        <div class="grid grid-cols-1 gap-y-10 md:grid-cols-3 my-10">
            <div className='text-center p-5 rounded-3xl font-sans mx-5 shadow-[0px_0px_10px_2px] shadow-black/20'>
                <img src={img1}/>
                <h2 className='text-left text-2xl font-bold'>Fattoush Salad</h2>
                <h3 className='text-gray-500 text-left'>Description of the item</h3>
            </div>
            <div className='text-center p-5 rounded-3xl font-sans mx-5 shadow-[0px_0px_10px_2px] shadow-black/20'>
                <img src={img2}/>
                <h2 className='text-left text-2xl font-bold'>Vegetable Salad</h2>
                <h3 className='text-gray-500 text-left'>Description of the item</h3>
            </div>
            <div className='text-center p-5 rounded-3xl font-sans mx-5 shadow-[0px_0px_10px_2px] shadow-black/20'>
                <img src={img3}/>
                <h2 className='text-left text-2xl font-bold'>Egg Salad</h2>
                <h3 className='text-gray-500 text-left'>Description of the item</h3>
            </div>
        </div>
      
    </div>
  )
}
