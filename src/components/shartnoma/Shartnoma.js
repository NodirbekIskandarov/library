import React, { useState } from "react";
import Line from "../line/Line";
import "./shartnoma.css";
function Shartnoma() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="shartnoma">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>Online shartnoma</h3>
            <p>O’qish uchun shartnomani online amalga oshiring</p>
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
          <h2>Rekvizitlar</h2>
          <div className="box3">
            <div className="cart">
              <p>Tashkilot nomi</p>
              <input
                type="text"
                className="item"
                placeholder="Tashkilot nomini yozing"
              ></input>
            </div>
            <div className="cart">
              <p>Manzili</p>
              <input
                type="text"
                className="item"
                placeholder="Manzilni kiriting"
              ></input>
            </div>
            <div className="cart">
              <p>Bank</p>
              <input
                type="text"
                className="item"
                placeholder="Bank nomini kiriting"
              ></input>
            </div>
            <div className="cart">
              <p>Hisob raqami</p>
              <input
                type="text"
                className="item"
                placeholder="Hisob raqamini kiriting"
              ></input>
            </div>
            <div className="cart">
              <p>Shaxsiy hisob varag'i raqami</p>
              <input
                type="text"
                className="item"
                placeholder="Shaxsiy hisob varag'i raqamini kiriting"
              ></input>
            </div>
            <div className="cart">
              <p>MFO</p>
              <input
                type="text"
                className="item"
                placeholder="MFO"
              ></input>
            </div>
            <div className="cart">
              <p>INN (Tashkilot)</p>
              <input
                type="text"
                className="item"
                placeholder="INN"
              ></input>
            </div>
            <div className="cart">
              <p>INN (G'aznachilik)</p>
              <input
                type="text"
                className="item"
                placeholder="INN"
              ></input>
            </div>
            <div className="saqlash">
                <button>Saqlash</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shartnoma;
