import Image from "next/image";
import styles from "./styles/page.module.scss";
import MainCard from "./components/MainCard";

export default function Home() {
  return (
    <main className={styles.main}>
      <MainCard />
    </main>
  );
}
