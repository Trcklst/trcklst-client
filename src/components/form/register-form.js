import React from "react";

import { useAsync } from "../../hooks/async-hook";
import { useAuth } from "../../context/auth-context";
import { useFormik } from "formik";

import * as yup from "yup";

import { Link } from "react-router-dom";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

function RegisterForm() {
  const { isLoading, isError, error, run } = useAsync();
  const { register } = useAuth();

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

  const registerForm = useFormik({
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;

      return run(
        register({
          email: email,
          password: password,
        })
      );
    },
  });

  return (
    <form noValidate autoComplete="off" onSubmit={registerForm.handleSubmit}>
      <FormLabel>Register</FormLabel>
      {isError ? <Alert severity="error">{error.message}</Alert> : null}

      <TextField
        error={!!registerForm.errors.email}
        id="email"
        label="Email"
        type="email"
        defaultValue={registerForm.values.email}
        helperText={registerForm.errors.email}
        onChange={registerForm.handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        error={!!registerForm.errors.password}
        id="password"
        label="Password"
        type="password"
        onChange={registerForm.handleChange}
        defaultValue={registerForm.values.password}
        helperText={registerForm.errors.password}
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Register {isLoading ? <CircularProgress /> : null}
      </Button>
      <Grid container>
        <Grid item>
          <span>
            Already registered ? <Link to="/login">Login</Link>
          </span>
        </Grid>
      </Grid>
    </form>
  );
}

export default RegisterForm;
