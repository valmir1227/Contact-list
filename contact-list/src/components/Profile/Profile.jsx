import { useState } from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import styles from "../../components/Profile/profile.module.scss";
import avatar from "../../assets/avatar.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Modal } from "../Modal/Modal";

export default function Profile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (event) => {
    setSelectedImage(event.target.src);
  };

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

      <div className={styles.galerry}>
        <>
          {selectedImage && (
            <Modal
              image={selectedImage}
              onClose={() => setSelectedImage(null)}
            />
          )}
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className={styles.slide}>
              <img
                src="https://i.pinimg.com/736x/53/1b/90/531b90e1008701cd6c71a38d6d2d0b59.jpg"
                onClick={handleImageClick}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfP9-hu2VceVLh0MEBX5RuAT2n4mJUFF8H4Q&usqp=CAU"
                onClick={handleImageClick}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                src="https://studio1design.com/wp-content/uploads/2019/11/STUDIO1DESIGN-landing-pages-s3-bg.jpg"
                onClick={handleImageClick}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                src="https://www.creativefabrica.com/wp-content/uploads/2021/03/24/Interior-Design-Landing-Page-Graphics-9910523-1-580x386.jpg"
                onClick={handleImageClick}
              />
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <img
                src="https://media.gettyimages.com/id/1183718913/pt/vetorial/landing-page-template-abstract-design-with-green-gradient-color-trendy-background.jpg?s=612x612&w=gi&k=20&c=cp8f8oFC0OF7jALPAHyxOKNdCCmLzAT1JuHn-WRO-2A="
                onClick={handleImageClick}
              />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}
