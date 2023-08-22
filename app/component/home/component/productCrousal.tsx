"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import Panda from "../../../../public/images/panda.jpg";
import Wedding1 from "../../../../public/images/beautiful-young-woman-wearing-sari.jpg";
import Wedding2 from "../../../../public/images/bride-groom-pose-large-circle-lilac-garden.jpg";
import Wedding3 from "../../../../public/images/happy-bridesmaids-are-photographed-near-old-house.jpg";
import Wedding4 from "../../../../public/images/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg";
import Wedding5 from "../../../../public/images/khadija-yousaf-lKwp3-FQomY-unsplash.jpg";
import Image from "next/image";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

const ProductCrousal = () => {
  return (
    <div className="w-full container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: "", clickable: true }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        spaceBetween={0}
      >
        <SwiperSlide>
          <Image
            src={Panda}
            alt="Image"
            className="w-[250px] h-[300px]"
            width={300}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Wedding1}
            alt="Image"
            className="w-[250px] h-[300px]"
            width={300}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Wedding2}
            alt="Image"
            className="w-[250px] h-[300px]"
            width={300}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Wedding3}
            alt="Image"
            className="w-[250px] h-[300px]"
            width={300}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Wedding4}
            alt="Image"
            className="w-[250px] h-[300px]"
            width={300}
            height={400}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={Wedding5}
            alt="Image"
            className="w-[250px] h-[300px]"
            width={300}
            height={400}
          />
        </SwiperSlide>
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{ color: "black", width: "20px", height: "20px" }}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ color: "black", width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCrousal;
