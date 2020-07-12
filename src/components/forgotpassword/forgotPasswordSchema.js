import * as Yup from "yup";

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .trim()
    .email("Votre email est invalide.")
    .required("L'email est obligatoire."),
});
