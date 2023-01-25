import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./stylesSwiper.css";
import { CardDepositions } from "../../../components/CardDepositions/CardDepositions";

export function DepositionsView({ data }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 8000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      style={{
        margin: "0px auto",
        width: "100%",
        background: `var(--blue-40)`,
      }}
    >
      {data?.map(
        ({
          nameAgent,
          nameCompany,
          officeAgent,
          bodyDeposition,
          logoCompany,
          imageAgent,
        }) => (
          <SwiperSlide key={nameCompany}>
            <CardDepositions
              key={nameCompany}
              depoiment={bodyDeposition}
              name={nameAgent}
              company={logoCompany.url}
              imgDepositions={imageAgent.url}
              office={officeAgent}
            />
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
}
