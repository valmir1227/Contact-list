import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
import { FaGoogle, FaLinkedin } from "react-icons/fa";

import styles from "../../styles/signUp.module.scss";
import Logo from "@/components/Logo/Logo";

const schema = yup.object().shape({
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

export default function Index() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <main className={inter.variable}>
        <motion.section
          initial={{ x: 2000, width: "28.7rem" }}
          animate={{
            x: 0,
            width: ["28.7rem", "52rem", "28.7rem"],
            transition: { duration: 1 },
          }}
          exit={{ width: "28.7rem" }}
          className={styles.image}
        >
          <h2>Login</h2>
          <p>
            Já possui uma conta ?<br /> faça login.
          </p>
          <Link href="/sign-in">Entrar</Link>
        </motion.section>

        <motion.section
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.text}
        >
          <Logo />
          <h1>Criar Conta</h1>
          <p>Registre-se com suas redes sociais.</p>
          <div className={styles.sciLogin}>
            <FaLinkedin
              size={25}
              cursor="pointer"
              color="#0e76a8"
              onClick={() => signIn("linkedin")}
            />
            <FaGoogle
              size={25}
              cursor="pointer"
              color="#f18957"
              onClick={() => signIn("google")}
            />
          </div>
          <div className={styles.divider}>
            <hr />
            OU <hr />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Nome" {...register("name")} />
            {errors.name && (
              <span className={styles.formError}>{errors.name.message}</span>
            )}
            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && (
              <span className={styles.formError}>{errors.email.message}</span>
            )}
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
            {errors.password && (
              <span className={styles.formError}>
                {errors.password.message}
              </span>
            )}
            <div>
              <input
                type="checkbox"
                id="aceito-termos"
                name="aceito-termos"
                required
              />
              Aceito os <Link href="/privacy/policy">termos e condições.</Link>
            </div>

            <button type="submit">Registrar</button>
          </form>
        </motion.section>
      </main>
    </div>
  );
}
