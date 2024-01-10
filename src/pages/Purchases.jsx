import React from 'react'
import { useEffect } from 'react'
import { useStockCalls } from '../services/useStockCalls'

export const Purchases = () => {
  const {getStocks} = useStockCalls()
  useEffect(() =>{
    getStocks('purchases')
  },[])
  return (
    <div>Purchases</div>
  )
}
