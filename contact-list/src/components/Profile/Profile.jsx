import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import styles from "../../components/Profile/profile.module.scss";
import avatar from "../../assets/avatar.jpg";

export default function Profile() {
  return (
    <div className={styles.container}>
      <section className={styles.profile}>
        <div className={styles.profileContainer}>
          <div className={styles.avatar}>
            <Image src={avatar} alt="" />
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
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
          architecto voluptates repellat voluptatibus quo corporis dolore
          assumenda magni. Eos dicta iure voluptatibus! Animi possimus, sed
          error qui, recusandae fugit velit delectus pariatur magnam veniam
          eligendi libero quis ut eveniet aspernatur id ullam, tempora
          distinctio!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi a
          soluta molestiae eius aut dolorem, eveniet quod tenetur accusantium
          vero asperiores odit rerum at magni, expedita nesciunt, ab totam
          dolore adipisci libero voluptates nam! Explicabo, ex libero. Amet,
          illum commodi. ae eius aut dolorem, eveniet quod tenetur accusantium
          vero asperiores odit rerum at magni, expedita nesciunt, ab totam
          dolore adipisci libero voluptates nam! Explicabo, ex libero. Amet,
          illum commodi.
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
    </div>
  );
}
