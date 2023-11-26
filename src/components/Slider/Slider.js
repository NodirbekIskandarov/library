import React, { useEffect, useState } from "react";
import "./slider.css";

import Carousel from 'react-bootstrap/Carousel';
import { useTranslation } from "react-i18next";
import { BASE_URL, LANDING } from "../../tools/urls";
import axios from "axios";
import { CarouselItem } from "react-bootstrap";
import { TbLoader } from "react-icons/tb";
function Slider() {
  const { t } = useTranslation();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"))
  // console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${LANDING}`);
        setData(response.data.sliders);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="loading"><img src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loader"/></p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="slider">
      <Carousel>
        {
          data && data.map((item, index) => {
            return (
              <CarouselItem key={index} className="sliderIn">
                <div className="blurImage">
                  <div className="textPart">
                    {lang==="uz" ? (<h2>{item.translations.uz.title}</h2>) : (<h2>{item.translations.ru.title}</h2>)}
                    <button>{t("batafsil")}</button>
                  </div>
                </div>
              </CarouselItem>
            )
          })
        }
      </Carousel>
    </div>
  );
}

export default Slider;