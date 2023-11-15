import Line from "../line/Line";
import "./registratsiya.css";
import profile from "../../assets/images/Profile 1.png";
import world from "../../assets/images/Website 2.png";
import work from "../../assets/images/Work.png";
import call from "../../assets/images/Call.png";
import download from '../../assets/images/Download.png'
function Registratsiya() {
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
              />
            </label>
          </div>
          <div className="cart">
            <p>Mutaxasisiligi.*</p>
            <label className="cart2">
              <select className="writing">
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <span>Fayl yuklanmagan</span>
              <input className="writing uploading" type="file"/>
              <div className="uploadImg">
                <img src={download} alt="logo"/>
              </div>
            </label>
          </div>
          <div className="cart">
            <p>Soxadagi mutaxasisligi.*</p>
            <label className="cart2">
              <select className="writing">
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <span>Fayl yuklanmagan</span>
              <input className="writing uploading" type="file"/>
              <div className="uploadImg">
                <img src={download} alt="logo"/>
              </div>
            </label>
          </div>
          <div className="cart">
            <p>Yutuqlar.*</p>
            <label className="cart2">
              <select className="writing">
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <span>Fayl yuklanmagan</span>
              <input className="writing uploading" type="file"/>
              <div className="uploadImg">
                <img src={download} alt="logo"/>
              </div>
            </label>
          </div>
          <div className="cart">
            <p>Malaka oshirish.*</p>
            <label className="cart2">
              <select className="writing">
                <option disabled selected>
                  Viloyatingizni tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <span>Fayl yuklanmagan</span>
              <input className="writing uploading" type="file"/>
              <div className="uploadImg">
                <img src={download} alt="logo"/>
              </div>
            </label>
          </div>
          <div className="cart">
            <p>Ilmiy faoliyati.*</p>
            <label className="cart2">
              <select className="writing">
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <span>Fayl yuklanmagan</span>
              <input className="writing uploading" type="file"/>
              <div className="uploadImg">
                <img src={download} alt="logo"/>
              </div>
            </label>
          </div>
          <div className="cart">
            <p>Seminar va konferensiyalarda ishtiroki.*</p>
            <label className="cart2">
              <select className="writing">
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <span>Fayl yuklanmagan</span>
              <input className="writing uploading" type="file"/>
              <div className="uploadImg">
                <img src={download} alt="logo"/>
              </div>
            </label>
          </div>
          <div className="cart">
            <p>Xorijiy til bilish darajasi.*</p>
            <label className="cart2">
              <select className="writing">
                <option disabled selected>
                  Tanlang
                </option>
              </select>
            </label>
          </div>
          <div className="cart">
            <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
            <label className="upload">
              <span>Fayl yuklanmagan</span>
              <input className="writing uploading" type="file"/>
              <div className="uploadImg">
                <img src={download} alt="logo"/>
              </div>
            </label>
          </div>
          <div className="sending">
            <button>Ariza jonatish</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registratsiya;
