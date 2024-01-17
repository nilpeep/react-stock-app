
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');

  const handleChange = (e) => {
    setAge(e.target.value);
  }

  return (
    <div>
      <Button sx={{  padding:'10px'}} onClick={handleOpen}>Add Firm</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ minWidth: 120 }}>
      <FormControl  fullWidth>
        
        <TextField margin='10px' id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Address" variant="outlined" />
        <TextField id="outlined-basic" type='tel' label="Phone" variant="outlined" />
        <TextField id="outlined-basic" type='url' label="Image" variant="outlined" />
      </FormControl>
    </Box>
        </Box>
      </Modal>
    </div>
  );
}




