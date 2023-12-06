import React, { useEffect, useState } from "react";
import { BASE_URL, NEWS_DETAIL } from "../../tools/urls";
import { useLocation, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { MdKeyboardArrowRight } from "react-icons/md";
import Line from "../line/Line";
import "./newsDetail.css";
import img from "../../assets/images/books.png";

function NewsDetail() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"));
  const pk = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${NEWS_DETAIL}/${pk.id}`);
        setData(response.data);
        console.log(response);
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
      <p className="loading">
        <img
          src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
          alt="loader"
        />
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="news_detail">
      <div className="container">
        <div className="image_part">
          <div className="image">
            <img src={data.image} alt="rasm" />
          </div>
          <div className="right_part">
            <div className="title">
              <Line />
              <div className="titlePart">
                <h3>{t("yangiliklar")}</h3>
                <p>{t("huquqiy_meyoriy_hujjatlar")}</p>
              </div>
            </div>
            {lang === "uz" ? (<p className="text">{data.translations.uz.description}</p>) : (<p className="text">{data.translations.ru.description}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
