import Line from "../line/Line";
import "./registratsiya.css";
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
              <input className="writing" type="text" placeholder="To'liq ism sharifingizni kiriting"/>
          </div>
          <div className="cart">
              <p>Viloyat.*</p>
              <select className="writing" type="text" placeholder="To'liq ism sharifingizni kiriting">
                <option disabled selected>Viloyatingizni tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Telefon raqam.*</p>
              <input className="writing" type="text" placeholder="+998 ** *** ****"/>
          </div>
          <div className="cart">
              <p>Ish joyingiz.*</p>
              <input className="writing" type="text" placeholder="Ish joyingizni kiriting"/>
          </div>
          <div className="cart">
              <p>Mutaxasisiligi.*</p>
              <select className="writing">
                <option disabled selected>Tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
              <input className="writing" type="file"/>
          </div>
          <div className="cart">
              <p>Soxadagi mutaxasisligi.*</p>
              <select className="writing">
                <option disabled selected>Tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
              <input className="writing" type="file"/>
          </div>
          <div className="cart">
              <p>Yutuqlar.*</p>
              <select className="writing">
                <option disabled selected>Tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
              <input className="writing" type="file"/>
          </div>
          <div className="cart">
              <p>Malaka oshirish.*</p>
              <select className="writing">
                <option disabled selected>Viloyatingizni tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
              <input className="writing" type="file"/>
          </div>
          <div className="cart">
              <p>Ilmiy faoliyati.*</p>
              <select className="writing">
                <option disabled selected>Tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
              <input className="writing" type="file"/>
          </div>
          <div className="cart">
              <p>Seminar va konferensiyalarda ishtiroki.*</p>
              <select className="writing">
                <option disabled selected>Tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
              <input className="writing" type="file"/>
          </div>
          <div className="cart">
              <p>Xorijiy til bilish darajasi.*</p>
              <select className="writing">
                <option disabled selected>Tanlang</option>
              </select>
          </div>
          <div className="cart">
              <p>Xujjatingizni skaner formatini ushbu maydonga yuklang.*</p>
              <input className="writing" type="file"/>
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
