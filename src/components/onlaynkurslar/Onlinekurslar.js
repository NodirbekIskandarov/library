import React, { useEffect, useState } from "react";
import Line from "../line/Line";
import clock from "../../assets/images/Time Circle 6.png";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL, ONLINE } from "../../tools/urls";
function Onlaynkurslar() {
  const { state } = useLocation();
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"));
  // console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${ONLINE}`);
        setData(response.data);
        // console.log(response.data)
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
    <div className="kurslar">
      <div className="container">
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("kurs_haqida")}</h3>
            <p>{t("online_talim_yonalishidagi_kurslar")}</p>
          </div>
        </div>
        <div className="information">
          {data.map((item, index) => {
            return (
              <div key={index} className="box">
                <img src={item.image} alt="rasm" />
                {lang === "uz" ? (
                  <h3>{item.name_uz}</h3>
                ) : lang === "ru" ? (
                  <h3>{item.name_ru === null ? item.name : item.name_ru}</h3>
                ) : lang === "en" ? (
                  <h3>{item.name_en === null ? item.name : item.name_en}</h3>
                ) : (
                  <h3>{item.name}</h3>
                )}
                {lang === "uz" ? (
                  <p>{item.sub_name_uz}</p>
                ) : lang === "ru" ? (
                  <p>
                    {item.sub_name_ru === null
                      ? item.sub_name
                      : item.sub_name_ru}
                  </p>
                ) : lang === "en" ? (
                  <p>
                    {item.sub_name_en === null
                      ? item.sub_name
                      : item.sub_name_en}
                  </p>
                ) : (
                  <p>{item.sub_name}</p>
                )}
                <p>
                  <img src={clock} alt="clock" />{" "}
                  {lang === "uz" ? (
                    <span>{item.duration_uz}</span>
                  ) : lang === "ru" ? (
                    <span>
                      {item.duration_ru === null
                        ? item.duration
                        : item.duration_ru}
                    </span>
                  ) : lang === "en" ? (
                    <span>
                      {item.duration_en === null
                        ? item.duration
                        : item.duration_en}
                    </span>
                  ) : (
                    <span>{item.duration}</span>
                  )}
                </p>
                <div className="narx">
                  <Link className="link" to={`/batafsil/${item.id}`}>
                    <button>{t("batafsil")}</button>
                  </Link>
                  <div className="p">
                    <p>{t("narx")}</p> <span>{item.amount}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Onlaynkurslar;
