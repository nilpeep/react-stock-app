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

    const deleteStock = async (url,id) =>{
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

    const createFirm = async (url,firmInfo) =>{
        dispatch(fetchStart())
        try {
            await axiosWithToken.post(`${url}`,firmInfo)
            toastSuccessNotify('firm created')
            getStocks(url)
       
        } catch (error) {
            dispatch(fetchFail())
            toastErrorNotify('error')
            
        }
    }

   

    

    
  return {getStocks,deleteStock,createFirm}
}
