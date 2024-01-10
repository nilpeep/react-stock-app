import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  firms: [],
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchFirmsSucces:(state, {payload})=>{
      state.firms = payload.data
    }
  },
})

export const {fetchFirmsSucces} = stockSlice.actions

export default stockSlice.reducer
