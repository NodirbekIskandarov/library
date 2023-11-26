import React, { useEffect, useState } from "react";
import "./partners.css";
import Line from "../line/Line";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import aoka from '../../assets/images/aoka_logo.png'
import { useTranslation } from "react-i18next";
import { BASE_URL, LANDING } from "../../tools/urls";
import axios from "axios";
function Partners() {


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}
  const {t} = useTranslation()


  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"));
  console.log(lang);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${LANDING}`);
        setData(response.data.partner);
        console.log(response.data.partner);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
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
          {data &&
              data.map((item, index) => {
                return (
                  <div key={index}>
                    <div className="caruselItem">
                      <div className="box">
                        <a href={item.url}>

                        <img src={aoka} alt="rasm" className="img" />
                        </a>
                        
                      </div>
                    </div>
                  </div>
                );
              })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partners;
