
import { useNavigate } from 'react-router-dom'
import {toastSuccessNotify , toastErrorNotify} from '../helper/ToastNotify'
import { fetchStart, fetchFail,loginSuccess,registerSuccess,logOutSuccess } from '../features/authSlice'
import useAxios from './useAxios'




import { useDispatch } from 'react-redux'

export const useLoginService = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()



    const { axiosWithToken, axiosPublic } = useAxios()

    const login = async (userInfo) =>{


        dispatch(fetchStart())
        
        try {
            const {data} = await axiosPublic.post(`/auth/login/`, userInfo)
            dispatch(loginSuccess(data))
            navigate('/stock')
            toastSuccessNotify('You have logged in successfully!')
        } catch (error) {
            dispatch(fetchFail())
            console.log(error)
            toastErrorNotify('invalid email or password')
        }
    }

    const register = async (userInfo) =>{
        dispatch(fetchStart())
        try {
            // const {data} = await axios.post(`${BASE_URL}/users/`,userInfo)
            // console.log(data)

            const {data} = await axiosPublic.post('/auth/users/',userInfo)

            dispatch(registerSuccess(data))
            navigate('/stock')
            toastSuccessNotify('You have registered successfully!')

            
        
        } catch (error) {
            console.log(error)
            toastErrorNotify('error')

        }
    }

    const logout = async () =>{
        dispatch(fetchStart())
        console.log('wtf')
        try {
            // const {data}  =await axios.get(`${BASE_URL}/auth/logout`, {
            //     headers:{Authorization: `Token ${token}`}
            // })
         

            await axiosWithToken("/auth/logout/")

            

            toastSuccessNotify('you have logged out')
            dispatch(logOutSuccess())


        } catch (error) {
            console.log(error)
        }
    }
    return {login,register,logout}
}








