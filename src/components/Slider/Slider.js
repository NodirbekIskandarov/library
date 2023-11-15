import React from "react";
import "./slider.css";

import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from "react-i18next";
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  const { t } = useTranslation();
  return (
    <div className="slider">
      <Carousel>
        <Carousel.Item className="sliderIn">
          <div className="blurImage">
            <div className="textPart">
              <h2>Eng yaxshi axborot kutubxona mutaxasisi ko'rik tanlovida qatnashing</h2>
              <button>{t("batafsil")}</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderIn">
          <div className="blurImage">
            <div className="textPart">
              <h2>Eng yaxshi axborot kutubxona mutaxasisi ko'rik tanlovida qatnashing</h2>
              <button>{t("batafsil")}</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="sliderIn">
          <div className="blurImage">
            <div className="textPart">
              <h2>Eng yaxshi axborot kutubxona mutaxasisi ko'rik tanlovida qatnashing</h2>
              <button>{t("batafsil")}</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;