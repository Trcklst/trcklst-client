import React from "react";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  name: "",
};

export const NewSubscriptionForm = ({
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
        id="cardNumber"
        label="Numéro de carte de crédit"
        name="cardNumber"
        inputProps={{
          maxLength: 16,
        }}
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        type="number"
        rowsMax="12"
        label="Mois d'expiration"
        id="month"
        name="month"
        inputProps={{ min: "1", max: "12", step: "1" }}

        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        type="number"
        id="year"
        name="year"
        label="Année d'expiration"
        inputProps={{ min: "2020", max: "2030", step: "1" }}
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="cryptogramme"
        label="Cryptogramme"
        name="cryptogramme"
        inputProps={{
          maxLength: 3,
        }}
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
        className={classes.button}
      >
        Payer
      </Button>
    </form>
  );
};
