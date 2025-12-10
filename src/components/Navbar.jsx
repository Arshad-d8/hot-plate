import React, { useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const [show, setShow] = useState(false)
    return (
        <div className='fixed w-full bg-white/90'>
            <div className={`bg-white h-full p-5  w-1/2 fixed md:hidden transform transition-transform duration-300 ${show ? "translate-x-0" : "-translate-x-full"}`}>
                <div className=' place-items-end'>
                    <IoClose onClick={()=>setShow(!show)} className='text-3xl' />
                </div>
                
            </div>

            <div className='mx-5 md:mx-20 py-5'>
                <div className='flex justify-between  items-center'>
                    <p className=' text-3xl font-extrabold text-black font-sans'><span className='m-0 font-extrabold text-green-500'>H</span>OT <span className='m-0 text-green-500'>P</span>LATE</p>

                    <nav className="hidden md:block ">
                        <ul className='flex font-semibold md:gap-x-5 lg:gap-x-10 text-xl justify-between'>
                            <li className='hover:text-green-500'><a href="#" className="active">Home</a></li>
                            <li className='hover:text-green-500'><a href="#">Menu</a></li>
                            <li className='hover:text-green-500'><a href="#">Services</a></li>
                            <li className='hover:text-green-500'><a href="/about">About</a></li>
                        </ul>
                    </nav>

                    <a className='hidden md:block' href="#">
                        <button className='bg-green-500 px-10 py-2 rounded-full text-white cursor-pointer'>Contact</button>
                    </a>
                    <div className='md:hidden text-center'>
                        <div className=''>
                            <TiThMenu onClick={() => setShow(!show)} className='text-3xl' />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
