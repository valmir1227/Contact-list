import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle, FaLinkedin } from "react-icons/fa";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

import styles from "../../styles/signIn.module.scss";

export default function index() {
  return (
    <div className={styles.container}>
      <main className={inter.variable}>
        <motion.section
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.text}
        >
          <div className={styles.logo}>Logo</div>
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
          <form onSubmit="">
            <input type="email" />
            <input type="password" />
            <Link href="/">Esqueceu a senha?</Link>
            <button type="submit">Entrar</button>
          </form>
        </motion.section>

        <motion.section
          initial={{ x: -1000, width: "28.7rem" }}
          animate={{
            x: 0,
            width: ["28.7rem", "48rem", "28.7rem"],
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
