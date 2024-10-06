import React, { useState, useEffect } from 'react';

function Rating() {
  const [hoveredStar, setHoveredStar] = useState(null); // Track hovered star
  const [selectedStar, setSelectedStar] = useState(null); // Track selected star
  const [setValue, setSetValue] = useState("");

  // Create an array for stars
  const stars = [1, 2, 3, 4, 5];

  // Handle mouse enter event
  const handleMouseEnter = (index) => {
    setHoveredStar(index);
  };

  // Handle mouse leave event
  const handleMouseLeave = () => {
    setHoveredStar(null);
  };

  // Handle star click event
  const handleStarClick = (index) => {
    setSelectedStar(index);
  };

  // Set value based on the selected star
  useEffect(() => {
    if (selectedStar !== null) setSetValue("Thank you!");
    else setSetValue("4.52 out of 5 based on 128509 votes");
  }, [selectedStar]);

  return (
    <div className="relative z-20 -left-96 top-32">
      <div className="absolute w-80 p-5 bg-white text-black rounded-lg shadow-lg left-[-300%] top-2 transform translate-x-0">
        {/* Stars */}
        <div className="flex text-center items-center justify-center mb-3">
          {stars.map((star, index) => (
            <span
              key={index}
              className="material-symbols-outlined cursor-pointer transition-all"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleStarClick(index)}
              style={{
                color:
                  index <= (hoveredStar !== null ? hoveredStar : selectedStar)
                    ? '#1E40AF'
                    : '#A0AEC0', // Blue for filled, gray for unfilled
              }}
            >
              star
            </span>
          ))}
        </div>
        {/* Rating Text */}
        <div className="text-sm">
          <p>{setValue}</p>
        </div>
      </div>
    </div>
  );
}

export default Rating;
