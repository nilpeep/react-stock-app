
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import EditIcon from "@mui/icons-material/Edit"
import { TextField } from '@mui/material';
import { Form, Formik } from 'formik';
import { string,number, object } from 'yup';
import { useStockCalls } from '../services/useStockCalls';
import { btnStyle } from "../styles/globalStyles"

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

export default function UploadFirmModal({id}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [age, setAge] = React.useState('');




  const firmSchema = object({
    name: string()
      .required("name required"),
    phone: string()
      .required("phone required"),
    address: string()
      .required("address required"),
    image: string()
      .required("image required"),
      
  })

  const {uploadFirm} = useStockCalls()

  return (
    <div>
      <EditIcon onClick={handleOpen}  sx={btnStyle} />
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{ minWidth: 120 }}>
          <Formik
          validationSchema={firmSchema}
          initialValues={{name: "",
          phone: "",
          address: "",
          image: "", 
        }} 
        onSubmit={(values,actions) =>{
          // createFirm(values) 
          console.log(values.name)
          uploadFirm('firms',id,values)
          actions.resetForm()
          actions.setSubmitting(false) 
          handleClose()
          
        }}
      
          >
            {({handleBlur,errors,touched,handleChange, values}) =>(
            <Form>
      <Box sx={{display:'flex', gap:'1rem',flexDirection:'column'}} fullWidth>
      <TextField   label="Firm Name*" variant="outlined"
                    name="name"
                    id="name"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.name && Boolean(errors.name)}
                    helperText={errors.name}
                    value={values.name}
                    onChange={handleChange}/>
      <TextField  name="phone"
                    id="phone"
                    type="number"
                    onBlur={handleBlur}
                    error={touched.phone && Boolean(errors.phone)}
                    helperText={errors.phone}
                    value={values.phone}
                    onChange={handleChange} label="Phone*" variant="outlined" />
      <TextField label="Address*" variant="outlined"  name="address"
                    id="address"
                    type="text"
                    onBlur={handleBlur}
                    error={touched.address && Boolean(errors.address)}
                    helperText={errors.address}
                    value={values.address}
                    onChange={handleChange}/>
      <TextField id="image" label="Image*" variant="outlined" 
                    type="text"
                   name='image'
                   onBlur={handleBlur}
                   error={touched.image && Boolean(errors.image)}
                   helperText={errors.image}
                    value={values.image}
                    onChange={handleChange}/>
      <Button type='submit' variant="contained" >
        Save
      </Button>
      </Box>

              </Form>)
            }

      </Formik>
    </Box>
        </Box>
      </Modal>
    </div>
  );
}




