// "use client";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
// import Panda from "../../../../public/images/panda.jpg";
// import Wedding1 from "../../../../public/images/beautiful-young-woman-wearing-sari.jpg";
// import Wedding2 from "../../../../public/images/bride-groom-pose-large-circle-lilac-garden.jpg";
// import Wedding3 from "../../../../public/images/happy-bridesmaids-are-photographed-near-old-house.jpg";
// import Wedding4 from "../../../../public/images/jeremy-wong-weddings-K41SGnGKxVk-unsplash.jpg";
// import Wedding5 from "../../../../public/images/khadija-yousaf-lKwp3-FQomY-unsplash.jpg";
// import Image from "next/image";
// import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "./style.css";

// const ProductCrousal = () => {
//   return (
//     <div className="w-full container">
//       <Swiper
//         effect="coverflow"
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         slidesPerView={"auto"}
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//         }}
//         pagination={{ el: ".swiper-pagination", clickable: true }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         spaceBetween={0}
//         className="swiper_container"
//       >
//         <SwiperSlide>
//           <div className="overflow-hidden w-[100%] bg-gray-200 text-black rounded-lg h-[550px] flex flex-col items-center justify-start">
//             <Image alt="Ss" src={Panda} />
//             <div className="w-[95%] mx-auto flex flex-col items-start xl:justify-start lg:justify-start justify-start">
//               <h1 className="mt-4 text-xl font-semibold text-gray-800 md:text-2xl lg:text-2xl ml-2">
//                Keio Music App
//               </h1>
//               <p className="mb-4 text-lg font-normal text-gray-800 md:text-lg lg:text-lg ml-2 text-start">
//                 Keio Music provides internaltional music surfing for 
//                 more than 3 million user.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="overflow-hidden w-[100%] bg-gray-200 text-black rounded-lg h-[550px] flex flex-col items-center justify-start">
//             <Image alt="Ss" src={Wedding1} />
//             <div className="w-[95%] mx-auto flex flex-col items-start xl:justify-start lg:justify-start justify-start">
//               <h1 className="mt-4 text-xl font-semibold text-gray-800 md:text-2xl lg:text-2xl ml-2">
//                Keio Music App
//               </h1>
//               <p className="mb-4 text-lg font-normal text-gray-800 md:text-lg lg:text-lg ml-2 text-start">
//                 Keio Music provides internaltional music surfing for 
//                 more than 3 million user.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="overflow-hidden w-[100%] bg-gray-200 text-black rounded-lg h-[550px] flex flex-col items-center justify-start">
//             <Image alt="Ss" src={Wedding2} />
//             <div className="w-[95%] mx-auto flex flex-col items-start xl:justify-start lg:justify-start justify-start">
//               <h1 className="mt-4 text-xl font-semibold text-gray-800 md:text-2xl lg:text-2xl ml-2">
//                Keio Music App
//               </h1>
//               <p className="mb-4 text-lg font-normal text-gray-800 md:text-lg lg:text-lg ml-2 text-start">
//                 Keio Music provides internaltional music surfing for 
//                 more than 3 million user.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="overflow-hidden w-[100%] bg-gray-200 text-black rounded-lg h-[550px] flex flex-col items-center justify-start">
//             <Image alt="Ss" src={Wedding3} />
//             <div className="w-[95%] mx-auto flex flex-col items-start xl:justify-start lg:justify-start justify-start">
//               <h1 className="mt-4 text-xl font-semibold text-gray-800 md:text-2xl lg:text-2xl ml-2">
//                Keio Music App
//               </h1>
//               <p className="mb-4 text-lg font-normal text-gray-800 md:text-lg lg:text-lg ml-2 text-start">
//                 Keio Music provides internaltional music surfing for 
//                 more than 3 million user.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="overflow-hidden w-[100%] bg-gray-200 text-black rounded-lg h-[550px] flex flex-col items-center justify-start">
//             <Image alt="Ss" src={Wedding4} />
//             <div className="w-[95%] mx-auto flex flex-col items-start xl:justify-start lg:justify-start justify-start">
//               <h1 className="mt-4 text-xl font-semibold text-gray-800 md:text-2xl lg:text-2xl ml-2">
//                Keio Music App
//               </h1>
//               <p className="mb-4 text-lg font-normal text-gray-800 md:text-lg lg:text-lg ml-2 text-start">
//                 Keio Music provides internaltional music surfing for 
//                 more than 3 million user.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//         <div className="overflow-hidden w-[100%] bg-gray-200 text-black rounded-lg h-[550px] flex flex-col items-center justify-start">
//             <Image alt="Ss" src={Wedding5} />
//             <div className="w-[95%] mx-auto flex flex-col items-start xl:justify-start lg:justify-start justify-start">
//               <h1 className="mt-4 text-xl font-semibold text-gray-800 md:text-2xl lg:text-2xl ml-2">
//                Keio Music App
//               </h1>
//               <p className="mb-4 text-lg font-normal text-gray-800 md:text-lg lg:text-lg ml-2 text-start">
//                 Keio Music provides internaltional music surfing for 
//                 more than 3 million user.
//               </p>
//             </div>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//       <div className="slider-controler">
//         <div className="swiper-button-prev slider-arrow">
//           <FontAwesomeIcon
//             icon={faArrowLeft}
//             style={{ color: "white", width: "20px", height: "20px" }}
//           />
//         </div>
//         <div className="swiper-button-next slider-arrow">
//           <FontAwesomeIcon
//             icon={faArrowRight}
//             style={{ color: "white", width: "20px", height: "20px" }}
//           />
//         </div>
//         <div className="swiper-pagination"></div>
//       </div>
//     </div>
//   );
// };

// export default ProductCrousal;


"use client";
import { WORK_OVERVIEW } from "@/app/constants/constants";
import RoundedCard from "./roundedcard";
import ProductCard from "./productCard";
import data from "./data.json"

const ProductSection = () => {
  return (
        <div className="flex flex-row items-center justify-around w-[100%] p-0 m-0">
          {/* <div
            className="
        grid 
        grid-row-1 
        sm:grid-row-1 
        md:grid-row-1 
        lg:grid-row-2
        xl:grid-row-2
        xl:gap-[60px]
        "
          >
            <div className="flex flex-row items-center justify-center w-[100%]">
              <div
                className="
        grid 
        grid-cols-1
        sm:grid-cols-1 
        md:grid-cols-2 
        lg:grid-cols-3
        xl:grid-cols-3
        2xl:grid-cols-3
        w-full  
        gap-11
        md:gap-11
        xl:gap-[60px]
        lg:gap-7
        "
              >
                {WORK_OVERVIEW.map((item, idx) => {
                  return (
                    <ProductCard
                      key={idx}
                      index={idx}
                      mainHeading={item.mainHeading}
                      paragraph={item.description}
                    />
                  );
                }).slice(0, 3)}
              </div>
            </div>
            <div className="flex flex-row items-start justify-center w-[100%]">
              <div
                className="
                grid 
                grid-cols-1
                sm:grid-cols-3 
                md:grid-cols-3 
                lg:grid-cols-3
                xl:grid-cols-3
                2xl:grid-cols-3
                p-3
                w-full  
                gap-6
                xl:gap-[60px]
        "
              >
                {WORK_OVERVIEW.map((item, idx) => {
                  return (
                    <ProductCard
                      key={idx}
                      index={idx}
                      mainHeading={item.mainHeading}
                      paragraph={item.description}
                    />
                  );
                }).slice(3, 6)}
              </div>
            </div>
          </div> */}
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {/* Product Cards */}
          {/* Create your product cards here */}
          {data.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ProductSection;

