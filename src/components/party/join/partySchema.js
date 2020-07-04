import * as Yup from "yup";

export const partySchema = Yup.object().shape({
  idParty: Yup.string()
    .max(
      150,
      "L'identifiant de la party ne doit pas contenir plus de 150 caractères."
    )
    .required("L'identifiant de la party est obligatoire."),
});
