import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/utils/signUpSchema";

import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
import { FaGoogle, FaLinkedin } from "react-icons/fa";

import styles from "../../styles/signUp.module.scss";
import Logo from "@/components/Logo/Logo";

export default function SignUp() {
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
        <Logo />

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
