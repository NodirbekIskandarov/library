import React, { useState } from "react";
import Line from "../line/Line";
import "./sertifikat.css";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL } from "../../tools/urls";
import Modal  from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";
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
function Sertifikat() {
  const [cert_number, setCert_number] = useState("");
  const [cert_date, setCert_date] = useState("");
  const [full_name, setFull_name] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState();

  // const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { state } = useLocation();
  const { t } = useTranslation();

  const postData = {
    full_name: String(full_name),
    cert_date: String(cert_date),
    cert_number: String(cert_number),
  };

  console.log(postData)
  async function sendFunc() {
    try {
      const response = await axios.post(`${BASE_URL}onlineservices/certificate/get/`, postData);
      if (response.status == 200) {
        setSuccess(true);
      } else {
        setSuccess(false)
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setOpen(true);
    }
  }

  return (
    <div className="sertifikat">
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
                 {/* yozish kk */}
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
          <p>{t("oqish_uchun_shartnomani_online_amalga_oshiring")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>{t("online_sertifikat_olish")}</h3>
            <p>
              {t(
                "malumotlaringizni_taqdim_eting_va_sertifikatingizni_online_qabul_qiling"
              )}
            </p>
          </div>
        </div>
        <div className="container2">
          <div className="forms">
            <h2>Shartnoma ma'lumotlari</h2>
            <div className="box">
              <div className="cart">
                <input
                  type="text"
                  className="item"
                  placeholder="Ism familya"
                  // value={full_name}
                  onInput={(e) => setFull_name(e.target.value)}
                />
              </div>
              <div className="cart">
                <input
                  type="date"
                  className="item"
                  placeholder="Sana"
                  // value={cert_date}
                  onInput={(e) => setCert_date(e.target.value)}
                />
              </div>
              <div className="cart">
                <input
                  type="text"
                  className="item"
                  placeholder="Sertifikat raqami"
                  // value={cert_number}
                  onChange={(e) => setCert_number(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="yuklash" onClick={sendFunc}>
        Tekshirish
      </button>
    </div>
  );
}

export default Sertifikat;
