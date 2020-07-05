import React from "react";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./useStyles";

export const initialValues = {
  title: "",
};

export const TrackForm = ({
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
        id="title"
        label="Titre du son"
        name="title"
        fullWidth
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
        error={touched.title && errors.title !== undefined}
        helperText={touched.title && errors.title}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting || !isValid}
        className={classes.button}
      >
        RECHERCHER
      </Button>
    </form>
  );
};
