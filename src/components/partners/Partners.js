import React from "react";
import "./partners.css";
import Line from "../line/Line";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aoka from '../../assets/images/aoka_logo.png'
import tatu from '../../assets/images/W73eM8T-hn5cLRoa_rQWKshn3eUutXvm.png'
import logot from '../../assets/images/logot.png'
import { useTranslation } from "react-i18next";
function Partners() {
  const {t} = useTranslation()
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="partners">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h2>{t("bizning_hamkorlar")}</h2>
            <p>{t("ziyo_ulashishimizda_bizni_doimo_qollab_quvvatlovchi_tashkilotlar")}
            </p>
          </div>
        </div>
        <div className="carusel">
          <Slider {...settings}>
            <div>
              <img src={aoka} alt="Slide 1" />
            </div>
            <div>
              <img src={tatu} alt="Slide 2" />
            </div>
            <div>
              <img src={logot} alt="Slide 3" />
            </div>
            <div>
              <img src={logot} alt="Slide 3" />
            </div>
            <div>
              <img src={logot} alt="Slide 3" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partners;
