import React from "react";
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  FormHelperText,
} from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";

import { useStyles } from "./useStyles";

export const initialValues = {
  cardNumber: "",
  typeAbonnement: "",
  month: "",
  year: "",
  cryptogramme: "",
};

export const NewSubscriptionForm = ({
  handleSubmit,
  handleChange,
  values,
  errors,
  isValid,
  isSubmitting,
  handleBlur,
  touched,
}) => {
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <FormControl style={{ width: "100%" }}>
        <InputLabel id="label">Type</InputLabel>
        <Select
          labelId="label"
          name="typeAbonnement"
          id="typeAbonnement"
          value={values.typeAbonnement}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.typeAbonnement && errors.typeAbonnement !== undefined}
        >
          <MenuItem value="PREMIUM">Offre PREMIUM</MenuItem>
          <MenuItem value="PRO">Offre PRO</MenuItem>
        </Select>
        {errors.typeAbonnement !== null && touched.typeAbonnement ? (
          <FormHelperText style={{ marginLeft: 14, marginRight: 14 }} error>
            {errors.typeAbonnement}
          </FormHelperText>
        ) : null}
      </FormControl>
      <TextField
        variant="outlined"
        margin="normal"
        required
        id="cardNumber"
        label="Numéro de carte de crédit"
        name="cardNumber"
        value={values.cardNumber}
        inputProps={{
          maxLength: 16,
        }}
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.cardNumber && errors.cardNumber !== undefined}
        helperText={touched.cardNumber && errors.cardNumber}
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
        inputProps={{ min: "1", max: "12" }}
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.month && errors.month !== undefined}
        helperText={touched.month && errors.month}
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
        inputProps={{ min: "2020", max: "2030" }}
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        error={touched.year && errors.year !== undefined}
        helperText={touched.year && errors.year}
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
        error={touched.cryptogramme && errors.cryptogramme !== undefined}
        helperText={touched.cryptogramme && errors.cryptogramme}
      />
      {values.typeAbonnement ? (
        <div className={classes.limit}>
          <div className={classes.limitUser}>
            {values.typeAbonnement === "PRO" ? (
              <>
                <CheckIcon />
                <p>Playlist sans aucune limite d'utilisateurs</p>
              </>
            ) : (
              <>
                <CheckIcon />
                <p>Playlist limitée à 25 utilisateurs</p>
              </>
            )}
          </div>
          <div className={classes.limitParty}>
            <CheckIcon />
            <p>Aucune restriction de création de party</p>
          </div>
          <div>
            {values.typeAbonnement === "PRO" ? (
              <p className={classes.price}>Montant total : 9.99€</p>
            ) : (
              <p className={classes.price}>Montant total : 3.99€</p>
            )}
          </div>
        </div>
      ) : (
        ""
      )}
      {errors.unauthorized ? (
        <span className={classes.error}>{errors.unauthorized}</span>
      ) : (
        ""
      )}
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
