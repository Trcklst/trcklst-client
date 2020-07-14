import React from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Link,
} from "@material-ui/core";

import { useStyles } from "./useStyles";
import { LOGIN } from "../../helpers/route-constant";

export const initialValues = {
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegisterForm = ({
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
            Inscrivez-vous!
          </Typography>
        </Box>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            type="text"
            margin="normal"
            fullWidth
            required
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && errors.email !== undefined}
            helperText={touched.email && errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            type="password"
            fullWidth
            required
            margin="normal"
            variant="outlined"
            id="password"
            name="password"
            label="Mot de passe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && errors.password !== undefined}
            helperText={touched.password && errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            className={classes.field}
            type="password"
            fullWidth
            margin="normal"
            variant="outlined"
            required
            id="confirmPassword"
            name="confirmPassword"
            label="Confirmation du mot de passe"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmPassword}
            error={
              touched.confirmPassword && errors.confirmPassword !== undefined
            }
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
        </Grid>
      </Grid>
      <Box p={2}>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting || !isValid}
          className={classes.submit}
        >
          S'inscrire
        </Button>
      </Box>
      <Grid container className={classes.greyText}>
        <Grid item>
          <Typography variant="body2" align="justify">
            Le mot de passe doit comporter au moins{" "}
            <strong>8 caractères </strong> et contenir au moins une lettre
            majuscule, une lettre minuscule et un chiffre .
          </Typography>
          <Typography variant="body2" align="justify">
            En cliquant sur "S'inscrire", vous acceptez nos conditions
            d'utilisation, notre politique de confidentialité et de recevoir des
            communications commerciales de Trcklst.
          </Typography>
          <br />
          <Typography variant="body2">
            Vous avez déjà un compte ?{" "}
            <Link to={LOGIN} className={classes.link}>
              Connectez-vous
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
};
