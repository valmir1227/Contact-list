import { signIn } from "next-auth/react";
import Link from "next/link";
import { FaGoogle, FaLinkedin } from "react-icons/fa";

import styles from "../../styles/SignUp.module.scss";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"], variable: "--inter-font" });

export default function index() {
  return (
    <div className={styles.container}>
      <main className={inter.variable}>
        <section className={styles.text}>
          <div className={styles.logo}>Logo</div>
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
        </section>

        <section className={styles.image}>
          <h2>Login</h2>
          <p>
            Já possui uma conta ?<br /> faça login.
          </p>
          <Link href="/sign-in">Entrar</Link>
        </section>
      </main>
    </div>
  );
}
