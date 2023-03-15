import Header from "@/components/Header/header";
import Link from "next/link";
import styles from "../styles/frelancers.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Header />
    </main>
  );
}
