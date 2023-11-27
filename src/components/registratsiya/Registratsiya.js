import React, { useEffect, useState } from "react";

import Line from "../line/Line";
import "./registratsiya.css";
import profile from "../../assets/images/Profile 1.png";
import world from "../../assets/images/Website 2.png";
import work from "../../assets/images/Work.png";
import call from "../../assets/images/Call.png";
import download from '../../assets/images/Download.png'
import { BASE_URL } from "../../tools/urls";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography"
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
function Registratsiya() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [success, setSuccess] = useState();

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

  async function sendFunc() {
    try {
      const response = await axios.post(`${BASE_URL}/competition/participants/create/`, postData);
      setSuccess(true)
    } catch (error) {
      setSuccess(false)
    } finally {
      setOpen(true)
    }
  }

  return (
    <div className="registratsiya">
      <div>
        {success ? (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="100"
                  fill="green"
                  class="bi bi-send-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855a.75.75 0 0 0-.124 1.329l4.995 3.178 1.531 2.406a.5.5 0 0 0 .844-.536L6.637 10.07l7.494-7.494-1.895 4.738a.5.5 0 1 0 .928.372l2.8-7Zm-2.54 1.183L5.93 9.363 1.591 6.602l11.833-4.733Z" />
                  <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z" />
                </svg>
              </Typography>
            </Box>
          </Modal>
        ) : (
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="300"
                  height="300"
                  fill="red"
                  class="bi bi-bag-x"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.146 8.146a.5.5 0 0 1 .708 0L8 9.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 10l1.147 1.146a.5.5 0 0 1-.708.708L8 10.707l-1.146 1.147a.5.5 0 0 1-.708-.708L7.293 10 6.146 8.854a.5.5 0 0 1 0-.708z"
                  />
                </svg>
              </Typography>
            </Box>
          </Modal>
        )}
        {/* <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal> */}
      </div>
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
