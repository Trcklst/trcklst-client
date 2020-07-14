import React from "react";
import { TextField, Button, Grid, Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import { useStyles } from "./useStyles";
import { FORGOTPASSWORD } from "../../helpers/route-constant";

export const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = ({
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
    <form onSubmit={handleSubmit}>
      <Grid container>
        <Box mx="auto">
          <Typography variant="h6" className={classes.boldText}>
            Connectez-vous!
          </Typography>
        </Box>
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
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            id="password"
            label="Mot de passe"
            name="password"
            type="password"
            fullWidth
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password !== undefined}
            helperText={touched.password && errors.password}
          />
        </Grid>
      </Grid>
      {errors.unauthorized ? (
        <span className={classes.error}>{errors.unauthorized}</span>
      ) : (
        ""
      )}
      <Box p={2}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting || !isValid}
          className={classes.submit}
        >
          Se connecter
        </Button>
      </Box>
      <Grid container>
        <Grid item xs>
          <Typography variant="body2" align="center">
            <Link to={FORGOTPASSWORD} className={classes.link}>
              Mot de passe oublié?
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};
