import { AiOutlineSearch } from "react-icons/ai";

import Logo from "../Logo/logo";
import styles from "../Header/header.module.scss";
import Link from "next/link";

export default function Header() {
  const isLoggedIn = false;

  return (
    <header className={styles.header}>
      <div className={styles.search}>
        <Logo />
        <form action="">
          <select>
            <option value="frelancers">Freelancers</option>
            <option value="projetos">Projetos</option>
          </select>
          <div className={styles.input}>
            <input type="text" placeholder="Buscar frelancer" />
            <AiOutlineSearch />
          </div>
        </form>
      </div>
      {isLoggedIn ? (
        <h1>User Logado</h1>
      ) : (
        <nav className={styles.navigation}>
          <Link href={"/login"}>Login</Link>
          <Link href={"/registrar"}>Cadastrar</Link>
          <Link href={"/"} className={styles.button}>
            Publicar Projeto
          </Link>
        </nav>
      )}
    </header>
  );
}
