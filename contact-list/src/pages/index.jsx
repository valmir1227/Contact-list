import Profile from "@/components/Profile/Profile";
import styles from "../styles/home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <Profile />
      <Profile />
    </main>
  );
}
