import * as React from "react"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
import EditIcon from "@mui/icons-material/Edit"
import { btnStyle } from "../styles/globalStyles"
import { useStockCalls } from "../services/useStockCalls"
import UploadFirmModal from "./UploadFirmModal"


export default function FirmCard({ firm }) {
  const { address, image, name, phone, _id } = firm
  const {deleteStock,uploadFirm} = useStockCalls()
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
        sx={{ objectFit: "contain" }}
      />

      <CardActions>
        <DeleteOutlineIcon onClick={() => deleteStock('firms', _id)} sx={btnStyle} />
        {/* <EditIcon   sx={btnStyle} /> */}
        <UploadFirmModal id={_id} />
      </CardActions>
    </Card>
  )
}
