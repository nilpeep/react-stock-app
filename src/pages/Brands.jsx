import React from 'react'
import { useEffect } from 'react'
import { useStockCalls } from '../services/useStockCalls'

export const Brands = () => {
  const {getStocks} = useStockCalls()
  useEffect(() =>{
    getStocks('brands')
  },[])
  return (
    <div>Brands</div>
  )
}