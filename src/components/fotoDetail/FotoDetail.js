import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { BASE_URL, FOTO_DETAIL } from "../../tools/urls";
import Line from "../line/Line";
import './fotoDetail.css'
import FotoDetailImage from "../fotoDetailImage/FotoDetailImage";

function FotoDetail() {
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
        const response = await axios.get(`${BASE_URL}/${FOTO_DETAIL}/${pk.id}`);
        setData(response.data);
        console.log(response.data);
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
    <div className="foto_detail">
      <div className="container">
        <div className="image_part">
          <div className="image">
            <FotoDetailImage images={data.images}/>
          </div>
          <div className="right_part">
            <div className="title">
              <Line />
              <div className="titlePart">
                <h3>{t("yangiliklar")}</h3>
                <p>{t("huquqiy_meyoriy_hujjatlar")}</p>
              </div>
            </div>
            {lang === "uz" ? (
              <p className="text">{data.description_uz}</p>
            ) : lang==="ru" ? (
              <p className="text">{data.description_ru==="" ? data.description : data.description_ru}</p>
            ) : lang==="en" ? (<p className="text">{data.description_en==="" ? data.description : data.description_en}</p>) : (<p className="text">{data.description}</p>)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FotoDetail;
