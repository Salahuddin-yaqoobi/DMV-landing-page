import React from 'react';
import useCountryNames from "../../context/usercontext";

function Carperstate() {
    const { CountryNames } = useCountryNames();

    const columnCount = 4; // Change column count to 4
    const itemsPerColumn = Math.ceil(CountryNames.length / columnCount);
  
    const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
        CountryNames.slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
    );

    const handleClick = (country) => {
        // Handle the click event for the country name
        console.log(`Clicked on: ${country}`);
        // You can add more logic here based on your requirements
    };

    return (
        <div className='mx-[15%] mb-72'>
            <div className='text-5xl font-bold text-start mb-28'>
                Car - Tests Per State
            </div>
            <div className='border-b-2 border-gray-300 my-3'></div>
            <div className="flex space-x-4 justify-between w-">
                {columns.map((column, colIndex) => (
                    <div key={colIndex} className="flex flex-col text-sm text-start text-blue-900 font-semibold cursor-pointer">
                        {column.map((item, itemIndex) => (
                            <div 
                                key={item} // Use item as key if it's unique
                                className="leading-none my-2 mx-2 hover:text-[#191819] transition-all" 
                                onClick={() => handleClick(item)}
                            >
                                <div className='flex gap-3'>
                               <svg class="dmv-custom-icon" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.58585 4L4.29297 1.70712L5.70718 0.292908L10.4143 5.00001L5.70718 9.70712L4.29297 8.29291L6.58588 6H0V4H6.58585Z" fill="#01508C"></path>
                                </svg>
                                <span>{item} Practice Test</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carperstate;
