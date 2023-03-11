import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("Por favor, preencha seu nome")
    .min(2, "Seu nome deve ter pelo menos 2 caracteres")
    .max(50, "Seu nome deve ter no máximo 50 caracteres")
    .matches(
      /^[a-zA-Z\s]*$/,
      "Seu nome não deve conter números ou caracteres especiais"
    ),
  email: yup
    .string()
    .email("Por favor, insira um e-mail válido")
    .required("Por favor, preencha seu e-mail"),
  password: yup
    .string()
    .required("Por favor, insira uma senha")
    .min(8, "Sua senha deve ter pelo menos 8 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Sua senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial"
    ),
});
