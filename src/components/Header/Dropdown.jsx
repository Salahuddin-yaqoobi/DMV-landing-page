import React, { useState, useEffect, useRef } from "react";
import useCountryNames from "../../context/usercontext";
import { isActive } from "../../redux/counter/counterSlice";
import { useSelector, useDispatch } from 'react-redux';

function Dropdown({ country, testnumbers, textSize, bottomDropdown }) {
  const { CountryNames, TestNumbers } = useCountryNames();
  const [isOpen, setisOpen] = useState(false);
  const [activeValue, setactiveValue] = useState("Alabama");
  const [IsClicked, setIsClicked] = useState(false);
  const [selectedTest, setSelectedTest] = useState('');
  const [isTestOpen, setIsTestOpen] = useState(false);
  const usedValue = useSelector((state) => state.counter.value);
  const [usedValueCheck, setusedValueCheck] = useState(false)
  const dispatch = useDispatch();

  const dropdownRef = useRef(null);
 

  // Divide the CountryNames array into three roughly equal parts
  const columnCount = 3;
  const itemsPerColumn = Math.ceil(CountryNames.length / columnCount);
  const columns = Array.from({ length: columnCount }, (_, columnIndex) =>
    CountryNames.slice(columnIndex * itemsPerColumn, (columnIndex + 1) * itemsPerColumn)
  );

  // Handle country selection
  const handleClick = (item) => {
    setactiveValue(item);
    setusedValueCheck(true)
    dispatch(isActive(item)); // Dispatch action when the item is clicked
    setIsClicked(true);
  };

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setisOpen(false);
        setIsTestOpen(false);
      }
    };
    

    if (isOpen || isTestOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, isTestOpen]);

  const handleTestChange = (event) => {
    setSelectedTest(event.target.value);
    console.log("Selected Test:", event.target.value);
  };

  return (
    <>
      {country && (
        <div ref={dropdownRef} className="relative items-center min-w-[205px] rounded-lg -ml-4 mt-6 -mr-2">
          <button
            onClick={() => setisOpen((prev) => !prev)} // Toggle dropdown open state
            className={`flex items-start font-bold rounded-lg tracking-wider px-4 bg-none text-${textSize} ${bottomDropdown ? "text-[#889D8F]" : ""}`}
          >
            {usedValue}
            
            {!isOpen ? (
              <span className={`material-symbols-outlined ${bottomDropdown ? "text-7xl shadow-white" : ""}`}>arrow_drop_down</span>
            ) : (
              <span className="material-symbols-outlined">arrow_drop_up</span>
            )}
          </button>

          {isOpen && (
            <div className={`bg-white absolute w-[550px] grid grid-cols-3 gap-2 p-4 rounded-lg shadow-lg z-10 my-2 text-start font-title font-semibold text-[#939195] cursor-pointer ${bottomDropdown ? "-top-32 left-1" : ""}`}>
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col text-sm">
                  {column.map((item, itemIndex) => (
                    <div key={itemIndex} className="leading-none my-2 mx-2 hover:text-[#191819] transition-all" onClick={() => handleClick(item)}>
                      {item === activeValue && (
                        <span className="material-symbols-outlined -ml-6 -mb-0 -mt-7 text-black font-semibold">
                          check_small
                        </span>
                      )}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {testnumbers && (
        <div className="relative items-center w-fit rounded-lg mt-6">
          <button
         
            onClick={() => setIsTestOpen((prev) => !prev)} // Toggle test dropdown open state
            className="flex items-start font-bold rounded-lg tracking-wider w-fit px-4 bg-none text-sm"
          >
            {selectedTest || "DMV Permit Test #1"}
            {!isTestOpen ? (
              <span className="material-symbols-outlined">arrow_drop_down</span>
            ) : (
              <span className="material-symbols-outlined">arrow_drop_up</span>
            )}
          </button>

          {isTestOpen && (
            <div className="bg-white absolute left-1/2 -translate-x-1/2 top-full w-[500px] grid grid-cols-2 gap-2 p-4 rounded-lg shadow-lg z-10 my-2 text-start font-title font-semibold text-[#939195] cursor-pointer">
              {TestNumbers.map((test, index) => (
                <div
                  key={index}
                  className="leading-none my-2 mx-2 hover:text-[#191819] transition-all flex"
                  onClick={() => handleTestChange({ target: { value: test } })} // Trigger change with selected test
                >
                  {test === selectedTest && (
                    <span className="material-symbols-outlined -ml-6 -mb-2 text-black font-semibold">
                      check_small
                    </span>
                  )}
                  <span>{test}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Dropdown;
