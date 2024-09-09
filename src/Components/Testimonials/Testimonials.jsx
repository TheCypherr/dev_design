import React from "react";
import "./Testimonials.css";
import { sliderSettings } from "../../utils/commonTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Testimonials = () => {
  return (
    <section className="t-wrapper">
      <div className="testimonials">
        <h1>Testimonials</h1>
        <h3>What people have to say about Cypher</h3>
        <div className="text-container">
          <Swiper {...sliderSettings}>
            <SwiperSlide>
              <div className="comment">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, voluptatibus magni expedita assumenda nihil autem
                  tempora ad nemo doloribus repellendus!
                </h5>
                <div className="name">Tolani</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="comment">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, voluptatibus magni expedita assumenda nihil autem
                  tempora ad nemo doloribus repellendus!
                </h5>
                <div className="name">Kemi</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="comment">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, voluptatibus magni expedita assumenda nihil autem
                  tempora ad nemo doloribus repellendus!
                </h5>
                <div className="name">Ade</div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="comment">
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, voluptatibus magni expedita assumenda nihil autem
                  tempora ad nemo doloribus repellendus!
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
