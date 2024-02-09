import React, { useState } from 'react'
import { useStockCalls } from '../services/useStockCalls'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Typography from "@mui/material/Typography";
import CreateFirmModal from "../components/CreateFirmModal"
import FirmCard from '../components/FirmCard';
import { Button, Grid } from '@mui/material';
import { btnStyle } from '../styles/globalStyles';

export const Firms = () => {

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  })

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
    setInfo({ name: "", phone: "", address: "", image: "" })
  }
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
  <Button variant='contained' sx={btnStyle} onClick={handleOpen}>Create Firm</Button>

  <CreateFirmModal info={info} setInfo={setInfo} open={open} handleClose={handleClose}/>
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
