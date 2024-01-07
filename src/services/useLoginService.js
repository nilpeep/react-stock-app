import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {toastSuccessNotify , toastErrorNotify} from '../helper/ToastNotify'
import { fetchStart, fetchFail,loginSuccess,registerSuccess,logOut } from '../features/authSlice'



import React from 'react'
import { useDispatch } from 'react-redux'

export const useLoginService = () => {
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const login = async (userInfo) =>{


        dispatch(fetchStart())
        
        try {
            const {data} = await axios.post(`${BASE_URL}/auth/login/`, userInfo)
            dispatch(loginSuccess(data))
            navigate('/stock')
            toastSuccessNotify('Succes')
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
            toastErrorNotify('error')
        }
    }

    const register = async (userInfo) =>{
        dispatch(fetchStart())
        try {
            const {data} = await axios.post(`${BASE_URL}/users/`,userInfo)
            console.log(data)

            dispatch(registerSuccess(data))
            navigate('/stock')
            toastSuccessNotify('register Succes')

            
        
        } catch (error) {
            console.log(error)
            toastErrorNotify('error')

        }
    }

    const logout = async () =>{
        try {
            await axios.get(`${BASE_URL}/auth/logout`)
            dispatch(logOut())
        } catch (error) {
            console.log(error)
        }
    }
    return {login,register,logout}
}








