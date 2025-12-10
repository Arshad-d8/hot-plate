import React from 'react'
import img1 from '../assets/images/category1.png'
import img2 from '../assets/images/category2.png'
import img3 from '../assets/images/category3.png'
import img14 from '../assets/images/category14.png'
export default function PopularDish() {
    return (
        <div className='py-40 mx-10 md:mx-30'>
            <h4 className=' text-red-500 text-center font-sans font-semibold'>
                CUSTOMER FAVORITES</h4>
            <h1 className='category-discription text-[45px]  text-black text-center font-sans font-bold'>
                Popular Categories
            </h1>
            <div class="categor grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                <div className=' flex flex-col py-9 text-center gap-3 items-center rounded-4xl text-xl  my-12 shadow-[0px_0px_20px_1px] shadow-black/10 mx-5 font-sans'>
                    <img className='w-[150px] h-[150px] bg-blue-200 p-2 rounded-full' src={img1} />
                    <h2 className='text-xl font-semibold font-sans '>Main Dish</h2>
                    <h3 className='text-gray-500 text-sm font-sans'>(86 dishes)</h3>
                </div>
                <div className=' flex flex-col py-9 text-center gap-3 items-center rounded-4xl text-xl  my-12 shadow-[0px_0px_20px_1px] shadow-black/10 mx-5 font-sans'>
                    <img className='w-[150px] h-[150px] bg-blue-200 p-2 rounded-full' src={img2} />
                    <h2 className='text-xl font-semibold font-sans '>Break Fast</h2>
                    <h3 className='text-gray-500 text-sm font-sans'>(12 break fast)</h3>
                </div>
                <div className=' flex flex-col py-9 text-center gap-3 items-center rounded-4xl text-xl  my-12 shadow-[0px_0px_20px_1px] shadow-black/10 mx-5 font-sans'>
                    <img className='w-[150px] h-[150px] bg-blue-200 p-2 rounded-full' src={img3} />
                    <h2 className='text-xl font-semibold font-sans '>Dessert</h2>
                    <h3 className='text-gray-500 text-sm font-sans'>(48 dessert)</h3>
                </div>
                <div className=' flex flex-col py-9 text-center gap-3 items-center rounded-4xl text-xl  my-12 shadow-[0px_0px_20px_1px] shadow-black/10 mx-5 font-sans'>
                    <img className='w-[150px] h-[150px] bg-blue-200 p-2  rounded-full' src={img14} />
                    <h2 className='text-xl font-semibold font-sans '>Browse All</h2>
                    <h3 className='text-gray-500 text-sm font-sans'>(255 items)</h3>
                </div>
            </div>
            <div>

            </div>

        </div>
    )
}
