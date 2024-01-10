import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user:'',
  loading:false,
  error:false,
  token:''
}


const authSlice = createSlice({
  name: "auth",

  initialState,
  reducers: {
    fetchStart:(state) =>{
      state.loading=true
    },
    fetchFail:(state)=>{
      state.loading=false
      state.error= true
    },
    loginSuccess:(state, {payload}) =>{
      state.loading=false
      state.user = payload.user.username
      state.token = payload.token
    },
    registerSuccess:(state,{payload})=>{
      state.loading=false
      state.user=payload.data.username
      state.token = payload.token
    },
    logOutSuccess:(state)=>{
      state.loading = false
      state.user=''
      state.token=''
    }
  },
})

export const {fetchStart, fetchFail, loginSuccess, registerSuccess,logOutSuccess} = authSlice.actions
export default authSlice.reducer
