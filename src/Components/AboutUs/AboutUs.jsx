import React from "react";
import "./AboutUs.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/swiper-bundle.css";

const AboutUs = () => {
  return (
    <section className="about-wrapper">
      <div className="inner-about">
        <Swiper {...sliderSettings}>
          <div className="about-one">
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="image-container">
                  <img src={item.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        <div className="about-two">
          <h1>Who is Cypher?</h1>
          <p>
            <span style={{ fontWeight: "bold" }}>Abdurraheem Pelumi </span>
            popularly known as "Cypher" is a Creative Mobile Photograper /
            Videographer based in Lagos amongst other things.
          </p>
          <p>
            Photography as he mostly say is an
            <span style={{ fontWeight: "bold" }}>"art" </span> that's waiting to
            be discovered or say a painting that's still a thought/idea that
            needs to be brought to life. There is really no limit to what we can
            achieve as human as all all the pictures you're about to see here
            were all shot and edited on a "Mobile Phone."
          </p>
          <p>Happy Swiping!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
