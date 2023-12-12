import React, { useEffect, useState } from "react";
import "./tarix.css";
import Line from "../line/Line";
import books from "../../assets/images/books-1617327_1280 1.png";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL, HISTORY } from "../../tools/urls";
function Tarix() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"));
  // console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${HISTORY}`);
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
    <div className="tarix">
      <div className="container">
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="main">
          <div className="text1">
            <div className="title">
              <Line />
              <div className="titlePart">
                <div>
                  {lang === "uz" ? (
                    <h2>{data.title_uz}</h2>
                  ) : lang === "ru" ? (
                    <h2>
                      {data.title_ru === null ? data.title : data.title_ru}
                    </h2>
                  ) : lang === "en" ? (
                    <h2>
                      {data.title_en === null ? data.title : data.title_en}
                    </h2>
                  ) : (
                    <h2>{data.title}</h2>
                  )}
                </div>
                <div>
                  {lang === "uz" ? (
                    <p>{data.subtitle_uz}</p>
                  ) : lang === "ru" ? (
                    <p>
                      {data.subtitle_ru === null
                        ? data.subtitle
                        : data.subtitle_ru}
                    </p>
                  ) : lang === "en" ? (
                    <p>
                      {data.subtitle_en === null
                        ? data.subtitle
                        : data.subtitle_en}
                    </p>
                  ) : (
                    <p>{data.subtitle}</p>
                  )}
                </div>
              </div>
            </div>
            <p className="textp">
              <div className="image">
                <img src={data.file} alt="books image" />
              </div>
              Lorem ipsum dolor sit amet consectetur. Ipsum sollicitudin egestas
              posuere a. Nisl est commodo adipiscing donec et tellus eu facilisi
              tincidunt. Euismod morbi aenean enim amet adipiscing. Viverra diam
              senectus quis suspendisse lacus sollicitudin tellus. Neque
              malesuada sed nam viverra. Amet nulla ornare faucibus tristique.
              Ut mauris viverra et volutpat morbi imperdiet. Adipiscing integer
              ornare faucibus id pharetra quam senectus. Sed mi viverra quis
              arcu nec lectus scelerisque. Ullamcorper non vel eu quam accumsan
              gravida viverra convallis in. Ornare maecenas velit fringilla
              dolor lectus felis elementum. Sed vel purus neque quam nisl
              habitasse tempus felis. Consequat maecenas iaculis mattis at
              quisque elementum dolor. Tortor tincidunt lectus amet cras quis
              dignissim cursus. Amet tellus mattis leo commodo pulvinar etiam
              turpis sit. Rutrum hac sem habitant a nisi elementum scelerisque.
              Nunc id id in tortor pretium at id habitant. Mauris amet aenean
              eros euismod. Morbi at massa arcu in laoreet sem ut sodales nunc.
              Ut mauris eros amet maecenas phasellus. Lacus tristique viverra
              duis donec odio laoreet pharetra venenatis sagittis. Vehicula amet
              senectus lorem et cursus id feugiat. Duis enim at ac consequat
              fringilla. Purus maecenas placerat cursus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarix;
