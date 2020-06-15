import * as Yup from "yup";

export const securitySchema = Yup.object().shape({
  oldPassword: Yup.string().trim().required("Le mot de passe est requis."),
  newPassword: Yup.string()
    .trim()
    .required("Le mot de passe est requis.")
    .min(8, "Votre mot de passe doit contenir au minimum 8 caractères.")
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins 1 chiffre.")
    .matches(
      /[a-z]/,
      "Le mot de passe doit contenir au minimum 1 lettre minuscule."
    )
    .matches(
      /[A-Z]/,
      "Le mot de passe doit contenir au minimum 1 lettre majuscule."
    ),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref("newPassword")], "Les mots de passe doivent correspondre.")
    .required("Le mot de passe de confirmation est requis."),
});
