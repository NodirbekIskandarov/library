import React, { useState, useEffect } from "react";
import Line from "../line/Line";
import "./shartnoma.css";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { BASE_URL } from "../../tools/urls";
import axios from "axios";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ShartnomaUsers from "../shartnomaUsers/ShartnomaUsers";
import { v4 as uuidv4 } from "uuid";

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
  const [success, setSuccess] = useState();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [type, setType] = useState(true)

  const [divIndexes, setDivIndexes] = useState([]); // bu cardlarni objectlarini yigish uchun massiv

  const addUserF = () => {
    //bu saqlash bosilganda ishlaydigan funksiya
    setDivIndexes((prev) => {
      //bu joyida 1-qadam: divindexes ning avvalgi qiymatini oladi,
      return [
        ...prev, //  2-qadam: massivning eski qiymatini clone qiladi
        {
          id: uuidv4(), // 3-qadam: bu joyda yangi qoshiladigan objectga unikal id saqlaydi
          data: {
            // data card ichidagi malumotlar objecti
            full_name: "",
            position: "",
            phone: "",
            passport_data: "",
            jshshir: "",
            passport_file: "",
          },
        },
      ];
    });
  };


  const chageUserContract = (id, data) => {
    //bu funksiya ShartnomaUser componentiga yuboriladigan va undan id va data degan qiymatlarni qabul qilib oladigan funksiya
    const new_contract = {
      // bu qatorda yangi new_contract nomli object yaratilyapdi va unga child componentadan kelgan kelgan id va data(=> yangi toldirilgan malumotlar objecti) saqlanadi
      id: id,
      data: data,
    };
    setDivIndexes((prev) => {
      // bu qatorda divIndexes ning eski qiymatini olyapdi va uni map qilib aylantiradi, ichidagi har bir elementining id sini child dan kelgan id tekshiradi, agar true bolsa divindexes ga kelgan objectni qaytaradi, aks holda yani false xolatida map ichidagi elementni ozini qaytaradi
      return prev.map((element) => {
        if (element.id === id) {
          return new_contract;
        } else {
          return element;
        }
      });
    });

  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    const isCompanyValue = event.target.value === "option1";
    setPostData((prev) => ({
      ...prev,
      "is_company": isCompanyValue,
    }));
  };

  const { state } = useLocation();
  const { t } = useTranslation();

  //part of append to formData

  
  const [postData, setPostData] = useState({
    "is_company": type,
    "contract_type": "",
    "region": 3,
    "organization": "",
    "organization_director": "",
    "payment_percent": "",
    "phone": "",
    "rek_org_name": "",
    "rek_org_address": "",
    "rek_org_bank": "",
    "rek_org_hisob_raqam": "",
    "rek_org_account_hisob_raqam": "",
    "rek_org_mfo": "",
    "rek_org_inn": "",
    "rek_org_inn_gazna": "",
    "users": []
  });

  console.log(postData.is_company, "is company")
    useEffect(() => {
      const updatedMassiv = divIndexes.map(item => item.data)
      setPostData(prev => ({
        ...prev,
        "users": updatedMassiv
      }))
    }, [divIndexes])
  
  
  
    
    function getValue(key, value) {
      setPostData({
        ...postData,
        [key + ""]: value,
      });
    }

  const form = new FormData();
  form.append("contract_type", String(postData.contract_type));
  form.append("is_company", postData.is_company);
  form.append("region", postData.region);
  form.append("organization", String(postData.organization));
  form.append("organization_director", String(postData.organization_director));
  form.append("payment_percent", String(postData.payment_percent));
  form.append("phone", String(postData.phone));
  form.append("u_count", postData.users.length)

  postData.users.forEach((user, index) => {
    form.append(`full_name_${index}`, user.full_name);
    form.append(`position_${index}`, user.position);
    form.append(`phone_${index}`, user.phone);
    form.append(`passport_data_${index}`, user.passport_data);
    form.append(`jshshir_${index}`, user.jshshir);
    form.append(`passport_file_${index}`, user.passport_file);
});

  form.append("rek_org_name", String(postData.rek_org_name));
  form.append("rek_org_address", String(postData.rek_org_address));
  form.append("rek_org_bank", String(postData.rek_org_bank));
  form.append("rek_org_hisob_raqam", String(postData.rek_org_hisob_raqam));
  form.append(
    "rek_org_account_hisob_raqam",
    String(postData.rek_org_account_hisob_raqam)
  );
  form.append("rek_org_mfo", String(postData.rek_org_mfo));
  form.append("rek_org_inn", String(postData.rek_org_inn));
  form.append("rek_org_inn_gazna", String(postData.rek_org_inn_gazna));


  async function sendFunc() {
    if (postData.users.length === 0) {
      alert("user qo'shish shart")
    } else {
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
                    <select
                      className="item"
                      value={postData.contract_type}
                      onChange={(e) => {
                        getValue("contract_type", e.target.value);
                      }}
                    >
                      <option>Tanlang</option>
                    </select>
                  </div>
                  <div className="cart">
                    <p>Hudud</p>
                    <select
                      className="item"
                      value={postData.region}
                      onChange={(e) => {
                        getValue("region", e.target.value);
                      }}
                    >
                      <option>Tanlang</option>
                    </select>
                  </div>
                  <div className="cart">
                    <p>Tashkilot nomi</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="Tashkilot nomini yozing"
                      value={postData.organization}
                      onChange={(e) => {
                        getValue("organization", e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>Tashkilot rahbari</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
                      value={postData.organization_director}
                      onChange={(e) => {
                        getValue("organization_director", e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>To'lov miqdori</p>
                    <input
                      type="text"
                      className="item"
                      placeholder="0%"
                      value={postData.payment_percent}
                      onChange={(e) => {
                        getValue("payment_percent", e.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="cart">
                    <p>Telefon raqami</p>
                    <input
                      type="phone"
                      className="item"
                      placeholder="Telefon raqamini kiriting"
                      value={postData.phone}
                      onChange={(e) => {
                        getValue("phone", e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <h2 className="tinglovchi">
                Tinglovchilar ma’lumotlarini kiriting
              </h2>
            </div>
            <div className="container3">
              {divIndexes.map((elem, index) => {
                return (
                  <ShartnomaUsers
                    key={index}
                    valueChanger={(newdata) => {
                      chageUserContract(elem.id, newdata);
                    }}
                    data={elem.data}
                  />
                );
              })}
              <button onClick={addUserF}>+ Yana qo'shish</button>
              <h2>Rekvizitlar</h2>
              <div className="box3">
                <div className="cart">
                  <p>Tashkilot nomi</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Tashkilot nomini yozing"
                    value={postData.rek_org_name}
                    onChange={(e) => {
                      getValue("rek_org_name", e.target.value);
                    }}
                  ></input>
                </div>
                <div className="cart">
                  <p>Manzili</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Manzilni kiriting"
                    value={postData.rek_org_address}
                    onChange={(e) => {
                      getValue("rek_org_address", e.target.value);
                    }}
                  ></input>
                </div>
                <div className="cart">
                  <p>Bank</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Bank nomini kiriting"
                    value={postData.rek_org_bank}
                    onChange={(e) => {
                      getValue("rek_org_bank", e.target.value);
                    }}
                  ></input>
                </div>
                <div className="cart">
                  <p>Hisob raqami</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Hisob raqamini kiriting"
                    value={postData.rek_org_hisob_raqam}
                    onChange={(e) => {
                      getValue("rek_org_hisob_raqam", e.target.value);
                    }}
                  ></input>
                </div>
                <div className="cart">
                  <p>Shaxsiy hisob varag'i raqami</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="Shaxsiy hisob varag'i raqamini kiriting"
                    value={postData.rek_org_account_hisob_raqam}
                    onChange={(e) => {
                      getValue("rek_org_account_hisob_raqam", e.target.value);
                    }}
                  ></input>
                </div>
                <div className="cart">
                  <p>MFO</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="MFO"
                    value={postData.rek_org_mfo}
                    onChange={(e) => {
                      getValue("rek_org_mfo", e.target.value);
                    }}
                  ></input>
                </div>
                <div className="cart">
                  <p>INN (Tashkilot)</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="INN"
                    value={postData.rek_org_inn}
                    onChange={(e) => {
                      getValue("rek_org_inn", e.target.value);
                    }}
                  ></input>
                </div>
                <div className="cart">
                  <p>INN (G'aznachilik)</p>
                  <input
                    type="text"
                    className="item"
                    placeholder="INN"
                    value={postData.rek_org_inn_gazna}
                    onChange={(e) => {
                      getValue("rek_org_inn_gazna", e.target.value);
                    }}
                  ></input>
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
                    <input
                      type="text"
                      className="item"
                      placeholder="0%"
                    ></input>
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
