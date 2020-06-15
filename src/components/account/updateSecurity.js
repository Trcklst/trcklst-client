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
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const UpdateSecurity = ({
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
        <CardHeader title="Changer de mot de passe" className={classes.title} />
        <Divider light={true} />
        <CardContent className={classes.cardContent}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Ancien mot de passe *"
                id="oldPassword"
                name="oldPassword"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.oldPassword}
                error={touched.oldPassword && errors.oldPassword !== undefined}
                helperText={touched.oldPassword && errors.oldPassword}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Nouveau mot de passe *"
                id="newPassword"
                name="newPassword"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.newPassword}
                error={touched.newPassword && errors.newPassword !== undefined}
                helperText={touched.newPassword && errors.newPassword}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                label="Confirmation du mot de passe"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                error={
                  touched.confirmPassword &&
                  errors.confirmPassword !== undefined
                }
                helperText={touched.confirmPassword && errors.confirmPassword}
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
