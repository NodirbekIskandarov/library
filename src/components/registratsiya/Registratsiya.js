import React, { useEffect, useState } from "react";

import Line from "../line/Line";
import "./registratsiya.css";
import profile from "../../assets/images/Profile 1.png";
import world from "../../assets/images/Website 2.png";
import work from "../../assets/images/Work.png";
import call from "../../assets/images/Call.png";
import download from "../../assets/images/Download.png";
import { BASE_URL } from "../../tools/urls";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { MuiFileInput } from "mui-file-input";

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
  // const [data, setData] = useState()
  const [specialty, setSpecialty] = useState();
  const [achievement, setAchievement] = useState();
  const [qualification, setQualification] = useState();
  const [academ_experience, setAcadem_experience] = useState();
  const [seminar_participation, setSeminar_participation] = useState();
  const [experience, setExperience] = useState();
  const [education, setEducation] = useState();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [work_place, setWork_place] = useState("");
  const [education_file, setEducation_file] = useState("");
  const [specialty_file, setSpecialty_file] = useState("");
  const [experience_file, setExperience_file] = useState("");
  const [achievement_file, setAchievement_file] = useState("");
  const [qualification_file, setQualification_file] = useState("");
  const [academ_experience_file, setAcadem_experience_file] = useState("");
  const [seminar_participation_file, setSeminar_participation_file] =
    useState("");
  const [language_cert, setLanguage_cert] = useState("");
  const [language_cert_file, setLanguage_cert_file] = useState("");
  const [region, setRegion] = useState(3);
  const [education1, setEducation1] = useState(1);
  const [specialty1, setSpecialty1] = useState(1);
  const [experience1, setExperience1] = useState(1);
  const [achievement1, setAchievement1] = useState(1);
  const [qualification1, setQualification1] = useState(1);
  const [academ_experience1, setAcadem_experience1] = useState(1);
  const [seminar_participation1, setSeminar_participation1] = useState(1);
  const [til, setTil] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://kutubxonademo.pythonanywhere.com/competition/question/list/"
        );
        setSpecialty(response.data.specialty);
        setAcadem_experience(response.data.academ_experience);
        setAchievement(response.data.achievement);
        setEducation(response.data.education);
        setExperience(response.data.experience);
        setSeminar_participation(response.data.seminar_participation);
        setQualification(response.data.qualification);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  //using formdata for post API

  function handleChange(event) {
    setEducation_file(event.target.files[0]);
  }

  function handleChange1(file_value) {
    setSpecialty_file(file_value.target.files[0]);
  }
  function handleChange2(file_value) {
    setExperience_file(file_value.target.files[0]);
  }
  function handleChange3(file_value) {
    setAchievement_file(file_value.target.files[0]);
  }
  function handleChange4(file_value) {
    setQualification_file(file_value.target.files[0]);
  }
  function handleChange5(file_value) {
    setAcadem_experience_file(file_value.target.files[0]);
  }
  function handleChange6(file_value) {
    setSeminar_participation_file(file_value.target.files[0]);
  }
  function handleChange7(file_value) {
    setLanguage_cert(file_value.target.files[0])
  }

  const form = new FormData();
  form.append("full_name", String(name));
  form.append("phone", String(phone));
  form.append("work_place", String(work_place));
  form.append("education_file", education_file);
  form.append("specialty_file", specialty_file);
  form.append("experience_file", experience_file);
  form.append("achievement_file", achievement_file);
  form.append("qualification_file", qualification_file);
  form.append("academ_experience_file", academ_experience_file);
  form.append("seminar_participation_file", seminar_participation_file);
  form.append("language_cert", language_cert);
  form.append("language_cert_file", language_cert_file);
  form.append("region", parseInt(region));
  form.append("education", parseInt(education1));
  form.append("specialty", parseInt(specialty1));
  form.append("experience", parseInt(experience1));
  form.append("achievement", parseInt(achievement1));
  form.append("qualification", parseInt(qualification1));
  form.append("academ_experience", parseInt(academ_experience1));
  form.append("seminar_participation", parseInt(seminar_participation1));


  async function sendFunc() {
    try {
      const response = await axios.post(
        `${BASE_URL}/competition/participants/create/`,
        form,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess(true);
    } catch (error) {
      setSuccess(false);
      console.log(error);
    } finally {
      setOpen(true);
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
                onChange={(e) => setRegion(e.target.value)}
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
                onInput={(e) => setWork_place(e.target.value)}
              />
            </label>
          </div>
          <div className="cart">
            <p>Ma'lumoti.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setEducation1(e.target.value)}
              >
                <option selected>Tanlang</option>
                {education &&
                  education.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              {/* <MuiFileInput placeholder="nimadir" value={education_file}  onChange={handleChange}/> */}
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="cart">
            <p>Mutaxasisligi.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setSpecialty1(e.target.value)}
              >
                <option selected>Tanlang</option>
                {specialty &&
                  specialty.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              {/* <MuiFileInput value={specialty_file} onChange={handleChange1}/> */}
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange1}
              />
            </label>
          </div>
          <div className="cart">
            <p>Sohadagi faoliyati.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setExperience1(e.target.value)}
              >
                <option selected>Tanlang</option>
                {experience &&
                  experience.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              {/* <MuiFileInput value={experience_file} onChange={handleChange2}/> */}
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange2}
              />
            </label>
          </div>
          <div className="cart">
            <p>Yutuqlar.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setAchievement1(e.target.value)}
              >
                <option selected>Viloyatingizni tanlang</option>
                {achievement &&
                  achievement.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              {/* <MuiFileInput value={achievement_file} onChange={handleChange3}/> */}
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange3}
              />
            </label>
          </div>
          <div className="cart">
            <p>Malaka oshirish.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setQualification1(e.target.value)}
              >
                <option selected>Tanlang</option>
                {qualification &&
                  qualification.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange4}
              />
            </label>
          </div>
          <div className="cart">
            <p>Ilmiy faoliyati.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setAcadem_experience1(e.target.value)}
              >
                <option selected>Tanlang</option>
                {academ_experience &&
                  academ_experience.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              {/* <MuiFileInput value={qualification_file} onChange={handleChange4}/> */}
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange5}
              />
            </label>
          </div>
          <div className="cart">
            <p>Seminar va konferensiyalarda ishtiroki.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setSeminar_participation1(e.target.value)}
              >
                <option selected>Tanlang</option>
                {seminar_participation &&
                  seminar_participation.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange6}
              />
            </label>
          </div>
          <div className="cart">
            <p>Xorijiy til bilish darajasi.*</p>
            <label className="cart2">
              <select
                className="writing"
                onChange={(e) => setLanguage_cert(e.target.value)}
              >
                <option selected>Tanlang</option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              {/* <MuiFileInput value={language_cert_file} onChange={handleChange6}/> */}
              <input
                className="writing uploading"
                type="file"
                onChange={handleChange7}
              />
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
