import React from 'react'
import { useStockCalls } from '../services/useStockCalls'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Typography from "@mui/material/Typography";
import CreateFirmModal from "../components/CreateFirmModal"
import FirmCard from '../components/FirmCard';
import { Grid } from '@mui/material';


export const Firms = () => {
    const {getStocks} = useStockCalls()

    const {firms} = useSelector((state) => state.stock)

    useEffect(() => {
        getStocks('firms')
        console.log(firms)
    },[])
  return (<>
  <Typography variant='h4' color='success.main'>
    Firms
  </Typography>
  <CreateFirmModal/>
    <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "1rem",
      justifyContent: "center",
      alignItems: "center",
    }}
  >

    {/* <Grid container gap={2} mt={3} justifyContent={"center"}>
    {firms?.map((firm) => {
      <Grid item key={firm._id}>
        <FirmCard firm={firm}/>
      </Grid>
    })}
    </Grid> */}
    <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    
  </div>
  </>
  )
}
