import React from "react";
import "./slider.css";

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item className="sliderIn">
          <div className="blurImage">
            <div className="textPart">
              <h2>Eng yaxshi axborot kutubxona mutaxasisi ko'rik tanlovida qatnashing</h2>
              <button>Batafsil</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderIn">
          <div className="blurImage">
            <div className="textPart">
              <h2>Eng yaxshi axborot kutubxona mutaxasisi ko'rik tanlovida qatnashing</h2>
              <button>Batafsil</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderIn">
          <div className="blurImage">
            <div className="textPart">
              <h2>Eng yaxshi axborot kutubxona mutaxasisi ko'rik tanlovida qatnashing</h2>
              <button>Batafsil</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;