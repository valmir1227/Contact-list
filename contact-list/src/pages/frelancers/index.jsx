import Profile from "@/components/Profile/Profile";
import styles from "../../styles/frelancers.module.scss";

export default function Index() {
  return (
    <main className={styles.container}>
      <Profile />
      <Profile />
    </main>
  );
}
