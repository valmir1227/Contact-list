import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import styles from "../../styles/signIn.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import Logo from "@/components/Logo/logo";
import axios from "axios";
import { useEffect } from "react";
import { schema } from "@/utils/signInSchema";

export default function SignIn() {
  const { data: session, status } = useSession();
  console.log("STATUS", status);
  console.log("Session", session);

  async function fetchData(session) {
    if (session) {
      const url = "url/login";
      const config = {
        headers: { Authorization: `Bearer ${session.accessToken}` },
      };

      try {
        const response = await axios.post(url, {}, config);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    fetchData(session);
  }, [session]);

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
