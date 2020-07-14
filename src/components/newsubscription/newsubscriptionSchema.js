import * as Yup from "yup";

export const newsubscriptionSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .length(16, "Le numéro de carte bancaire est invalide.")
    .required("Le numéro de carte bancaire est requis."),
  cryptogramme: Yup.string()
    .min(3, "Le cryptogramme est invalide.")
    .max(4, "Le cryptogramme est invalide.")
    .required("Le cryptogramme est requis."),
  month: Yup.string()
    .min(2, "Le mois d'expiration est invalide.")
    .required("Le mois d'expiration est requis."),
  year: Yup.string()
    .length(4, "L'année d'expiration est invalide.")
    .required("L'année d'expiration est requise."),
  typeAbonnement: Yup.string()
    .ensure()
    .required("Le type d'abonnement est requis."),
});
