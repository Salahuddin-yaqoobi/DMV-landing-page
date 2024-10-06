import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: "Albama",
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   isActive : (state , activeValue)=>{
       state.value = activeValue.payload
   }
  },
})

// Action creators are generated for each case reducer function
export const { isActive } = counterSlice.actions;

export default counterSlice.reducer