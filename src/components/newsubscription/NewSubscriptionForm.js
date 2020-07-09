import React, { useContext } from "react";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./useStyles";
import { SessionContext } from "../../context/session";

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
  const { user } = useContext(SessionContext);
  console.log(user.id);

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="cardNumber"
        label="Numéro de carte de crédit"
        name="cardNumber"
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
        inputProps={{ min: "0", max: "12", step: "1" }}
        label="Année d'expiration"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextField
        variant="outlined"
        margin="normal"
        required
        type="number"
        id="cryptogramme"
        label="Cryptogramme"
        name="cryptogramme"
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
