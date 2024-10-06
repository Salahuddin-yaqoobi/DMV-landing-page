import React from 'react'
import SuccessStories from './SuccessStories'
import Carperstate from './Carperstate'

function Main() {
  return (
    <div>
      <div className='flex flex-col text-5xl text-start mx-[15%] font-bold space-y-2'>
        <p>Success</p>
        <p>Stories</p>
      </div>
      <SuccessStories />
      <Carperstate />
    </div>
  )
}

export default Main
