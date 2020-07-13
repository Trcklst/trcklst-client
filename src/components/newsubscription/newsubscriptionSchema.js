import * as Yup from "yup";

export const newsubscriptionSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .length(16)
    .required(),
  cryptogramme: Yup.string()
    .length(3)
    .required(),
  month: Yup.string()
    .max(
      12,
      "L'identifiant de la party ne doit pas contenir plus de 150 caractères."
    )
    .required("L'identifiant de la party est obligatoire."),
});
