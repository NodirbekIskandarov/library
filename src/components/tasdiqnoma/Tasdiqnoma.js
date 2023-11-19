import React, { useEffect, useState } from "react";
import "./tasdiqnoma.css";
import Line from "../line/Line";
import fayl from "../../assets/images/Rectangle 39.png";
import download from "../../assets/images/Download.png";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { BASE_URL, CONFIRMATION } from "../../tools/urls";
import axios from "axios";
function Tasdiqnoma() {
  const { state } = useLocation();
const { t } = useTranslation()

const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${CONFIRMATION}`);
          setData(response.data);
          console.log(response.data)
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

  return (
    <div className="tasdiqnoma">
      <div className="container">
      <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("tasdiqnoma")}</h3>
            <p>{t("kutubxonamiz_yuridik_jihatdan_tashkil_topishi_xaqida")}</p>
          </div>
        </div>
        <div className="text">
          <div className="textPart">
            {lang==="uz" ? (<p>{data.translations.uz.body}</p>) : (<p>{data.translations.ru.body}</p>)}
          </div>
          <div className="filePart">
            <img src={fayl} alt="file" />
            {lang==="uz" ? (<p>{data.translations.uz.title}</p>) : (<p>{data.translations.ru.title}</p>)}
            <button>
              <img src={download} alt="down" /> PDF da yuklab olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasdiqnoma;
