import React, { useState } from "react";
import Line from "../line/Line";
import "./tulov.css";
import click from "../../assets/images/click-white 1.png";
import payme from "../../assets/images/logo_01.png";
import uzum from "../../assets/images/article-original.png";
import { useTranslation } from "react-i18next";
function Tulov() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const { t } = useTranslation()
  return (
    <div className="tulov">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("kursni_sotib_olish_uchun_tolovni_amalga_oshiring")}</h3>
            <p>{t("online_kursni_sotib_olish_uchun_tolovni_amalga_oshiring")}</p>
          </div>
        </div>
        <div className="box">
          <div className="cart">
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              <img src={click} alt="click" />
            </label>
          </div>
          <div className="cart">
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              <img src={payme} alt="payme" />
            </label>
          </div>
          <div className="cart">
            <label>
              <input
                type="radio"
                value="option3"
                checked={selectedOption === "option3"}
                onChange={handleOptionChange}
              />
              <img src={uzum} alt="uzum" />
            </label>
          </div>
          <button>{t("davom_etish")}</button>
        </div>
      </div>
    </div>
  );
}

export default Tulov;
