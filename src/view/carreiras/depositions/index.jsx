import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./stylesSwiper.css";
import { CardDepositionWhite } from "../../../components/CardDepositions/WhiteVersion/WhiteVersion";

export const DepositionsCarreiras = ({ data }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      centeredSlides={true}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {data?.map(({ nameAgent, imageAgent, officeAgent, bodyDeposition }) => (
        <SwiperSlide key={nameAgent}>
          <CardDepositionWhite
            key={nameAgent}
            depoiment={bodyDeposition}
            name={nameAgent}
            imgDepositions={imageAgent?.url}
            office={officeAgent}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
