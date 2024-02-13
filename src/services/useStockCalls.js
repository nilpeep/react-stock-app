import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { getStockSuccess } from '../features/stockSlice'
import { fetchStart,fetchFail } from '../features/stockSlice'
import { toastErrorNotify, toastSuccessNotify } from '../helper/ToastNotify'


export const useStockCalls = () => {

    const dispatch = useDispatch()

    const {axiosWithToken} = useAxios()
    const getStocks = async (url = 'firms') =>{
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken(`${url}`)
            const apiData = data.data
            dispatch(getStockSuccess({apiData, url}))
            console.log(data.data)

        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify(`${url} data can not access`)
            console.log(error)
        }
    }

    const deleteStock = async (url='firms',id) =>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.delete(`${url}/${id}`)
            toastSuccessNotify(`${url} data deleted successfully`)
            getStocks(url)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify('process error')
        }
    }

    const postStock = async (url='firms',info) =>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`${url}/`, info)
            toastSuccessNotify(`${url} has successfully added`)
            getStocks(url)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify('process error')
        }
    }
    const putStock = async (url='firms',info) =>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.put(`${url}/${info._id}`, info)
            toastSuccessNotify(`${url} has successfully updated`)
            getStocks(url)
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify('process error')
        }
    }

   

    

    
  return {getStocks,deleteStock,postStock, putStock}
}
