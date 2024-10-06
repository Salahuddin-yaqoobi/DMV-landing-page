import React from 'react'


function Lowerheader() {

  
  return (
    <div className='my-32 mx-[15%] h-[400px]'>
        
       <h2 className='text-5xl font-bold'>Take "Fail" out of your vocabulory</h2>
       <div className='my-9 flex justify-between'>
       <div className='flex'>
        <div className='bg-white text-center w-11 h-5 p-11 flex items-center justify-center border rounded-2xl'>
            <div className='bg-gray-200 rounded-full p-2 text-red-600'>
        <span class="material-symbols-outlined">
            content_copy
        </span>
        </div>
        </div>
        <div className='flex flex-col mx-5'>
        <div className='text-start text-lg font-semibold'><p>You'll pass</p></div>
        <div className='text-start'><p>The numbers don’t lie: our customers have a <br /> 99.2% pass rate.</p></div>
        </div>
       </div>
       <div className="flex">
        <div className='bg-white text-center w-11 h-5 p-11 flex items-center justify-center border rounded-2xl'>
            <div className='bg-gray-200 rounded-full p-2 text-red-600'>
            <span class="material-symbols-outlined">
                open_in_new
            </span>
        </div>
        </div>
        <div className='flex flex-col mx-5'>
        <div className='text-start text-lg font-semibold'><p>We Cover It All</p></div>
        <div className='text-start'><p>Questions from the real test, for all license <br /> types. No surprises on test day.</p></div>
        </div>
       </div>
       </div>
{/*  */}

<div className='my-9 flex justify-between'>
       <div className='flex'>
        <div className='bg-white text-center w-11 h-5 p-11 flex items-center justify-center border rounded-2xl'>
            <div className='bg-gray-200 rounded-full p-2 text-red-600'>
            <span class="material-symbols-outlined">
                schedule
            </span>
        </div>
        </div>
        <div className='flex flex-col mx-5'>
        <div className='text-start text-lg font-semibold'><p>Fast & Easy</p></div>
        <div className='text-start'><p>Start a test in seconds and get live feedback <br /> as you go.</p></div>
        </div>
       </div>
       <div className="flex">
        <div className='bg-white text-center w-11 h-5 p-11 flex items-center justify-center border rounded-2xl'>
            <div className='bg-gray-200 rounded-full p-2 text-red-600'>
            <span class="material-symbols-outlined">
            <span class="material-symbols-outlined">
                check_circle
            </span>
            </span>
        </div>
        </div>
        <div className='flex flex-col mx-5'>
        <div className='text-start text-lg font-semibold'><p>Always FREE</p></div>
        <div className='text-start'><p>No catches, no hidden fees, no subscribe.<br /> 100% FREE.</p></div>
        </div>
       </div>
       </div>
       
       
       </div>
 
  )
}

export default Lowerheader
