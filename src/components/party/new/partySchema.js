import * as Yup from "yup";

export const partySchema = Yup.object().shape({
  name: Yup.string()
    .max(150, "Le nom de la party ne doit pas contenir plus de 150 caractères.")
    .required("Le nom de la party est obligatoire."),
});
