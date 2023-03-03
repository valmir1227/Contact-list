import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

import styles from "../../styles/SignIn.module.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function index() {
  return (
    <div className={styles.container}>
      <main className={inter.variable}>
        <section className={styles.text}>
          <div className={styles.logo}>Logo</div>
          <h1>Entre com a sua conta</h1>
          <p>Entrar usando sua conta social</p>
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
        </section>

        <section ection className={styles.image}>
          <h2>Novo aqui?</h2>
          <p>
            Cadastre-se agora e descubra <br /> novas oportunidades!
          </p>
          <Link href="/signup">Cadastrar</Link>
        </section>
      </main>
    </div>
  );
}
