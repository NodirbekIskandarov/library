import React, { useState } from "react";
import Line from "../line/Line";
import "./sertifikat.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
function Sertifikat() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const { state } = useLocation();
const { t } = useTranslation()
  return (
    <div className="sertifikat">
      <div className="container">
      <div className="locationOfPage">
          <p>{t("oqish_uchun_shartnomani_online_amalga_oshiring")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("online_sertifikat_olish")}</h3>
            <p>{t("malumotlaringizni_taqdim_eting_va_sertifikatingizni_online_qabul_qiling")}
            </p>
          </div>
        </div>
        <div className="container2">
          <div className="forms">
            <h2>Shartnoma ma'lumotlari</h2>
            <label>
              <input
                type="radio"
                value="option1"
                checked={selectedOption === "option1"}
                onChange={handleOptionChange}
              />
              Tashkilot orqali
            </label>
            <br />
            <label>
              <input
                type="radio"
                value="option2"
                checked={selectedOption === "option2"}
                onChange={handleOptionChange}
              />
              O'zi tomonidan
            </label>
            <div className="box">
              <div className="cart">
                <p>Shartnoma turi</p>
                <select className="item">
                  <option>Tanlang</option>
                </select>
              </div>
              <div className="cart">
                <p>Hudud</p>
                <select className="item">
                  <option>Tanlang</option>
                </select>
              </div>
              <div className="cart">
                <p>Tashkilot nomi</p>
                <input
                  type="text"
                  className="item"
                  placeholder="Tashkilot nomini yozing"
                ></input>
              </div>
              <div className="cart">
                <p>Tashkilot rahbari</p>
                <input
                  type="text"
                  className="item"
                  placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
                ></input>
              </div>
              <div className="cart">
                <p>To'lov miqdori</p>
                <input type="text" className="item" placeholder="0%"></input>
              </div>
              <div className="cart">
                <p>Telefon raqami</p>
                <input
                  type="phone"
                  className="item"
                  placeholder="Telefon raqamini kiriting"
                ></input>
              </div>
            </div>
          </div>
          <h2 className="tinglovchi">Tinglovchilar ma’lumotlarini kiriting</h2>
        </div>
        <div className="container3">
          <div className="box2">
            <div className="cart">
              <p>Tashkilot rahbari</p>
              <input
                type="text"
                className="item"
                placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
              ></input>
            </div>
            <div className="cart">
              <p>Lavozimi</p>
              <input
                type="text"
                className="item"
                placeholder="Lavozimini kiriting"
              ></input>
            </div>
            <div className="cart">
              <p>Telefon raqami</p>
              <input
                type="tel"
                className="item"
                placeholder="Telefon raqamini kiriting"
              ></input>
            </div>
            <div className="cart">
              <p>Passport seriasi va raqami</p>
              <input
                type="text"
                className="item"
                placeholder="Passport seriasini va raqamini kiriting"
              ></input>
            </div>
            <div className="cart">
              <p>JShShIR</p>
              <input
                type="text"
                className="item"
                placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
              ></input>
            </div>
            <div className="cart">
              <p>Tinglovchining passport rasmini yuklang</p>
              <input
                type="file"
                className="item"
                placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
              ></input>
            </div>
          </div>
          <button>+ Yana qo'shish</button>
        </div>
      </div>
      <button className="yuklash">Yuklab olish</button>
    </div>
  );
}

export default Sertifikat;
