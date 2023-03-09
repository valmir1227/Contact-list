import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

import styles from "../../styles/signUp.module.scss";
import Logo from "@/components/Logo/Logo";

export default function index() {
  return (
    <div className={styles.container}>
      <main className={inter.variable}>
        <motion.section
          initial={{ x: 2000, width: "28.7rem" }}
          animate={{
            x: 0,
            width: ["28.7rem", "48rem", "28.7rem"],
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
          <form onSubmit="">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Senha" required />
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
