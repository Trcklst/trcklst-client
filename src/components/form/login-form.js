import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {
  TextField,
  CircularProgress,
  Grid,
  Button,
  Avatar,
  Typography,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { Lock as LockIcon } from "@material-ui/icons";

import { useAsync } from "../../hooks/async-hook";
import { useAuth } from "../../context/auth-context";
import { loginStyle } from "../../styles/components/login-style";

function LoginForm() {
  const { isLoading, isError, error, run } = useAsync();
  const { login } = useAuth();
  const classes = loginStyle();

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email must be a valid email"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
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
    <section className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockIcon />
      </Avatar>
      <Typography className={classes.typography} component="h1" variant="h5">
        Login
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={loginForm.handleSubmit}
      >
        {isError ? <Alert severity="error">{error.message}</Alert> : null}
        <TextField
          className={classes.field}
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
          className={classes.field}
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
            <Typography variant="body2" className={classes.forgot}>
              <Link to="/register">Vous n'avez pas de compte ?</Link>
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" className={classes.register}>
              <Link to="/reset-password">Mot de passe oublié ?</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}

export default LoginForm;
