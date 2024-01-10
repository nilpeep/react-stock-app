import React from 'react'
import { useEffect } from 'react'
import { useStockCalls } from '../services/useStockCalls'

export const Products = () => {
  const {getStocks} = useStockCalls()
  useEffect(() =>{
    getStocks('products')
  },[])
  return (
    <div>Products</div>
  )
}