import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";
import { Modal } from "../Modal/Modal";
import "swiper/css";
import "swiper/css/effect-coverflow";

import styles from "../Gallery/gallery.module.scss";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (event) => {
    setSelectedImage(event.target.src);
  };

  return (
    <div className={styles.galerry}>
      <>
        {selectedImage && (
          <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
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
  );
}
