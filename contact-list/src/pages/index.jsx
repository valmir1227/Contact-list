import { motion } from "framer-motion";
import Header from "@/components/Header/header";
import styles from "../styles/home.module.scss";
import { useEffect, useState } from "react";

const TextAnimation = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[currentTextIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((currentTextIndex + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentTextIndex, texts.length]);

  useEffect(() => {
    setCurrentText(texts[currentTextIndex]);
  }, [currentTextIndex, texts]);

  const letterVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <motion.p variants={textVariants} initial="hidden" animate="visible">
      {currentText.split("").map((letter, index) => (
        <motion.span key={index} variants={letterVariants}>
          {letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default function Home() {
  const texts = ["desenvolver a sua ideia."];
  return (
    <main className={styles.container}>
      <Header />
      <section className={styles.content}>
        <div className={styles.text}>
          <h1>
            Encontre o profissional perfeiro para <br />{" "}
            <TextAnimation texts={texts} />
          </h1>
          <button>Publicar projeto</button>
          <button>Sou Freelancer</button>
        </div>
      </section>
    </main>
  );
}
