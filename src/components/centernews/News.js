import "./news.css";
import Line from "../line/Line";
import img1 from "../../assets/images/Rectangle 9.png";
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

function News() {
  const { t } = useTranslation();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"))
  console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${LANDING}`);
        setData(response.data.news);
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
    <div className="news">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h2>{t("markaz_yangiliklari")}</h2>
            <p>{t("markazimiz_yangiliklaridan_doimo_bohabar_boling")}</p>
          </div>
        </div>
        <div className="carusel">
          <Slider {...settings}>
            {
                data && data.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className="caruselItem">
                                <div className="box">
                                    <img src={img1} alt="rasm" className="img"/>
                                    {lang==="uz" ? (<h3>{item.translations.uz.name}</h3>) : (<h3>{item.translations.ru.name}</h3>)}
                                    {lang==="uz" ? (<p>{item.translations.uz.description}</p>) : (<p>{item.translations.ru.description}</p>)}
                                </div>
                                <button className="btn">{t("batafsil")}</button>
                            </div>
                        </div>
                    )
                })
            }
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default News;
