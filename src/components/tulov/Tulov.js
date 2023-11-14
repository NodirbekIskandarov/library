import React, { useState } from "react";
import Line from "../line/Line";
import "./tulov.css";
import click from "../../assets/images/click-white 1.png";
import payme from "../../assets/images/logo_01.png";
import uzum from "../../assets/images/article-original.png";
function Tulov() {
  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className="tulov">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>Kursni sotib olish uchun to’lovni amalga oshiring</h3>
            <p>Online kursni sotib olish uchun to’lovni amalga oshiring</p>
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
          <button>Davom etish</button>
        </div>
      </div>
    </div>
  );
}

export default Tulov;
