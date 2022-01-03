import {useHistory,} from "react-router-dom";
import {auth,createUserWithEmailAndPassword} from '../../firebase';

import { useFormik } from "formik";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as yup from 'yup';



const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .max(10, 'No more then 10')
    .required('Password is required'),
});

function Manager() {
  let history = useHistory();

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: function (values) {
      console.log("values: ", values)

      createUserWithEmailAndPassword(auth,values.email, values.password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        console.log('Registered with:', user.uid);

        

      })
      .catch(error => alert(error.message))
  }

  });

  return (
    <div style={{ margin: "2rem" }}>
      <h1 style={{textAlign:"center"}}>SetmanagerCrediantial</h1>

      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={2}>

          <TextField
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Email"
            variant="outlined"

            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}

            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            fullWidth
            color="primary"
            id="filled-basic"
            label="Password"
            variant="outlined"
            type="password"

            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}

            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />

          <Button fullWidth variant="contained" color="primary" type="submit">Login</Button>
        </Stack>

      </form>

    </div>
  );
}
export default Manager;