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
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
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
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("yangiliklar")}</h3>
            <p>{t("huquqiy_meyoriy_hujjatlar")}</p>
          </div>
        </div>
        <br />
        {lang === "uz" ? (
          <p className="text">
            <div className="image">
              <img src={data.image} alt="rasm" />
            </div>
            {data.description_uz}
          </p>
        ) : lang == "ru" ? (
          <p className="text">
            <div className="image">
              <img src={data.image} alt="rasm" />
            </div>
            {data.description_ru === ""
              ? data.description
              : data.description_ru}
          </p>
        ) : lang === "en" ? (
          <p className="text">
            <div className="image">
              <img src={data.image} alt="rasm" />
            </div>
            {data.description_en === ""
              ? data.description
              : data.description_en}
          </p>
        ) : (
          <p className="text">
            <div className="image">
              <img src={data.image} alt="rasm" />
            </div>
            {data.description}
          </p>
        )}
      </div>
    </div>
  );
}

export default NewsDetail;
