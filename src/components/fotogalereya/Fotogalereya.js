import "./fotogalereya.css";
import img1 from "../../assets/images/fotogalereya1.png";
import img2 from "../../assets/images/fotogalereya2.png";
import img3 from "../../assets/images/fotogalereya3.png";
import img4 from "../../assets/images/fotogalereya4.png";
import img5 from "../../assets/images/fotogalereya5.png";
import img6 from "../../assets/images/fotogalereya6.png";
import Line from "../line/Line";
function Fotogalereya() {
  const data = [
    {
      img: img1,
      title: "Tadbir nomi",
      date: "12.04.2023",
      text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
      btn: "Batafsil",
    },
    {
      img: img2,
      title: "Tadbir nomi",
      date: "12.04.2023",
      text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
      btn: "Batafsil",
    },
    {
      img: img3,
      title: "Tadbir nomi",
      date: "12.04.2023",
      text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
      btn: "Batafsil",
    },
    {
      img: img4,
      title: "Tadbir nomi",
      date: "12.04.2023",
      text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
      btn: "Batafsil",
    },
    {
      img: img5,
      title: "Tadbir nomi",
      date: "12.04.2023",
      text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
      btn: "Batafsil",
    },
    {
      img: img6,
      title: "Tadbir nomi",
      date: "12.04.2023",
      text: "Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.Lorem ipsum dolor sit amet consectetur. At interdum tincidunt mattis dictum luctus dolor eget dictum sit. Habitant.",
      btn: "Batafsil",
    },
  ];
  return (
    <div className="fotogalereya">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>Fotogalereya</h3>
            <p>Tadbirlardan estalik suratlar</p>
          </div>
        </div>
        <div className="row justify-content-between holidays">
          {data.map((item, index) => {
            return (
              <div className=" col-4 bigbox">
                <div className="box" key={index}>
                  <img src={item.img} className="img" />
                  <h3>{item.title}</h3>
                  <h5>{item.date}</h5>
                  <p> {item.text}</p>
                  <button>
                    <p>{item.btn}</p>
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
