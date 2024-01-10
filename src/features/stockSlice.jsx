import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firms: [],
  products: [],
  purchases: [],
  brands: [],
  sales:[],
  categories:[],
  loading:false,
  error:false,
 
}

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {
    fetchStart:(state) =>{
      state.loading=true
    },
    fetchFail:(state)=>{
      state.loading=false
      state.error= true
    },
    getStockSuccess: (state, action) => {
      state[action.payload.url] = action.payload.apiData
      state.loading = false
    },
    
  },
})

export const {getStockSuccess, fetchFirmsSucces,fetchFail,fetchStart} = stockSlice.actions

export default stockSlice.reducer
