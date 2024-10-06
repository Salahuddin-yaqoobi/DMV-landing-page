// import React, { createContext } from "react"
// 
// const UserContext = React.createContext()
// 
// export default UserContext 
// 


import { useContext } from "react";
import { CountryNameContext } from "./CountryName";
 // Adjust the path accordingly
export default function useCountryNames() {
  return useContext(CountryNameContext);
}






