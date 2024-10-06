import React from 'react'
import Dropdown from './Dropdown'
import { useState } from 'react'
import Rating from './Rating'
import Lowerheader from './Lowerheader'


function Header() {
  const [Language, setLanguage] = useState('English')

  return (
    <div className='bg-[#f0f0f0]'>
        <div className='flex justify-between mx-[15%]'>
      <div className="image my-1 flex">
      <img className='h-20' src="https://dmv-practice-test.com/images/meta/favicon.png" alt="DMV-image" />
      <div className='flex flex-col text-[#01508c] italic items-start'>
      <p className='text-5xl font-bold'>DMV</p>
      <p className='text-1xl font-bold'>Practice Test</p>
      </div>
      </div>
      <div className="rightSide my-5">
        <div className='map flex justify-items-center'>
      <span className="material-symbols-outlined mx-0 inline-block mt-5">
        travel_explore
      </span>
      <Dropdown country={true} testnumbers={false} textSize={"sm"} bottomDropdown={false} />
      <Dropdown country={false} testnumbers={true} />

      <div className="vehicleIcons mt-5 space-x-3">
      <span class="material-symbols-outlined border rounded hover:bg-blue-400 transition-all cursor-pointer p-[2px] border-none">
        directions_car
      </span>
      <span class="material-symbols-outlined border rounded hover:bg-blue-400 transition-all cursor-pointer p-[2px] border-none">
        two_wheeler
      </span>
      <span class="material-symbols-outlined border rounded hover:bg-blue-400 transition-all cursor-pointer p-[2px] border-none">
        local_shipping
      </span>
      </div>
      <div className='ml-5 mt-5'>
         <button className='language text-sm bg-[#EBE3F7] px-1.5 py-1 border rounded hover:border-black transition-all'>{Language}</button>
      </div>
     
      </div>
      </div>
      </div>
      <div className="images flex items-center justify-center mx-[15%] border rounded my-6 relative">
        
        <img className='w-[100%] h-auto brightness-50 border rounded' src="src/images/homepage.webp" alt="Home page image" />
       
        <div className='absolute text-3xl font-bold text-white left-28 top-40'>Pass the</div>
        <div>          
            <div  className='absolute text-3xl font-bold text-white left-28 top-40 my-6'>
             <Dropdown country={true} testnumbers={false} textSize={"5xl"} bottomDropdown={true} />
             <div className='text-white mt-20 mx-0 text-start text-sm'>And do it on your first try.</div>
             <div className="btn flex">
             <button className='text-base bg-red-600 py-3 px-10 my-4 rounded-md bottom-0 mx-0 hover:bg-red-700 transition-all'>Take free practice now</button>
             </div>
             
             </div>
             <div className='rating'>
              <Rating />
             </div>
             </div>

            
             <div className='absolute text-3xl font-bold text-white left-28 top-40 my-28'>DMV Test</div>
        
        <img className='absolute right-56 top-48' src="src/images/pass-dmv-test.png" alt="Image of Road" />
       
      </div>
      <div>
       <Lowerheader />
      </div>

    </div>
  )
}

export default Header
