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
              <Image
                width={1920}
                height={1080}
                src="https://studio1design.com/wp-content/uploads/2019/11/STUDIO1DESIGN-landing-pages-s3-bg.jpg"
                alt=""
                onClick={handleImageClick}
              />
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                width={1920}
                height={1080}
                src="https://colorlib.com/wp/wp-content/uploads/sites/2/15_awesome-websites.jpg"
                alt=""
                onClick={handleImageClick}
              />
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                width={1920}
                height={1080}
                src="https://mllj2j8xvfl0.i.optimole.com/cb:pJlS~36fbd/w:1846/h:875/q:90/f:avif/https://themeisle.com/blog/wp-content/uploads/2019/10/Galleon-and-Caravan.png"
                alt=""
                onClick={handleImageClick}
              />
            </SwiperSlide>

            <SwiperSlide className={styles.slide}>
              <Image
                width={1920}
                height={1080}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4WzFd6_g5y8VnTQMG83Ws4BLVTT3u97TQ7Q&usqp=CAU"
                alt=""
                onClick={handleImageClick}
              />
            </SwiperSlide>
          </Swiper>
        </>
      </div>
    </div>
  );
}
