import * as Yup from "yup";

export const trackSchema = Yup.object().shape({
  title: Yup.string()
    .max(150, "Le titre du son ne doit pas contenir plus de 150 caractères.")
    .required("Le titre du son est obligatoire."),
});
