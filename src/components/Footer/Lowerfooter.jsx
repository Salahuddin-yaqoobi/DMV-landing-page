import React, { useState, useEffect, useRef } from 'react';

function Lowerfooter() {
  // State to toggle input visibility
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null); // Ref to detect clicks outside

  // Handle the search icon click
  const handleSearchClick = () => {
    setShowInput(!showInput); // Toggle the input field visibility
  };

  // Handle click outside to close the input box
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false); // Hide input if clicked outside
      }
    };

    // Add event listener for clicks outside the input box
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className='mx-[10%] relative'>
      <div className='flex items-start justify-between'>

        {/* Search Icon and Input Field */}
        <div className='relative' ref={inputRef}>
          {/* Conditionally render the input field above the search icon */}
          {showInput && (
            <div className='absolute flex -top-12 left-0'>
              <input
                type="text"
                className="border-4 border-gray-200 border-t-4 px-2 py-1 rounded-l-sm"
                placeholder="Find DMV Questions"
              />
              <button className='bg-white border border-red-700 px-3 py-1 rounded-r-sm'>
                Search
              </button>
            </div>
          )}

          {/* Search Icon */}
          <div className="cursor-pointer" onClick={handleSearchClick}>
            <span className="material-symbols-outlined">
              search
            </span>
          </div>
        </div>

        {/* Horizontal Line */}
        <div className='flex-grow border-b-2 border-black mx-6'></div>

        {/* Arrow Icon */}
        <div
          className="flex items-center justify-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <span className="material-symbols-outlined">
            arrow_upward
          </span>
        </div>
      </div>

      {/* Footer Below Line */}
      <div className="belowline flex justify-around h-28">
        <div className='flex'>
          ©2024 DMV Practice test. Trademarks and brands are the property of their respective owners.
        </div>
        <div className='cursor-pointer flex gap-5'>
          <div>DMV Practice Test</div>
          <div>Terms and Conditions</div>
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
}

export default Lowerfooter;
