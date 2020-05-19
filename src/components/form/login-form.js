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
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";

function LoginForm() {
  const { isLoading, isError, error, run } = useAsync();
  const { login } = useAuth();

  const validationSchema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

  const loginForm = useFormik({
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const { email, password } = values;

      run(
        login({
          email: email,
          password: password,
        })
      );
    },
  });

  return (
    <form noValidate autoComplete="off" onSubmit={loginForm.handleSubmit}>
      <FormLabel>Login</FormLabel>
      {isError ? <Alert severity="error">{error.message}</Alert> : null}

      <TextField
        error={!!loginForm.errors.email}
        id="email"
        label="Email"
        type="email"
        defaultValue={loginForm.values.email}
        helperText={loginForm.errors.email}
        onChange={loginForm.handleChange}
        variant="outlined"
        margin="normal"
      />
      <TextField
        error={!!loginForm.errors.password}
        id="password"
        label="Password"
        type="password"
        onChange={loginForm.handleChange}
        defaultValue={loginForm.values.password}
        helperText={loginForm.errors.password}
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" fullWidth variant="contained" color="primary">
        Login {isLoading ? <CircularProgress /> : null}
      </Button>
      <Grid container>
        <Grid item>
          <span>
            No account ? <Link to="/register">Register</Link>
          </span>
        </Grid>
        <Grid item>
          <span>
            Forgot Password ? <Link to="/reset-password">Reset</Link>
          </span>
        </Grid>
      </Grid>
    </form>
  );
}

export default LoginForm;
