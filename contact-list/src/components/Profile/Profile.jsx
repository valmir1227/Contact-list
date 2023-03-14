import { useState } from "react";
import Image from "next/image";

import avatar from "../../assets/avatar.jpg";

import { AiFillStar } from "react-icons/ai";
import styles from "../../components/Profile/profile.module.scss";
import Gallery from "../Gallery/Gallery";

export default function Profile() {
  const [showMore, setShowMore] = useState(false);

 

  const text =
    'Olá, Meu nome é Rodrigo Pinheiro Sou especialista em implementação de E-commerce.\nRealizo toda implementação e configuração de E-commerce para Loja fisica ou para\nquem esta começando um novo negócio Online.Eu mesmo executo todo o projeto sem terceirizações.\nConfiguro todos os ERPS(Sistema de Gestão) Existente no mercado Desde a recepção de pedidos, geração de NF a\netapa final de impressão de etiquetas para envio, Realizando a Automatização do E-commerce.\nAuxilio a escolha da Melhor Plataforma de E-commerce(Tray,Loja integrada,Vtex, Nuvemshop.. etc)\nque mais se adequa a seu negócio. Trabalho sempre com Layout Profissionais UX|UI e Designers de ponta\nbuscando sempre a melhor usabilidade ao cliente. Integro todos os meios (getway) de pagamentos e logistícos\nexistente no mercado. E também realizo a integração a todos os Marketplaces disponíveis para integração.\nou seja Realizo projetos completos de Ecommerce do "0" até a primeira venda.\n\nComprovo minha experiência com meu portfólio de projetos realizados. Seria um enorme prazer participar do seu projeto.';

  const truncatedText = text.slice(0, 300) + (text.length > 300 ? "..." : "");
  const showReadMoreButton = text.length > 300 && !showMore;

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={styles.container}>
      <section className={styles.profile}>
        <div className={styles.profileContainer}>
          <div className={styles.avatar}>
            <Image src={avatar} alt="" loading="lazy" />
          </div>

          <div className={styles.info}>
            <h1>Maria Andrade Silva</h1>
            <p>Desenvolvedora front-end</p>
            <div>
              <AiFillStar color="#F5E000" />
              <AiFillStar color="#F5E000" />
              <AiFillStar color="#F5E000" />
              <AiFillStar color="black" />
              <AiFillStar color="black" />
            </div>
          </div>
        </div>
        <button>Contratar</button>
      </section>

      <div className={styles.description}>
        <p>
          {showMore ? text : truncatedText}
          {showReadMoreButton ? (
            <span onClick={handleShowMore}> Expandir</span>
          ) : (
            <span onClick={handleShowMore}> Esconder</span>
          )}
        </p>

        <div className={styles.hashtags}>
          <span>Front-end</span>
          <span>HTML</span>
          <span>Css</span>
          <span>React</span>
          <span>Next.js</span>
          <span>Design</span>
        </div>
      </div>

      <Gallery />
    </div>
  );
}
