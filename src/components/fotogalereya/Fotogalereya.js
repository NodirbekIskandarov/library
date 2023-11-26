import "./fotogalereya.css";
import Line from "../line/Line";
import { useLocation } from "react-router-dom";
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
    console.log(lang)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${FOTOGLEREYA}`);
          setData(response.data);
          console.log(response)
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
              <div className="bigbox">
                <div className="box" key={index}>
                  <img src={item.image} className="img" alt="rasm"/>
                  {lang==="uz" ? (<h3>{item.translations.uz.name}</h3>) : (<h3>{item.translations.ru.name}</h3>)}
                  <h5>{item.created}</h5>
                  {lang==="uz" ? (<p>{item.translations.uz.description}</p>) : (<p>{item.translations.ru.description}</p>)}
                  <button>
                    <p>{t("batafsil")}</p>
                  </button>
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
