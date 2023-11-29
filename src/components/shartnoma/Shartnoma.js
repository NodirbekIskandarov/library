import React, { useState } from "react";
import Line from "../line/Line";
import "./shartnoma.css";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../tools/urls";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
function Shartnoma() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [count, setCount] = useState(1);
  const [success, setSuccess] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);


  function addNum() {
    setCount(count + 1);
  }
  const divIndexes = Array.from({ length: count }, (_, index) => index);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const { state } = useLocation();
  const { t } = useTranslation();

  const [contractType, setContractType] = useState("");
  const [isCompany, setIsCompany] = useState(true);
  const [region, setRegion] = useState(3);
  const [organization, setOrganization] = useState("");
  const [organizationDirector, setOrganizationDirector] = useState("");
  const [paymentPercent, setPaymentPercent] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState([]);
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");
  const [phone1, setPhone1] = useState("");
  const [passportData, setPassportData] = useState("");
  const [jshshir, setJshshir] = useState("");
  const [passportFile, setPassportFile] = useState("");
  const [rekOrgName, setRekOrgName] = useState("");
  const [rekOrgAddress, setRekOrgAddress] = useState("");
  const [rekOrgBank, setRekOrgBank] = useState("");
  const [rekOrgHisobRaqam, setRekOrgHisobRaqam] = useState("");
  const [rekOrgMfo, setRekOrgMfo] = useState("");
  const [rekOrgInn, setRekOrgInn] = useState("");
  const [rekOrgInnGazna, setRekOrgInnGazna] = useState("");
  const [rekOrgAccountHisobRaqam, setRekOrgAccountHisobRaqam] = useState("");

  // const [object, setObject] = useState()

  function handleChange(file_value) {
    setPassportFile(file_value.target.files[0]);
  }

  // const [myArray, setMyArray] = useState([])
  let myArray = []
  let myNewArray = [
    // {
    //   name: "name"
    // },
    // {
    //   name: "name"
    // },
    // {
    //   name: "name"
    // },
    // {
    //   name: "name"
    // },
    // {
    //   name: "name"
    // }
  ]
  let obj
  for (let i=0; i<divIndexes.length; i++) {
    obj =
      {
        "full_name": fullName,
        "position": position,
        "phone": phone1,
        "passport_data": passportData,
        "jshshir": jshshir,
        "passport_file": passportFile,
      }
      // setObject(obj)
      // console.log(obj)
      myNewArray.push(obj)
      myArray=[...myNewArray]
    }
    console.log(myArray)
  // // console.log(myArray)
  // console.log(myNewArray)

  const form = new FormData();
  form.append("contract_type", contractType);
  form.append("is_company", isCompany);
  form.append("region", region);
  form.append("organization", organization);
  form.append("organization_director", organizationDirector);
  form.append("payment_percent", paymentPercent);
  form.append("phone", phone);
  // for (let i=0; i<divIndexes.length; i++) {
    //   form.append(`users[${i}].full_name`, myNewArray[i].name)
    //   form.append(`user[${i}].position`, myNewArray[i].name)
    //   form.append(`user[${i}].phone`, myNewArray[i].name)
    //   form.append(`user[${i}].passport_data`, myNewArray[i].name)
    //   form.append(`user[${i}].passport_file`, myNewArray[i].name)
    // }
    
    // divIndexes.forEach((item) => {
      //   form.append("users[]", item)
      // })
      
      
      // form.append("users", myNewArray); //qaytadan korish kk
      // form.append("full_name", fullName);
      // form.append("position", position);
      // form.append("phone", phone1);
      // form.append("passport_data", passportData);
      // form.append("jshshir", jshshir);
      // form.append("passport_file", passportFile); // file yuklanadigan qismi
      form.append("rek_org_name", rekOrgName);
      form.append("rek_org_address", rekOrgAddress);
      form.append("rek_org_bank", rekOrgBank);
      form.append("rek_org_hisob_raqam", rekOrgHisobRaqam);
      form.append("rek_org_account_hisob_raqam", rekOrgAccountHisobRaqam);
      form.append("rek_org_mfo", rekOrgMfo);
      form.append("rek_org_inn", rekOrgInn);
      form.append("rek_org_inn_gazna", rekOrgInnGazna);
      console.log("form")
      
  async function sendFunc() {
    try {
      const response = await axios.post(
        `${BASE_URL}/onlineservices/contract/create/`,
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
    <div className="shartnoma">
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
        <div className="locationOfPage">
          <p>{t("interaktiv_xizmatlar")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("online_shartnoma")}</h3>
            <p>{t("oqish_uchun_shartnomani_online_amalga_oshiring")}</p>
          </div>
        </div>
        <div className="contract_theme">
          <h2>Shartnoma ma'lumotlari</h2>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedOption === "option1"}
              onChange={handleOptionChange}
            />
            <span className="ms-3">Tashkilot orqali</span>
          </label>
          <br />
          <br />
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedOption === "option2"}
              onChange={handleOptionChange}
            />
            <span className="ms-3">O'zi tomonidan</span>
          </label>
        </div>

        {selectedOption === "option1" ? (
          <div>
            <div className="container2">
              <div className="forms">
                <div className="box">
                  <div className="cart">
                    <p>Shartnoma turi</p>
                    <select className="item" onChange={(e) => setContractType(e.target.value)}>
                      <option>Tanlang</option>
                    </select>
                  </div>
                  <div className="cart">
                    <p>Hudud</p>
                    <select className="item" onChange={(e) => setRegion(e.target.value)}>
                      <option>Tanlang</option>
                    </select>
                  </div>
                  <div className="cart">
                    <p>Tashkilot nomi</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="Tashkilot nomini yozing"
                      onInput={(e) => setOrganization(e.target.value)}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>Tashkilot rahbari</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
                      onInput={(e) => setOrganizationDirector(e.target.value)}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>To'lov miqdori</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="0%"
                      onInput={(e) => setPaymentPercent(e.target.value)}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>Telefon raqami</p>
                    <input
                      type="phone"
                      className="item"
                      placeholder="Telefon raqamini kiriting"
                      onInput={(e) => setPhone(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
              <h2 className="tinglovchi">
                Tinglovchilar ma’lumotlarini kiriting
              </h2>
            </div>
            <div className="container3">
              {divIndexes &&
                divIndexes.map((index) => {
                  return (
                    <div key={index} className="box2">
                      <div className="cart">
                        <p>F.I.Sh</p>
                        <input
                          type="text"
                          className="item"
                          placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
                          onInput={(e) => setFullName(e.target.value)}
                        ></input>
                      </div>
                      <div className="cart">
                        <p>Lavozimi</p>
                        <input
                          type="text"
                          className="item"
                          placeholder="Lavozimini kiriting"
                          onInput={(e) => setPosition(e.target.value)}
                        ></input>
                      </div>
                      <div className="cart">
                        <p>Telefon raqami</p>
                        <input
                          type="tel"
                          className="item"
                          placeholder="Telefon raqamini kiriting"
                          onInput={(e) => setPhone1(e.target.value)}
                        ></input>
                      </div>
                      <div className="cart">
                        <p>Passport seriasi va raqami</p>
                        <input
                          type="text"
                          className="item"
                          placeholder="Passport seriasini va raqamini kiriting"
                          onInput={(e) => setPassportData(e.target.value)}
                        ></input>
                      </div>
                      <div className="cart">
                        <p>JShShIR</p>
                        <input
                          type="text"
                          className="item"
                          placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
                          onInput={(e) => setJshshir(e.target.value)}
                        ></input>
                      </div>
                      <div className="cart">
                        <p>Tinglovchining passport rasmini yuklang</p>
                        <input
                          type="file"
                          className="item"
                          placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
                          onChange={handleChange}
                        ></input>
                      </div>
                    </div>
                  );
                })}
              <button onClick={addNum}>+ Yana qo'shish</button>
              <h2>Rekvizitlar</h2>
              <div className="box3">
                <div className="cart">
                  <p>Tashkilot nomi</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Tashkilot nomini yozing"
                    onInput={(e) => setRekOrgName(e.target.value)}
                  ></input>
                </div>
                <div className="cart">
                  <p>Manzili</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Manzilni kiriting"
                    onInput={(e) => setRekOrgAddress(e.target.value)}
                  ></input>
                </div>
                <div className="cart">
                  <p>Bank</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Bank nomini kiriting"
                    onInput={(e) => setRekOrgBank(e.target.value)}
                  ></input>
                </div>
                <div className="cart">
                  <p>Hisob raqami</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Hisob raqamini kiriting"
                    onInput={(e) => setRekOrgHisobRaqam(e.target.value)}
                  ></input>
                </div>
                <div className="cart">
                  <p>Shaxsiy hisob varag'i raqami</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Shaxsiy hisob varag'i raqamini kiriting"
                    onInput={(e) => setRekOrgAccountHisobRaqam(e.target.value)}
                  ></input>
                </div>
                <div className="cart">
                  <p>MFO</p>
                  <input type="text" className="item" placeholder="MFO" onInput={(e) => setRekOrgMfo(e.target.value)}></input>
                </div>
                <div className="cart">
                  <p>INN (Tashkilot)</p>
                  <input type="text" className="item" placeholder="INN" onInput={(e) => setRekOrgInn(e.target.value)}></input>
                </div>
                <div className="cart">
                  <p>INN (G'aznachilik)</p>
                  <input type="text" className="item" placeholder="INN" onInput={(e) => setRekOrgInnGazna(e.target.value)}></input>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="container2">
              <div className="forms">
                <div className="box">
                  <div className="cart">
                    <p>Shartnoma turi</p>
                    <select className="item" onChange={(e) => setContractType(e.target.value)}>
                      <option>Tanlang</option>
                    </select>
                  </div>
                  <div className="cart">
                    <p>Hudud</p>
                    <select className="item" onChange={(e) => setRegion(e.target.value)}>
                      <option>Tanlang</option>
                    </select>
                  </div>
                  <div className="cart">
                    <p>Tashkilot nomi</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="Tashkilot nomini yozing"
                      onInput={(e) => setOrganization(e.target.value)}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>Tashkilot rahbari</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
                      onInput={(e) => setOrganizationDirector(e.target.value)}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>To'lov miqdori</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="0%"
                      onInput={(e) => setPaymentPercent(e.target.value)}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>Telefon raqami</p>
                    <input
                      type="phone"
                      className="item"
                      placeholder="Telefon raqamini kiriting"
                      onInput={(e) => setPhone(e.target.value)}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="saqlash">
          <button onClick={sendFunc}>Saqlash</button>
        </div>
      </div>
    </div>
  );
}

export default Shartnoma;
