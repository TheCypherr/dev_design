import React, { useRef, useEffect } from "react";
import "./Testimonials.css";
import { sliderSettings } from "../../utils/commonTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { useScroll } from "../../utils/ScrollContext";

const Testimonials = () => {
  const targetRef = useRef(null);
  const { registerRef } = useScroll();

  useEffect(() => {
    registerRef("testScroll", targetRef.current);
  }, [registerRef]);

  return (
    <section className="t-wrapper" ref={targetRef}>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <h3>What people have to say about Cypher</h3>
        <div className="text-container">
          <Swiper {...sliderSettings}>
            <SwiperSlide>
              <div className="comment">
                <h5>
                  Pelumi's photography isn't just about snapping pictures; it's
                  about telling stories. His dedication and passion shine
                  through every shot.
                </h5>
                <div className="name">Tife</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="comment">
                <h5>
                  Cypher has an incredible gift for capturing moments that most
                  people would miss. His creativity and hard work are truly
                  inspiring.
                </h5>
                <div className="name">Cynthia</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="comment">
                <h5>
                  Pelumi's work feels so effortless, yet it's clear how much
                  thought and heart goes into each image. His eye for detail is
                  amazing.
                </h5>
                <div className="name">Ade</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="comment">
                <h5>
                  Cypher's commitment to his craft is unreal. He consistently
                  turns everyday moments into stunning visuals with a style
                  that's all his own.
                </h5>
                <div className="name">Bola</div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
