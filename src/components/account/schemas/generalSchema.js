import * as Yup from "yup";

export const generalSchema = Yup.object().shape({
  newLastname: Yup.string()
    .min(2, "Votre nom doit comporter minimum 2 caractères.")
    .max(50, "Votre nom doit comporter maximum 50 caractères.")
    .required("Required"),
  newFirstname: Yup.string()
    .min(2, "Votre prénom doit comporter minimum 2 caractères.")
    .max(50, "Votre prénom doit comporter maximum 50 caractères.")
    .required("Required"),
});
