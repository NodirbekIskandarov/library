import Line from "../line/Line";
import "./registratsiya.css";
import profile from "../../assets/images/Profile 1.png";
import world from "../../assets/images/Website 2.png";
import work from "../../assets/images/Work.png";
import call from "../../assets/images/Call.png";
import download from '../../assets/images/Download.png'
import { useState } from "react";
import { BASE_URL } from "../../tools/urls";
import axios from "axios";
function Registratsiya() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [malumoti, setMalumoti] = useState("")
  const [mutaxasisligi, setMutaxasisligi] = useState("")
  const [sohasi, setSohasi] = useState("")
  const [yutuqlar, setYutuqlar] = useState("")
  const [malaka, setMalaka] = useState("")
  const [faoliyati, setFaoliyati] = useState("")
  const [seminar, setSeminar] = useState("")
  const [til, setTil] = useState("")
  const [viloyat, setViloyat] = useState("")
  const [ish, setIsh] = useState("")
  const [xujjat1, setXujjat1] = useState("")
  const [xujjat2, setXujjat2] = useState("")
  const [xujjat3, setXujjat3] = useState("")
  const [xujjat4, setXujjat4] = useState("")
  const [xujjat5, setXujjat5] = useState("")
  const [xujjat6, setXujjat6] = useState("")
  const [xujjat7, setXujjat7] = useState("")
  const postData = {
    "full_name": name,
    "phone": phone,
    "work_place": "nimadir",
    "education_file": null,
    "specialty_file": null,
    "experience_file": null,
    "achievement_file": null,
    "qualification_file": null,
    "academ_experience_file": null,
    "seminar_participation_file": null,
    "language_cert": "",
    "language_cert_file": null,
    "region": 3,
    "education": null,
    "specialty": null,
    "experience": null,
    "achievement": null,
    "qualification": null,
    "academ_experience": null,
    "seminar_participation": null
}

  function sendFunc() {
    axios.post(`${BASE_URL}/competition/participants/create/`, postData)
    .then(response => {
      // Handle the success of the request
      alert('yuborildi:', response.status);
    })
    .catch(error => {
      // Handle errors
      console.error('Error:', error);
      alert("yuborilmadi")
    });
  }

  return (
    <div className="registratsiya">
      <div className="container">
        <div className="title">
          <Line />
          <div className="titlePart">
            <h2>Eng yaxshi kutubxonachi ko’rik tanlovi</h2>
            <p>Tanlovda qatnashish uchun ma’lumotlaringizni qoldiring</p>
          </div>
        </div>
        <div className="box">
          <div className="cart">
            <p>F.I.Sh.*</p>
            <label className="cart2">
              <img src={profile} alt="profile" />
              <input
                className="writing"
                type="text"
                placeholder="To'liq ism sharifingizni kiriting"
                onInput={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="cart">
            <p>Viloyat.*</p>
            <label className="cart2">
              <img src={world} alt="logo" />
              <select
                className="writing"
                type="text"
                placeholder="To'liq ism sharifingizni kiriting"
                onChange={(e) => setViloyat(e.target.value)}
              >
                <option disabled selected>
                  Viloyatingizni tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Telefon raqam.*</p>
            <label className="cart2">
              <img src={call} alt="logo" />
              <input
                className="writing"
                type="text"
                placeholder="+998 ** *** ****"
                onInput={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <div className="cart">
            <p>Ish joyingiz.*</p>
            <label className="cart2">
              <img src={work} alt="logo" />
              <input
                className="writing"
                type="text"
                placeholder="Ish joyingizni kiriting"
                onInput={(e) => setIsh(e.target.value)}
              />
            </label>
          </div>
          <div className="cart">
            <p>Mutaxasisiligi.*</p>
            <label className="cart2">
              <select className="writing" onChange={(e) => setMutaxasisligi(e.target.value)}>
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input className="writing uploading" type="file" onChange={(e) => setXujjat1(e.target.value)}/>
            </label>
          </div>
          <div className="cart">
            <p>Soxadagi mutaxasisligi.*</p>
            <label className="cart2">
              <select className="writing" onChange={(e) => setMutaxasisligi(e.target.value)}>
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input className="writing uploading" type="file" onChange={(e) => setXujjat1(e.target.value)}/>
            </label>
          </div>
          <div className="cart">
            <p>Yutuqlar.*</p>
            <label className="cart2">
              <select className="writing" onChange={(e) => setYutuqlar(e.target.value)}>
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input className="writing uploading" type="file" onChange={(e) => setXujjat1(e.target.value)}/>
            </label>
          </div>
          <div className="cart">
            <p>Malaka oshirish.*</p>
            <label className="cart2">
              <select className="writing" onChange={(e) => setMalaka(e.target.value)}>
                <option disabled selected>
                  Viloyatingizni tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input className="writing uploading" type="file" onChange={(e) => setXujjat1(e.target.value)}/>
            </label>
          </div>
          <div className="cart">
            <p>Ilmiy faoliyati.*</p>
            <label className="cart2">
              <select className="writing" onChange={(e) => setFaoliyati(e.target.value)}>
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input className="writing uploading" type="file" onChange={(e) => setXujjat1(e.target.value)}/>
            </label>
          </div>
          <div className="cart">
            <p>Seminar va konferensiyalarda ishtiroki.*</p>
            <label className="cart2">
              <select className="writing" onChange={(e) => setSeminar(e.target.value)}>
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input className="writing uploading" type="file" onChange={(e) => setXujjat1(e.target.value)}/>
            </label>
          </div>
          <div className="cart">
            <p>Xorijiy til bilish darajasi.*</p>
            <label className="cart2">
              <select className="writing" onChange={(e) => setTil(e.target.value)}>
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input className="writing uploading" type="file" onChange={(e) => setXujjat1(e.target.value)}/>
            </label>
          </div>
          <div className="sending">
            <button onClick={sendFunc}>Ariza jonatish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registratsiya;
