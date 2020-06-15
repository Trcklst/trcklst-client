import * as Yup from "yup";

export const identifierSchema = Yup.object().shape({
  newEmail: Yup.string()
    .trim()
    .required("L'email est requis.")
    .max(100, "Votre email ne peut pas avoir plus de 100 caractères.")
    .required("L'email est requis."),
  confirmEmail: Yup.string()
    .trim()
    .required("L'email est requis.")
    .oneOf([Yup.ref("newEmail")], "Les emails doivent correspondre."),
  password: Yup.string().trim().required("Le mot de passe est requis."),
});
