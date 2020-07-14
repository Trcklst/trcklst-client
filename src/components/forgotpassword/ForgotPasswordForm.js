import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  email: "",
};

export const ForgotPasswordForm = ({
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
            id="email"
            label="Email"
            name="email"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email !== undefined}
            helperText={touched.email && errors.email}
          />
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
        Réinitialiser votre mot de passe
      </Button>
    </form>
  );
};
