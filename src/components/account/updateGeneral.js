import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Button,
  TextField,
  CardActions,
} from "@material-ui/core";

import { useStyles } from "./useStyles";
import { ButtonLoader } from "../common/ButtonLoader";

export const UpdateGeneral = ({
  handleSubmit,
  handleChange,
  values,
  touched,
  errors,
  isValid,
  isSubmitting,
  handleBlur,
  status: { loading },
}) => {
  const classes = useStyles();

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Profil" className={classes.title} />
        <Divider light={true} />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Prénom *"
                name="newFirstname"
                id="newFirstname"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newFirstname}
                error={
                  touched.newFirstname && errors.newFirstname !== undefined
                }
                helperText={touched.newFirstname && errors.newFirstname}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nom de famille *"
                id="newLastname"
                name="newLastname"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newLastname}
                error={touched.newLastname && errors.newLastname !== undefined}
                helperText={touched.newLastname && errors.newLastname}
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider light={true} />
        <CardActions className={classes.cardActions}>
          <ButtonLoader loading={loading}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"
              disabled={isSubmitting || !isValid || loading}
              onSubmit={handleSubmit}
            >
              Sauvegarder
            </Button>
          </ButtonLoader>
        </CardActions>
      </form>
    </Card>
  );
};
