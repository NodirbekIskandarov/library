
import "./treyners.css";
import Line from "../line/Line";
import telegram from "../../assets/images/telegram-fill (1).png";
import instagram from "../../assets/images/instagram-fill (1).png";
import facebook from "../../assets/images/facebook-circle-fill (1).png";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, LANDING } from "../../tools/urls";

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

function Treyners() {
  const { t } = useTranslation();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"));
  // console.log(lang);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${LANDING}`);
        setData(response.data.treners);
        // console.log(response.data.treners);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

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
    <div className="treyners">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h2>{t("bizning_trenerlar")}</h2>
            <p>
              {t(
                "darslar_oz_ishining_mutaxassislari_tomonidan_tashkillashtiriladi"
              )}
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
                        <img src={item.image} alt="image" className="img" />
                        {lang === "uz" ? (
                          <h3>{item.full_name_uz}</h3>
                        ) : lang==="ru" ? (
                          <h3>{item.full_name_ru===null ? item.full_name : item.full_name_ru}</h3>
                        ) : lang==="en" ? (<h3>{item.full_name_en===null ? item.full_name : item.full_name_en}</h3>) : (<h3>{item.full_name}</h3>)}
                        {lang === "uz" ? (
                          <p>{item.about_uz}</p>
                        ) : lang==="ru" ? (
                          <p>{item.about_ru===null ? item.about : item.about_ru}</p>
                        ) : lang==="en" ? (<p>{item.about_en===null ? item.about : item.about_en}</p>) : (<p>{item.about}</p>)}
                        <div className="socials">
                          <a href={item.telegram}><img src={telegram} alt="social"/></a>
                          <a href={item.instagram}><img src={instagram} alt="social"/></a>
                          <a href={item.facebook}><img src={facebook} alt="social"/></a>
                        </div>
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

export default Treyners;
