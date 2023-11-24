import "./fotogalereya.css";
import img1 from "../../assets/images/fotogalereya1.png";
import img2 from "../../assets/images/fotogalereya2.png";
import img3 from "../../assets/images/fotogalereya3.png";
import img4 from "../../assets/images/fotogalereya4.png";
import img5 from "../../assets/images/fotogalereya5.png";
import img6 from "../../assets/images/fotogalereya6.png";
import Line from "../line/Line";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { BASE_URL, FOTOGLEREYA } from "../../tools/urls";
import axios from "axios";
import { useEffect, useState } from "react";
function Fotogalereya() {
  // const data = [
  //   {
  //     img: img1,
  //     title: "Tadbir nomi",
  //     date: "12.04.2023",
  //     text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
  //   },
  //   {
  //     img: img2,
  //     title: "Tadbir nomi",
  //     date: "12.04.2023",
  //     text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
  //   },
  //   {
  //     img: img3,
  //     title: "Tadbir nomi",
  //     date: "12.04.2023",
  //     text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
  //   },
  //   {
  //     img: img4,
  //     title: "Tadbir nomi",
  //     date: "12.04.2023",
  //     text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
  //   },
  //   {
  //     img: img5,
  //     title: "Tadbir nomi",
  //     date: "12.04.2023",
  //     text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
  //   },
  //   {
  //     img: img6,
  //     title: "Tadbir nomi",
  //     date: "12.04.2023",
  //     text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
  //   },
  // ];


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
                  <img src={item.image} className="img" />
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
