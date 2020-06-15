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

export const initalValues = {
  newEmail: "",
  confirmEmail: "",
  password: "",
};

export const UpdateIdentifier = ({
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
    <Card className={classes.root}>
      <form onSubmit={handleSubmit}>
        <CardHeader title="Changer de mail" className={classes.title} />
        <Divider light={true} />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nouvel email *"
                id="newEmail"
                name="newEmail"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.newEmail}
                error={touched.newEmail && errors.newEmail !== undefined}
                helperText={touched.newEmail && errors.newEmail}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Confirmation de l'email *"
                id="confirmEmail"
                name="confirmEmail"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmEmail}
                error={
                  touched.confirmEmail && errors.confirmEmail !== undefined
                }
                helperText={touched.confirmEmail && errors.confirmEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Mot de passe *"
                id="password"
                name="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                error={touched.password && errors.password !== undefined}
                helperText={touched.password && errors.password}
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
