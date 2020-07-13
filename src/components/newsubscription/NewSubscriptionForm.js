import React from "react";
import { FormControl, InputLabel, TextField, Select, MenuItem, Button } from "@material-ui/core";
import { useStyles } from "./useStyles";

export const initialValues = {
  cardNumber: "",
  typeAbonnement: "",
  month: "",
  year: "",
  cryptogramme: ""
};

export const NewSubscriptionForm = ({
  handleSubmit,
  handleChange,
  values,
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
        value = {values.cardNumber}
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
        value={values.month}
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
        value={values.year}
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
        value={values.cryptogramme}
        inputProps={{
          maxLength: 3,
        }}
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
      />
           
      <FormControl style={{width:"150px"}}>
        <InputLabel id="label">Type</InputLabel>
        <Select  labelId="label" name="typeAbonnement" id="typeAbonnement" value={values.typeAbonnement} onChange={handleChange} onBlur={handleBlur}>
          <MenuItem value="PRO">Pro</MenuItem>
          <MenuItem value="PREMIUM">Premium</MenuItem>
        </Select>
      </FormControl>
      
      {errors.unauthorized
        ? (
          <span className={classes.error}>{errors.unauthorized}</span>
        )
        : ("")}
      
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
