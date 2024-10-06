import { createContext,children , useContext } from "react";

// Create the CountryNameContext
export const CountryNameContext = createContext(); // Start with an empty context

// Create a provider component
export const CountryNameProvider = ({ children }) => {
  const CountryNames = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District Of Columbia",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",   
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",   
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
  ];
  const TestNumbers = [
      "DMV Permit Test #1",
      "DMV Permit Test #2",
      "DMV Permit Test #3",
      "DMV Permit Test #4",
      "DMV Permit Test #5",
      "DMV Permit Test #6",
      "DMV Permit Test #7",
      "DMV Permit Test #8",
      "DMV Permit Test #9",
      "DMV Permit Test #10",
      "DMV Permit Test #11",
      "DMV Permit Test #12"
  ];

  // Provide the CountryNames to any children components
  return (
    <CountryNameContext.Provider value={{ CountryNames , TestNumbers }}>
      {children}
    </CountryNameContext.Provider>
  );
};

// Custom hook to use the CountryNameContext
// export default function useCountryNames() {
  // return useContext(CountryNameProvider);
// }
// 
export const useCountryNames = () => {
  return useContext(CountryNameContext);
};


