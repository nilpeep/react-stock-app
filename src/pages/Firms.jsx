import React from 'react'
import { useFetchService } from '../services/useFetchService'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CreateFirmModal from "../components/CreateFirmModal"


export const Firms = () => {
    const {getFirms} = useFetchService()

    const {firms} = useSelector((state) => state.stock)

    useEffect(() => {
        getFirms()
        console.log(firms)
    },[])
  return (<>
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
    {firms?.map((item, index) => (
      <Card key={index} sx={{ minWidth:345,  maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 100 }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address:{item.address}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">tel : {item.phone}</Button>
        </CardActions>
      </Card>
    ))}
  </div>
  </>
  )
}
