import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("Endereço de e-mail inválido")
    .required("Este campo é obrigatório"),
  password: yup
    .string()
    .required("Este campo é obrigatório")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});
