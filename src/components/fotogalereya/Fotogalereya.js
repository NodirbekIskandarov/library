import "./fotogalereya.css";
import Line from "../line/Line";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { BASE_URL, FOTOGLEREYA } from "../../tools/urls";
import axios from "axios";
import { useEffect, useState } from "react";
function Fotogalereya() {
  const { state } = useLocation();
  const { t } = useTranslation() 

  const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let lang = JSON.parse(localStorage.getItem("lang"))
    // console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${FOTOGLEREYA}`);
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
    if (loading) return <p className="loading"><img src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loader"/></p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="fotogalereya">
      <div className="container">
      <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("fotogalereya")}</h3>
            <p>{t("tadbirlardan_estalik_suratlar")}</p>
          </div>
        </div>
        <div className="holidays">
          {data.map((item, index) => {
            return (
              <div key={index} className="bigbox">
                <div className="box" key={index}>
                  <img src={item.image} className="img" alt="rasm"/>
                  {lang==="uz" ? (<h3>{item.name_uz}</h3>) : lang==="ru" ? (<h3>{item.name_ru===null ? item.name : item.name_ru}</h3>) : lang==="en" ? (<h3>{item.name_en===null ? item.name : item.name_en}</h3>) : (<h3>{item.name}</h3>)}
                  <h5>{item.created}</h5>
                  {lang==="uz" ? (<p>{item.about_uz}</p>) : lang==="ru" ? (<p>{item.about_ru===null ? item.about : item.about_ru}</p>) : lang==="en" ? (<p>{item.about_en===null ? item.about : item.about_en}</p>) : (<p>{item.about}</p>)}
                  <Link className="link" to={`/galery/${item.id}`}>
                    <p>{t("batafsil")}</p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Fotogalereya;
