// import { useState } from "react"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Modal from "@mui/material/Modal"
import { modalStyle } from "../styles/globalStyles"
import {useStockCalls} from "../services/useStockCalls"

export default function FirmModal({ open, handleClose, info, setInfo }) {
  const { createFirm } = useStockCalls()

  const handleChange = (e) => {
    // const { name, value } = e.target
    // setInfo({ ...info, [name]: value })
    setInfo({ ...info, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createFirm("firms", info)
    handleClose()
  }

  console.log(info)
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            component="form"
            onSubmit={handleSubmit}
          >
            <TextField
              label="Firm Name"
              name="name"
              id="name"
              type="text"
              variant="outlined"
              value={info.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info.phone}
              onChange={handleChange}
              required
            />
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info.address}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image"
              name="image"
              id="image"
              type="url"
              variant="outlined"
              value={info.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
