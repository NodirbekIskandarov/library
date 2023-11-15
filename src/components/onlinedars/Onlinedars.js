import React from "react";
import Line from "../line/Line";
import "./onlinedars.css";
import img from "../../assets/images/undraw_data_points_re_vkpq.png";
import group from "../../assets/images/Group 2.png";
import clock from "../../assets/images/Time Circle 6.png";
import { Link, useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
function Onlinedars() {
  const { state } = useLocation();

  return (
    <div className="onlayndars">
      <div className="container">
      <div className="locationOfPage">
          <p>O'quv kurslari</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>Kurs xaqida</h3>
            <p>Kurs xaqida batafsil ma’lumot</p>
          </div>
        </div>
        <div className="box">
          <div className="imagePart">
            <img src={img} alt="image" />
          </div>
          <div className="cart">
            <h2>
              АXBOROT-KUTUBXONA MUASSASALARI TIZIMINI RIVOJLANTIRISH ASOSLARI
            </h2>
            <div className="group">
              <p className="first">
                <img src={group} alt="group" />
                Tinglovchilar kontingenti:
              </p>
              <p className="second">
                Аxborot-kutubxona muassasalari rahbar hamda xodimlari{" "}
              </p>
            </div>
            <div className="time">
              <p className="first">
                <img src={clock} alt="clock" />
                Kurs davomiyligi:
              </p>
              <p className="second"> 5 kun (40 soat)</p>
            </div>
            <div className="buttonPart">
              <Link className="link" to="/applicationforonline">
                <button>Kursga yozilish</button>
              </Link>
              <p>
                <span>Narx: </span> 300 000 UZS
              </p>
            </div>
          </div>
        </div>
        <div className="plan">
          <h2>Kurs rejasi</h2>
          <h4>I. Axborot-kutubxona faoliyatiga doir normativ-huquqiy baza</h4>
          <p>
            1.1 Axborot-kutubxona tizimi hamda axborot-kutubxona
            muassasalarining turlari
          </p>
          <p>
            1.2. Axborot-kutubxona faoliyati bo‘yicha qabul qilingan
            me’yoriy-huquqiy hujjatlar.
          </p>
          <p>
            1.3. Me’yoriy hujjat (nizom, yo‘riqnomalar, rejalar va hisobotlar va
            boshq.)larni tuzish metodikasi.
          </p>
          <h4>II. Yig‘ma elektron katalog tizimi</h4>
          <p>2.1. Yig‘ma elektron katalog tizimi (catalog.unicat.uz)</p>
          <p>2.2. Yig‘ma elektron katalog tizimida qidiruv turlari</p>
          <p>2.3. Hujjatning bibliografik yozuvini yaratish</p>
          <p>2.4. Hujjatning nusxasi (ekzemplyar)ni kiritish usullari</p>

          <h4>III. Axborot-kutubxona fondini komplektlash.</h4>
          <p>
            3.1. Axborot-kutubxona fondini komplektlashning qoidalari.
            Axborot-kutubxona fondining tuzilmasi
          </p>
          <p>
            3.2. Axborot-kutubxona muassasalarida axborot-kutubxona resurslarini
            hisobga olish tartibi.
          </p>
          <p>
            3.3. Axborot-kutubxona resurslari hisobni yuritishda harakat
            jarayoni (kelgan, hisobdan chiqqan), qayta baholash va tekshirishni
            tashkil qilishda uslubiy tavsiyalar. Xalqaro kitob almashinuvi.
          </p>
          <p>
            3.4. Komplektlash xizmati manbalari. (Milliy kutubxona misolida).
            Dalolatnomalar tuzish, inventar va jamlanma hisobga olish va
            buxgalteriyaga hisobotlar yuritish.
          </p>
          <h4>
            IV. Axborot-kutubxona muassasalarida foydalanuvchilarga xizmat
            ko‘rsatish
          </h4>
          <p>
            4.1. O‘quv zallarida xizmat ko‘rsatishni tashkil etish. Ochiq fond
            turlari va ularning joylashuvi
          </p>
          <p>
            4.2. Axborot-kutubxona muassasalarida ijtimoiy-madaniy faoliyat.
          </p>
          <h4>V. Axborot-kutubxona resurslarini raqamlashtirish</h4>
          <p>5.1 Bosma nashrlar va hujjatlarni raqamlashtirish</p>
          <p>5.2 Gramplastinkalarni raqamlashtirish jarayoni</p>
          <p>5.3 Elektron resurslarni saqlashga bo‘lgan talablar.</p>
          <p>5.4 Raqamlashtirilgan resurslarga qayta ishlov berish</p>
          <h4>VI. Axborot-kutubxona faoliyatida bibliografiya</h4>
          <p>
            6.1. Zamonaviy bibliografik faoliyat: asosiy tushunchalar,
            metodologiyasi, texnologiyasi. Bibliografik ma’lumotlar bazasini
            shakllantirish va foydalanish
          </p>
          <p>
            6.2. Davlat standartlariga muvofiq maqolalarni tavsiflash qoidalari
            (jurnal, gazeta maqolalari, me’yoriy-huquqiy hujjatlar, to‘plamlar,
            taqrizlarga bibliografik tavsiflar tuzish)
          </p>
          <p>
            6.3. Virtual ma’lumotnoma-bibliografiya xizmati. Axborot-kutubxona
            muassasalari saytidan bibliografik axborotlarni taqdim etishning
            asosiy shakllari.
          </p>
          <p>
            6.4. Axborot-kutubxona tizimi dasturida an’anaviy va elektron
            katalog.
          </p>
          <h4>
            VII. Axborot-kutubxona resurslarini kataloglashtirish va
            tizimlashtirish
          </h4>
          <p>7.1 Axborot-kutubxona resurslarini kataloglashtirish</p>
          <p> 7.2. Axborot-kutubxona resurslarini tizimlashtirish</p>
          <h4>VIII. Axborot-kutubxona fondlarini saqlash.</h4>
          <p>
            Nodir va alohida qimmatga ega nashrlarni saqlanishini ta’minlash,
            ularning fondini tizimli ko‘paytirish.
          </p>
          <p>
            8.1. Nodir va alohida qimmatli nashrlarning normativ-metodik
            bazasini shakllantirish.
          </p>
          <p>
            8.2. Qo‘lyozmalarni va alohida qimmatli nodir nashrlarni saqlash,
            joylashtirish va ulardan foydalanish
          </p>
          <p>
            8.3. Foydalanish jarayonida hujjatlar saqlovi uchun tahdid zonalari
          </p>
          <p>8.4. Nodir va alohida qimmatli nashrlarni pasportlashtirish</p>
          <p>8.5. Nodir nashrlar va qo‘lyozmalar ma’lumotlar bazasi</p>
          <h4>IX. Axborot-kutubxona fondi</h4>
          <p>9.1. Axborot-kutubxona fondini joylashtirish.</p>
          <p>9.2. Fondlar saqlanishiga ta’sir qiladigan omillar.</p>
          <p>9.3. Axborot-kutubxona fondlarini xatlovdan o‘tkazish.</p>
          <p>9.4. Depozitariy fondlar tashkil etish.</p>
          <h4>X. Elektron kutubxonadan foydalanish asoslari</h4>
          <p>10.1. Metama’lumotlar bilan ishlash</p>
          <p>10.2. Metama’lumotlar bilan ishlash MARC formatlari</p>
          <p>10.3. MODS metama’lumotlarni tavsiflash formati</p>
          <p>
            10.4. Axborot-kutubxonalar muassasalari uchun axborot modul tizimi
          </p>
          <p>10.5. UZMARC mashinada o‘qiladigan kommunikativ formati</p>
          <p>10.6. Dublin yadrosi metama’lumotlari. Dublin Core</p>
          <p>10.7. Elektron kutubxona menedjmenti</p>
          <p>10.8. Elektron kutubxona menedjmenti.</p>
          <p>10.9. Elektron kutubxona menedjmenti. Tashkiliy struktura</p>
          <p>10.10. RFID-texnologiyasi</p>
        </div>
      </div>
    </div>
  );
}

export default Onlinedars;
