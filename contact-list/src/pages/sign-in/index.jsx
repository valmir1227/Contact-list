import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/signIn.module.scss";
<<<<<<< HEAD
import Logo from "@/components/Logo/Logo";
=======
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

const schema = Yup.object().shape({
  email: Yup.string()
    .email("Endereço de e-mail inválido")
    .required("Este campo é obrigatório"),
  password: Yup.string()
    .required("Este campo é obrigatório")
    .min(8, "A senha deve ter pelo menos 8 caracteres"),
});

export default function Index() {
  const { data: session } = useSession();
  console.log(session?.accessToken);

  async function postData() {
    const response = await axios.post(
      "https://contacts.kanel.com.br/v1/login",
      {
        headers: {
          Authorization: `Bearer ${session?.accessToken}`,
        },
      }
    );
    console.log(response.data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
>>>>>>> 1d8f7199d003b7678be71d93f90884217440035d

  return (
    <div className={styles.container}>
      <main className={inter.variable}>
        <motion.section
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.text}
        >
          <Logo />
          <h1>Entre com a sua conta</h1>
          <button onClick={postData}>Axios Post</button>
          <p>Entrar usando sua conta social.</p>
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
            <input type="email" {...register("email")} />
            {errors.email && (
              <span className={styles.formError}>{errors.email.message}</span>
            )}
            <input type="password" {...register("password")} />
            {errors.password && (
              <span className={styles.formError}>
                {errors.password.message}
              </span>
            )}

            <Link href="/">Esqueceu a senha?</Link>
            <button type="submit">Entrar</button>
          </form>
        </motion.section>

        <motion.section
          initial={{ x: -2000, width: "28.7rem" }}
          animate={{
            x: 0,
            width: ["28.7rem", "52rem", "28.7rem"],
            transition: { duration: 1 },
          }}
          exit={{ width: "28.7rem" }}
          className={styles.image}
        >
          <h2>Novo por aqui ?</h2>
          <p>
            Cadastre-se agora e descubra <br /> novas oportunidades!
          </p>
          <Link href="/sign-up">Cadastrar</Link>
        </motion.section>
      </main>
    </div>
  );
}
