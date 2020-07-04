import React from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { Formik } from "formik";
import { initialValues, NewpasswordForm } from "./NewpasswordForm";
import { NewpasswordSchema } from "./NewpasswordSchema";
import { useStyles } from "./useStyles";
import { ResetPassword } from "../../services/reset-password";
import { useHistory } from "react-router-dom";
import { LOGIN } from "../../helpers/route-constant";


export const Newpassword = () => {
  const classes = useStyles();
  const { push } = useHistory();

  const handleSubmit = async ({ token, password }, { setErrors }) => {
    try {

      const data = await ResetPassword.reset(token, password);
      const jsonData = await data.json();

      if (data.status !== 200) throw jsonData;
      return push(LOGIN);

    } catch (error) {
      setErrors({ error: error.message });
    }
  };
    

return (
<Grid container component="main">
    <div className={classes.paper}>
        <Container maxWidth="xs">
          <Typography
            component="h1"
            variant="h5"
          >
            <span> Nouveau mot passe </span>
          </Typography>
          <Formik
            initialErrors={initialValues}
            initialValues={initialValues}
            component={NewpasswordForm}      
            validationSchema={NewpasswordSchema}      
            onSubmit={handleSubmit}
            validateOnBlur
            validateOnChange
          ></Formik>
          
        </Container>
    </div>
    </Grid>);
};