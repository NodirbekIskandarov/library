import React, { useEffect, useState } from "react";
import "./savollar.css";
import axios from "axios";
import { BASE_URL, QUESTIONS } from "../../tools/urls";
import { useTranslation } from "react-i18next";
function Savollar() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const { t } = useTranslation();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"));
  // console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${QUESTIONS}`);
        setData(response.data);
        // console.log(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading)
    return (
      <p className="loading">
        <img
          src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif"
          alt="loader"
        />
      </p>
    );
  if (error) return <p>Error: {error.message}</p>;
  // const data = [
  //   {
  //     question: "Qanday qilib kursda o’qish uchun ariza berish mumkin?",
  //     answer:
  //       "Lorem ipsum dolor sit amet consectetur. Venenatis faucibus porttitor in sapien. Semper a quis blandit volutpat sodales. Tristique quis orci cum vitae bibendum diam fusce. Eget sed iaculis blandit proin ac morbi. Cras et accumsan orci dui urna amet vitae. Purus pretium dictum tellus faucibus dui enim. Odio quisque tellus phasellus faucibus pharetra. Sed mauris risus at praesent nulla odio.",
  //   },
  //   {
  //     question: "Qanday qilib kursda o’qish uchun ariza berish mumkin?",
  //     answer:
  //       "Lorem ipsum dolor sit amet consectetur. Venenatis faucibus porttitor in sapien. Semper a quis blandit volutpat sodales. Tristique quis orci cum vitae bibendum diam fusce. Eget sed iaculis blandit proin ac morbi. Cras et accumsan orci dui urna amet vitae. Purus pretium dictum tellus faucibus dui enim. Odio quisque tellus phasellus faucibus pharetra. Sed mauris risus at praesent nulla odio.",
  //   },
  //   {
  //     question: "Qanday qilib kursda o’qish uchun ariza berish mumkin?",
  //     answer:
  //       "Lorem ipsum dolor sit amet consectetur. Venenatis faucibus porttitor in sapien. Semper a quis blandit volutpat sodales. Tristique quis orci cum vitae bibendum diam fusce. Eget sed iaculis blandit proin ac morbi. Cras et accumsan orci dui urna amet vitae. Purus pretium dictum tellus faucibus dui enim. Odio quisque tellus phasellus faucibus pharetra. Sed mauris risus at praesent nulla odio.",
  //   },
  //   {
  //     question: "Qanday qilib kursda o’qish uchun ariza berish mumkin?",
  //     answer:
  //       "Lorem ipsum dolor sit amet consectetur. Venenatis faucibus porttitor in sapien. Semper a quis blandit volutpat sodales. Tristique quis orci cum vitae bibendum diam fusce. Eget sed iaculis blandit proin ac morbi. Cras et accumsan orci dui urna amet vitae. Purus pretium dictum tellus faucibus dui enim. Odio quisque tellus phasellus faucibus pharetra. Sed mauris risus at praesent nulla odio.",
  //   },
  // ];

  function openFunc(a) {
    if (questionIndex === null) {
      setQuestionIndex(a);
    } else {
      setQuestionIndex(null);
    }
  }
  return (
    <div className="savollar">
      {data &&
        data.map((item, index) => {
          return (
            <div
              key={index}
              className="renderSon"
              onClick={() => openFunc(index)}
            >
              <div className="question">
                {/* <p>{item.question}</p> */}
                {lang==="uz" ? (<p>{item.question_uz}</p>) : lang==="ru" ? (<p>{item.question_ru===null ? item.question : item.question_ru}</p>) : lang==="en" ? (<p>{item.question_en===null ? item.question : item.question_en}</p>) : (<p>{item.question}</p>)}
                <button>
                  {questionIndex !== index ? (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                      >
                        <path
                          d="M1 1L2.76297 2.74731C4.1689 4.14075 4.87187 4.83747 4.98011 5.68667C5.00663 5.89473 5.00663 6.10527 4.98011 6.31333C4.87187 7.16252 4.1689 7.85925 2.76297 9.25269L1 11"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>
                    </span>
                  ) : (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="6"
                        viewBox="0 0 12 6"
                        fill="none"
                      >
                        <path
                          d="M11.5327 1.52796C11.8243 1.23376 11.8222 0.758893 11.528 0.467309C11.2338 0.175726 10.7589 0.177844 10.4673 0.472041L8.72 2.23501C8.01086 2.9505 7.52282 3.44131 7.1093 3.77341C6.7076 4.096 6.44958 4.20668 6.2185 4.23613C6.07341 4.25462 5.92659 4.25462 5.7815 4.23613C5.55042 4.20668 5.2924 4.09601 4.89071 3.77341C4.47718 3.44131 3.98914 2.95051 3.28 2.23501L1.53269 0.472042C1.24111 0.177845 0.766238 0.175726 0.472041 0.46731C0.177844 0.758894 0.175726 1.23376 0.467309 1.52796L2.24609 3.32269C2.91604 3.99866 3.46359 4.55114 3.95146 4.94294C4.45879 5.35037 4.97373 5.64531 5.59184 5.72409C5.86287 5.75864 6.13714 5.75864 6.40816 5.72409C7.02628 5.64531 7.54122 5.35037 8.04854 4.94294C8.53641 4.55114 9.08396 3.99867 9.7539 3.32269L11.5327 1.52796Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  )}
                </button>
              </div>
              <div
                className={questionIndex === index ? "answer active" : "answer"}
              >
                <h2>{t("javob")}</h2>
                {lang==="uz" ? (<p>{item.answer_uz}</p>) : lang==="ru" ? (<p>{item.answer_ru===null ? item.answer : item.answer_ru}</p>) : lang==="en" ? (<p>{item.answer_en===null ? item.answer : item.answer_en}</p>) : (<p>{item.answer}</p>)}
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Savollar;
