import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  token: "",
  password: "",
  confirmPassword: "",
};

export const NewPasswordForm = ({
  handleSubmit,
  handleChange,
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleBlur,
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="token"
            label="Code"
            name="token"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.token}
            error={touched.token && errors.token !== undefined}
            helperText={touched.token && errors.token}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            variant="outlined"
            id="password"
            name="password"
            label="Mot de passe"
            required
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password !== undefined}
            helperText={touched.password && errors.password}
          ></TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="password"
            variant="outlined"
            id="confirmPassword"
            name="confirmPassword"
            required
            label="Confirmation du mot de passe"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={
              touched.confirmPassword && errors.confirmPassword !== undefined
            }
            helperText={touched.confirmPassword && errors.confirmPassword}
          ></TextField>
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
        className={classes.submit}
      >
        Modifier votre mot de passe
      </Button>
    </form>
  );
};
