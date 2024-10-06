import React from 'react'

function Upperfooter() {
  return (
    <div className='mx-[10%]'>
      <div className='text-5xl font-bold text-start h-60 flex items-center'>
      DMV Practice Test
      </div>
      <div className='full flex space-x-9'>
      <div className="firstbox w-[50%]">
        <div className="text w-[80%] text-start my-4">
        Our mission is simple: to help our users pass the DMV written test on their first attempt. To that end, we’ve created practice drivers tests that are based on the real thing for all 50 states. No matter what license type you want, we’ve got you covered. From your typical non-commercial drivers license to CDL to motorcycles. The best part? At DMV Practice Test, every single one of our DMV practice written tests are 100% FREE. No tricks, no hidden fees, no giving out your credit card number.
        </div>
        <div className='fullinfirst flex space-x-9 mt-20'>
          <div className="twoimages space-y-3">
            <img src="src/images/dmv-article.jpeg" alt="car in high speed" />
            <img src="src/images/article-teaser.jpeg" alt="trafic" />
          </div>
          <div className="textrightimages w-80 text-start flex justify-center">We’ve worked long and hard with our software engineers and used feedback from test takers just like yourself to create a simple and easy to use interface that will help you prepare for the DMV written test in the fastest manner possible. No more reading over the mind-numbing driver’s manual, wasting your time wondering what will be on the test and what won’t. We take questions directly from your state’s DMV drivers test so you’ll know exactly what to expect on test day.</div>
        </div>
        <div className='w-[80%] text-start mt-20'>In fact, when you sit down for the real thing, it will probably feel like you’ve taken the test before (and that will be a wonderful feeling, trust us). That’s because you essentially have. There’s simply no better way to prepare than by reviewing the actual, real-life test questions. Not only that, but DMV Practice Test provides you with a detailed explanation of every single question. You won’t just remember the answer, but you’ll understand the reasons for it.</div>
      </div>

      {/* second part */}
      <div className="secondbox w-[40%]">
        <div className='flex items-center justify-center mb-5'>
          <img className='w-full' src="src/images/article-cover.jpeg" alt="many briges" />
        </div>
        <div className="twoimages flex space-x-2 justify-center">
          <img className='w-full' src="src/images/article-caro-one.jpeg" alt="car moving on car" />
          <img className='w-full' src="src/images/article-caro-two.jpeg" alt="girl move her head out of the car" />
        </div>
        <div className='mt-8 text-start'>Get started with our FREE DMV practice tests today. Simply pick your state and your license type, and in just a few clicks you’ll be getting ready to pass the DMV written test. <span className='font-bold'>Your path to success begins now.</span></div>
      </div>
      </div>
      <div className="btn flex justify-start">
        <button className='my-24 text-start rounded-md text-gray-200 font-semibold ml-56 py-5 px-3 bg-red-700 cursor-pointer'>
          Free Practice DMV Tests
        </button>
      </div>
    </div>
  )
}

export default Upperfooter
