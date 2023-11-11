import React from "react";
import "./treyners.css";
import Line from "../line/Line";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/images/Ellipse 8.png";
import img2 from "../../assets/images/Ellipse 9.png";
import img3 from "../../assets/images/Ellipse 10.png";
import telegram from "../../assets/images/telegram-fill (1).png";
import instagram from "../../assets/images/instagram-fill (1).png";
import facebook from "../../assets/images/facebook-circle-fill (1).png";
function Treyners() {
  return (
    <div className="treyners">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h2>BIZNING TRENERLAR</h2>
            <p>
              Darslar o’z ishining mutaxassislari tomonidan tashkillashtiriladi
            </p>
          </div>
        </div>
        <div className="carusel">
          <Carousel>
            <Carousel.Item className="caruselItem">
              <div className="singleCarusel">
                <div className="box">
                  <img src={img1} alt="girl img" />
                  <h3>Razzoqova Muxlisa</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At interdum
                    tincidunt mattis dictum luctus dolor eget dictum sit.
                    Habitant.
                  </p>
                  <div className="socialMedias">
                    <a href="/">
                      <img src={telegram} alt="tg" />
                    </a>
                    <a href="/"><img src={instagram} alt="insta"/></a>
                  <a href="/"><img src={facebook} alt="facebook"/></a>
                  </div>
                </div>
              </div>
              <div className="singleCarusel">
                <div className="box">
                  <img src={img2} alt="girl img" />
                  <h3>Razzoqova Muxlisa</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At interdum
                    tincidunt mattis dictum luctus dolor eget dictum sit.
                    Habitant.
                  </p>
                  <div className="socialMedias">
                    <a href="/">
                      <img src={telegram} alt="tg" />
                    </a>
                    <a href="/"><img src={instagram} alt="insta"/></a>
                  <a href="/"><img src={facebook} alt="facebook"/></a>
                  </div>
                </div>
              </div>
              <div className="singleCarusel">
                <div className="box">
                  <img src={img3} alt="girl img" />
                  <h3>Razzoqova Muxlisa</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. At interdum
                    tincidunt mattis dictum luctus dolor eget dictum sit.
                    Habitant.
                  </p>
                  <div className="socialMedias">
                    <a href="/">
                      <img src={telegram} alt="tg" />
                    </a>
                    <a href="/"><img src={instagram} alt="insta"/></a>
                  <a href="/"><img src={facebook} alt="facebook"/></a>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Treyners;
