import React from "react";

import { useAsync } from "../../hooks/async-hook";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import * as yup from "yup";

import { Link } from "react-router-dom";
import BackLink from "../utils/back-link";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";

function ResetPasswordForm() {
  const { isError, isLoading, error, run } = useAsync();
  const history = useHistory();

  const [codeSent, setCodeSent] = React.useState(false);
  const [confirmed, setConfirmed] = React.useState(false);
  const [resetted, setResetted] = React.useState(false);

  const validationSchema = {
    stepSendEmail: yup.object({ email: yup.string().required().email() }),
    stepConfirmCode: yup.object({ code: yup.string().required() }),
    stepResetPassword: yup.object({
      newPassword: yup.string().required().min(8),
      confirmationPassword: yup
        .string()
        .oneOf([yup.ref("newPassword")], "Passwords must match"),
    }),
  };

  const stepSendEmail = useFormik({
    validationSchema: validationSchema.stepSendEmail,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: "",
    },
    onSubmit: (_values) => {
      setCodeSent(true);
    },
  });

  const stepConfirmCode = useFormik({
    validationSchema: validationSchema.stepConfirmCode,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      code: "",
    },
    onSubmit: (_values) => {
      setConfirmed(true);
    },
  });

  const stepResetPassword = useFormik({
    validationSchema: validationSchema.stepResetPassword,
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      newPassword: "",
      confirmationPassword: "",
    },
    onSubmit: (_values) => {
      setResetted(true);
    },
  });

  function renderRequestCodeForm() {
    return (
      <form noValidate autoComplete="off" onSubmit={stepSendEmail.handleSubmit}>
        <BackLink execute={() => history.push("/login")} />
        <FormLabel>Send reset password code</FormLabel>
        {isError ? <Alert severity="error">{error.message}</Alert> : null}

        <TextField
          error={!!stepSendEmail.errors.email}
          id="email"
          label="Email"
          type="email"
          value={stepSendEmail.values.email}
          helperText={stepSendEmail.errors.email}
          onChange={stepSendEmail.handleChange}
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Send {isLoading ? <CircularProgress /> : null}
        </Button>
      </form>
    );
  }

  function renderConfirmCodeForm() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={stepConfirmCode.handleSubmit}
      >
        <BackLink execute={() => setCodeSent(false)} />
        <FormLabel>Confirm code</FormLabel>
        {isError ? <Alert severity="error">{error.message}</Alert> : null}

        <TextField
          error={!!stepConfirmCode.errors.code}
          id="code"
          label="Confirmation code"
          type="text"
          value={stepConfirmCode.values.code}
          helperText={stepConfirmCode.errors.code}
          onChange={stepConfirmCode.handleChange}
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Confirm {isLoading ? <CircularProgress /> : null}
        </Button>
      </form>
    );
  }

  function renderResetPasswordForm() {
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={stepResetPassword.handleSubmit}
      >
        <FormLabel>Send reset password code</FormLabel>
        {isError ? <Alert severity="error">{error.message}</Alert> : null}

        <TextField
          error={!!stepResetPassword.errors.newPassword}
          id="newPassword"
          label="New password"
          type="password"
          value={stepResetPassword.values.newPassword}
          helperText={stepResetPassword.errors.newPassword}
          onChange={stepResetPassword.handleChange}
          variant="outlined"
          margin="normal"
        />
        <TextField
          error={!!stepResetPassword.errors.confirmationPassword}
          id="confirmationPassword"
          label="Confirmation password"
          type="password"
          value={stepResetPassword.values.confirmationPassword}
          helperText={stepResetPassword.errors.confirmationPassword}
          onChange={stepResetPassword.handleChange}
          variant="outlined"
          margin="normal"
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Reset {isLoading ? <CircularProgress /> : null}
        </Button>
      </form>
    );
  }

  function renderSuccessMessage() {
    return (
      <div className="success">
        <p>Your password has been reset.</p>
        <p>
          <Link to="/login">
            Click here to login with your new credentials.
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div id="reset_password">
      {!codeSent
        ? renderRequestCodeForm()
        : !confirmed
        ? renderConfirmCodeForm()
        : !resetted
        ? renderResetPasswordForm()
        : renderSuccessMessage()}
    </div>
  );
}

export default ResetPasswordForm;
