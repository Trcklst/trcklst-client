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
import { PlusOne as PlusOneIcon } from "@material-ui/icons";

import { useAsync } from "../../hooks/async-hook";
import { useAuth } from "../../context/auth-context";
import { registerStyle } from "../../styles/components/register-style";

function RegisterForm() {
  const { isLoading, isError, error, run } = useAsync();
  const { register } = useAuth();
  const classes = registerStyle();

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
    <section className={classes.root}>
      <Avatar>
        <PlusOneIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Register
      </Typography>
      <form
        className={classes.form}
        noValidate
        autoComplete="off"
        onSubmit={registerForm.handleSubmit}
      >
        {isError ? <Alert severity="error">{error.message}</Alert> : null}
        <TextField
          className={classes.field}
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
          className={classes.field}
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
            <Typography variant="body2">
              <Link to="/login">Already registered ?</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
    </section>
  );
}

export default RegisterForm;
