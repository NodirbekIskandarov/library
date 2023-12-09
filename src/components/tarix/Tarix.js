import React, { useEffect, useState } from "react";
import "./tarix.css";
import Line from "../line/Line";
import books from "../../assets/images/books-1617327_1280 1.png";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { BASE_URL, HISTORY } from "../../tools/urls";
function Tarix() {
  const { t } = useTranslation()
  const { state } = useLocation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let lang = JSON.parse(localStorage.getItem("lang"))
  // console.log(lang)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/${HISTORY}`);
        setData(response.data);
        // console.log(response.data)
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  if (loading) return <p className="loading"><img src="https://miro.medium.com/v2/resize:fit:882/format:webp/1*9EBHIOzhE1XfMYoKz1JcsQ.gif" alt="loader"/></p>;
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="tarix">
      <div className="container">
        <div className="locationOfPage">
          <p>{t("markaz_haqida")}</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="main">
          <div className="image">
            <img src={data.file} alt="books image" />
          </div>
          <div className="text1">
            <div className="title">
              <Line />
              <div className="titlePart">
                <div>{lang==="uz" ? (<h2>{data.title_uz}</h2>) : lang==="ru" ? (<h2>{data.title_ru===null ? data.title : data.title_ru}</h2>) : lang==="en" ? (<h2>{data.title_en===null ? data.title : data.title_en}</h2>) : (<h2>{data.title}</h2>)}</div>
                <div>{lang==="uz" ? (<p>{data.subtitle_uz}</p>) : lang==="ru" ? (<p>{data.subtitle_ru===null ? data.subtitle : data.subtitle_ru}</p>) : lang==="en" ? (<p>{data.subtitle_en===null ? data.subtitle : data.subtitle_en}</p>) : (<p>{data.subtitle}</p>)}</div>
              </div>
            </div>
            {/* {lang==="ru" ? (<p>{data.ru.body}</p>) : (<p>{data.uz.body}</p>)} */}

            <p>
              Lorem ipsum dolor sit amet consectetur. Ipsum sollicitudin egestas
              posuere a. Nisl est commodo adipiscing donec et tellus eu facilisi
              tincidunt. Euismod morbi aenean enim amet adipiscing. Viverra diam
              senectus quis suspendisse lacus sollicitudin tellus. Neque
              malesuada sed nam viverra. Amet nulla ornare faucibus tristique.
              Ut mauris viverra et volutpat morbi imperdiet. Adipiscing integer
              ornare faucibus id pharetra quam senectus. Sed mi viverra quis
              arcu nec lectus scelerisque. Ullamcorper non vel eu quam accumsan
              gravida viverra convallis in. Ornare maecenas velit fringilla
              dolor lectus felis elementum. Sed vel purus neque quam nisl
              habitasse tempus felis. Consequat maecenas iaculis mattis at
              quisque elementum dolor. Tortor tincidunt lectus amet cras quis
              dignissim cursus. Amet tellus mattis leo commodo pulvinar etiam
              turpis sit. Rutrum hac sem habitant a nisi elementum scelerisque.
              Nunc id id in tortor pretium at id habitant. Mauris amet aenean
              eros euismod. Morbi at massa arcu in laoreet sem ut sodales nunc.
              Ut mauris eros amet maecenas phasellus. Lacus tristique viverra
              duis donec odio laoreet pharetra venenatis sagittis. Vehicula amet
              senectus lorem et cursus id feugiat. Duis enim at ac consequat
              fringilla. Purus maecenas placerat cursus.
            </p>
          </div>
          <div className="text2">
            <p>
              Lorem ipsum dolor sit amet consectetur. Tellus sed lectus eget
              pellentesque volutpat vel morbi viverra faucibus. Elit quis
              ultrices nibh dui morbi aliquet vestibulum. Magna ullamcorper
              auctor aliquam consectetur eu nunc. Id tortor vitae congue
              maecenas. Suspendisse lobortis tortor sit nisi odio vitae tellus
              odio laoreet. Sapien accumsan auctor sed nisl tristique. Vitae
              vitae odio enim at. Faucibus eget at et vehicula odio morbi justo
              lectus ante. Sollicitudin enim cras leo consectetur hendrerit
              dictumst. Pharetra integer ipsum massa varius dignissim vivamus.
              Feugiat feugiat ac et at aliquam proin. Pellentesque aliquam
              lobortis felis egestas lorem at. Scelerisque pharetra purus
              aliquet nibh non. Eget fringilla amet porttitor dolor convallis
              sem. Gravida leo sed porttitor malesuada. Elementum vitae aliquet
              rhoncus eget metus id feugiat adipiscing. Eu egestas at dictumst
              suscipit volutpat gravida sem. Donec morbi ut morbi quis in tellus
              urna in. Sapien lacus urna purus eget. Nibh lorem sed sit volutpat
              proin. Nisl aliquam malesuada est pharetra scelerisque imperdiet
              augue nunc etiam. Nunc diam nec tellus imperdiet id est. Vulputate
              faucibus at consectetur convallis malesuada id. Quam malesuada est
              egestas sapien vel vitae phasellus vestibulum proin. Diam orci
              ultricies diam convallis lobortis. Ultrices est lectus dictum
              lacus lacinia. At neque varius est mollis. Vulputate nunc amet
              aliquam fames viverra nulla maecenas sit. In nunc turpis congue
              cras sollicitudin scelerisque urna natoque sem. Elit pellentesque
              vulputate consectetur metus molestie mi vel senectus. Risus
              venenatis lectus nulla morbi facilisis vitae sapien vitae potenti.
              Vulputate purus mauris leo commodo vel quam. Aliquet sapien varius
              interdum eget quisque et rhoncus. Faucibus urna amet fermentum
              aenean. Platea magna quis auctor eleifend et. Egestas pellentesque
              nisl ultrices tempor nibh. Vitae integer aliquam ipsum dui nulla
              iaculis porttitor amet. Nunc lorem sit felis et nulla neque.
              Placerat odio quisque nunc amet consectetur aliquam viverra. Ipsum
              amet tincidunt nunc lobortis sagittis. Eget lacus pulvinar mi
              maecenas egestas. Imperdiet metus at interdum aliquet. Leo tortor
              felis fringilla posuere. Id quam vulputate purus tortor eu purus
              turpis sollicitudin mattis. Orci faucibus venenatis at volutpat
              metus ridiculus iaculis ipsum. Imperdiet ultricies velit ipsum
              libero. Dolor integer ut in sollicitudin in. Sed lacinia congue et
              massa tortor elementum nunc magna. Aenean a dui id urna enim nunc
              augue eros. Ut et dui sed scelerisque mi vulputate suscipit
              sagittis. Dolor adipiscing turpis morbi ut. Euismod cras ultricies
              ac sit faucibus imperdiet nunc. Sodales et vitae nec in vitae
              placerat vulputate imperdiet fringilla. Arcu tempus amet bibendum
              volutpat molestie. Leo curabitur tortor a odio nisi. Mauris at in
              phasellus sed tristique eu purus justo sed. Massa consectetur
              tortor cras volutpat suspendisse enim. Volutpat viverra a nisi
              egestas tristique mauris feugiat venenatis pellentesque. Integer
              praesent id nulla arcu blandit lectus. Id sagittis at pellentesque
              sed quis integer purus fusce curabitur. Dui nulla.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tarix;
