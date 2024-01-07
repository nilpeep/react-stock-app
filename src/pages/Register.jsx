import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import LockIcon from "@mui/icons-material/Lock"
import image from "../assets/result.svg"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { Link, useNavigate } from "react-router-dom"

import TextField from "@mui/material/TextField"
import { Formik,Form } from "formik"
import { object,string } from "yup"
import { useLoginService } from "../services/useLoginService"

const Register = () => {
  const navigate = useNavigate()

  const {register} = useLoginService()

  const registerSchema = object({
    email:string().required().email(),
    password:string()
    .required("Şifre zorunludur.")
    .min(8, "Şifre en az 8 karakter içermelidir")
    .max(16, "Şifre en falza 16 karakter içermelidir")
    .matches(/\d+/, "Şifre en az bir rakam içermelidir")
    .matches(/[a-z]/, "Şifre en az bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre en az bir büyük harf içermelidir")
    .matches(
      /[@$!%*?&]+/,
      "Şifre en az bir özel karakter (@$!%*?&) içermelidir"
    ),
    username:string().required('required area'),
    firstName:string().required(),
    lastName:string().required()
   
  })

  return (
    <Container maxWidth="lg">
      <Grid
        container
        justifyContent="center"
        direction="row-reverse"
        rowSpacing={{ sm: 3 }}
        sx={{
          height: "100vh",
          p: 2,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h3" color="primary" align="center">
            STOCK APP
          </Typography>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Avatar
            sx={{
              backgroundColor: "secondary.light",
              m: "auto",
              width: 40,
              height: 40,
            }}
          >
            <LockIcon size="30" />
          </Avatar>
          <Typography
            variant="h4"
            align="center"
            mb={2}
            color="secondary.light"
          >
            Register
          </Typography>

          <Formik
          initialValues={{email:'', username:'',firstName:'',lastName:'',password:''}}
            validationSchema={registerSchema}
            onSubmit={(values)=>{ register(values)}}
          >
            {
              ({values, handleBlur,handleChange,touched,errors})=>(

            <Form>


            
          <Box
            
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
            <TextField
              label="User Name"
              name="username"
              id="username"
              type="text"
              variant="outlined"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              
              helperText={errors.username}
              />
            <TextField
              label="First Name"
              name="firstName"
              id="firstName"
              type="text"
              variant="outlined"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={errors.firstName}
              />
            <TextField
              label="Last Name"
              name="lastName"
              id="lastName"
              type="text"
              variant="outlined"
              value={values.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.lastName && Boolean(errors.lastName)}
              helperText={errors.lastName}
              />
            <TextField
              label="Email"
              name="email"
              id="email"
              type="email"
              variant="outlined"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={errors.email}
              />
            <TextField
              label="password"
              name="password"
              id="password"
              type="password"
              variant="outlined"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={errors.password}
              />
            <Button type="submit" variant="contained" size="large">
              Submit
            </Button>
          </Box>
              </Form>
              )
            }
              </Formik>

          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/">Do you already have an account?</Link>
          </Box>
        </Grid>

        <Grid item xs={0} sm={7} md={6}>
          <Container>
            <img src={image} alt="" />
          </Container>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Register
