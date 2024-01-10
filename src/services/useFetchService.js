import { useDispatch } from 'react-redux'
import useAxios from './useAxios'
import { fetchFirmsSucces } from '../features/stockSlice'

export const useFetchService = () => {

    const dispatch = useDispatch()

    const {axiosWithToken} = useAxios()
    const getFirms = async () =>{
        try {
            const {data} = await axiosWithToken('/firms')
            dispatch(fetchFirmsSucces(data))
            console.log(data.data)

        } catch (error) {
            console.log(error)
        }
    }
  return {getFirms}
}
