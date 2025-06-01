import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  value: [], 
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase_products: (state) => {
      state.value += 1
    },
    decrease_products: (state) => {
      state.value -= 1
    },
    remove_products: (state, action) => {
      state.value += action
    },
  },
})


export const { increase_products, decrease_products, remove_products } = cartSlice.actions

export default cartSlice.reducer