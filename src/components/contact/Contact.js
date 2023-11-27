import React, { useEffect, useState } from "react";
import "./contact.css";
import books from "../../assets/images/casual-life-3d-stack-of-books-mockup 1.png";
import Line from "../line/Line";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL, LANDING } from "../../tools/urls";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { GrStatusGood } from "react-icons/gr";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fa-spiner } from '@fortawesome/free-solid-svg-icons';
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

function Contact() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [degree, setDegree] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [success, setSuccess] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${LANDING}`);
        setData(response.data.education);
        //   console.log(response.data.education)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const postData = {
    full_name: name,
    phone: phone,
    academic_degree: degree,
  };
  async function sendFunc() {
    try {
        const response = await axios.post(`${BASE_URL}/main/user/contact/`, postData);
        setSuccess(true)
    } catch (error) {
        setSuccess(false)
    } finally {
        setOpen(true)
    }
  }
  return (
    <div className="contact">
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
            <h3>{t("boglanish")}</h3>
            <p>
              {t("oz_malumotlaringizni_qoldiring_va_biz_siz_bilan_boglanamiz")}
            </p>
          </div>
        </div>
        <div className="inputPart">
          <div className="inputs">
            <div className="singleInput">
              <p>{t("f_i_o")}</p>
              <input
                onInput={(e) => setName(e.target.value)}
                type="text"
                placeholder={t("ism_sharif")}
              />
            </div>
            <div className="singleInput">
              <p>{t("telefon_raqam")}</p>
              <input
                onInput={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="+998"
              />
            </div>
            <div className="singleInput">
              <p>{t("malumotlaringiz")}</p>
              <select onChange={(e) => setDegree(e.target.value)}>
                {data &&
                  data.map((item, index) => {
                    return (
                      <option key={index} value={item.id}>
                        {item.translations.uz.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <button onClick={sendFunc}>{t("jonatish")}</button>
          </div>
          <div className="image">
            <img src={books} alt="books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
