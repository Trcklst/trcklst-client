import React from "react";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  idParty: "",
};

export const PartyForm = ({
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
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="idParty"
        label="Identifiant de la party"
        name="idParty"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.idParty}
        error={touched.idParty && errors.idParty !== undefined}
        helperText={touched.idParty && errors.idParty}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
        className={classes.button}
      >
        REJOINDRE
      </Button>
    </form>
  );
};
