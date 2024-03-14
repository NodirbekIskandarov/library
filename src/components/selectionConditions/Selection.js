import React, { useEffect, useState } from "react";
import "./selection.css";
import girl from "../../assets/images/Pexels Photo by Antoni Shkraba.png";
import Line from "../line/Line";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../../tools/urls";
function Selection() {
  const { t } = useTranslation();

  const font = localStorage.getItem('font')

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"));
  const [checking, setChecking] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/competition/last/`);
        setData(response.data.conditions);
        if(response.data.conditions.length === 0) {
            setChecking(false)
        }
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
    <div className={checking ? "selection" : "selection_none"}>
      <div className="container">
        <div className="titlePart">
          <Line />
          <div>
            <h3>Eng yaxshi kutubxonachi ko'rik tanlovi</h3>
            <p>{t("tanlov_shartlari_quyidagilardan_iborat")}</p>
          </div>
        </div>
        <div className="conditions">
          <div className="conditionsPart">
            <div className="textPart">
              {data.map((item, index) => {
                return (
                  <div key={index} className="singleText">
                    <div className="countPart">
                      <span>{index + 1}</span>
                    </div>
                    {lang === "uz" ? (
                      <p className={`${font}p`}>{item.body_uz}</p>
                    ) : lang === "ru" ? (
                      <p className={`${font}p`}>{item.body_ru === null ? item.body : item.body_ru}</p>
                    ) : lang === "en" ? (
                      <p className={`${font}p`}>{item.body_en === null ? item.body : item.body_en}</p>
                    ) : (
                      <p className={`${font}p`}>{item.body}</p>
                    )}
                  </div>
                );
              })}
            </div>
            <Link className="link" to="/registration">
              <button>{t("royhatdan_otish")}</button>
            </Link>
          </div>
          <div className="imagePart">
            <img src={girl} alt="girl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Selection;
