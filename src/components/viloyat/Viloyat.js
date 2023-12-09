import React, { useEffect, useState } from "react";
import "./viloyat.css";
import Line from "../line/Line";
import website from "../../assets/images/Website.png";
import { useLocation, useParams } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import axios from "axios";
import { BASE_URL, REGION_ID } from "../../tools/urls";
function Viloyat() {
  const { state } = useLocation();

  const pk = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [content, setContent] = useState("");
  let lang = JSON.parse(localStorage.getItem("lang"));
  // console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${REGION_ID}/${pk.id}`);
        setData(response.data);
        console.log(response.data);
        const firstItem = response.data;
        setContent(firstItem.description);
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
    <div className="viloyat">
      <div className="container">
        <div className="locationOfPage">
          <p>Monitoring</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            {/* {lang==="uz" ? (<h3>{data.name_uz}</h3>) : lang==="ru" ? (<h3>{data.name_ru===null ? data.name : data.name_ru}</h3>) : lang==="en" ? (<h3>{data.name_en===null ? data.name : data.name_en}</h3>) : (<h3>{data.name}</h3>)} */}
            {lang === "uz" ? <h3>{data.name_uz}</h3> : <h3>{data.name_ru}</h3>}
            {lang === "uz" ? (
              <p>{data.name_uz} ma'lumotlari</p>
            ) : lang === "ru" ? (
              <p>
                {data.name_ru === null ? data.name : data.name_ru} ma'lumotlari
              </p>
            ) : lang === "en" ? (
              <p>
                {data.name_en === null ? data.name : data.name_en} ma'lumotlari
              </p>
            ) : (
              <p>{data.name} ma'lumotlari</p>
            )}
          </div>
        </div>
        <div className="image">
          <div className="imagePart">
            <img src={data.image} alt="logo" />
          </div>
          <div className="textPart">
            {/* <p>{data.translations.uz.about}</p> */}
            {lang === "uz" ? (
              <p>{data.about_uz}</p>
            ) : lang === "ru" ? (
              <h3>{data.about_ru === null ? data.about : data.about_ru}</h3>
            ) : lang === "en" ? (
              <h3>{data.about_en === null ? data.about : data.about_en}</h3>
            ) : (
              <h3>{data.about}</h3>
            )}
            <a href={data.site}>
              <button>
                <img src={website} alt="website" />
                Web saytiga o'tish
              </button>
            </a>
          </div>
        </div>
        <div className="maqsadPart">
          <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </div>
  );
}

export default Viloyat;
