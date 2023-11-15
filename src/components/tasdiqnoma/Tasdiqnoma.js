import React from "react";
import "./tasdiqnoma.css";
import Line from "../line/Line";
import fayl from "../../assets/images/Rectangle 39.png";
import download from "../../assets/images/Download.png";
import { useLocation } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
function Tasdiqnoma() {
  const { state } = useLocation();

  return (
    <div className="tasdiqnoma">
      <div className="container">
      <div className="locationOfPage">
          <p>Markaz haqida</p>
          <MdKeyboardArrowRight />
          <p>{state.name}</p>
        </div>
        <div className="title">
          <Line />
          <div className="titlePart">
            <h3>Tasdiqnoma</h3>
            <p>Kutubxonamiz yuridik jihatdan tashkil topishi xaqida</p>
          </div>
        </div>
        <div className="text">
          <div className="textPart">
            <p>
              Lorem ipsum dolor sit amet consectetur. Parturient sed velit nulla
              libero aliquet accumsan ultrices. Ultricies ultrices sit at vitae.
              Scelerisque ac netus non porttitor mi viverra nibh ut diam.
              Facilisis integer tristique pharetra senectus et urna. Sapien nec
              suscipit id orci auctor ut odio amet. Suspendisse facilisi
              convallis lorem amet velit eu vitae sed. Volutpat vel arcu non
              bibendum diam quis lorem quis. Vitae magnis lectus et curabitur
              nisl egestas felis turpis. Rhoncus non dolor nulla in et nibh.
              Euismod habitant mauris nunc nunc malesuada porttitor vel ornare.
              Nisi donec tortor sed est arcu et. Suscipit mollis nisl commodo eu
              dolor integer ultricies phasellus eu. Mattis praesent est non
              tempor nulla aliquet vel. Tempor viverra suspendisse elit tortor
              lectus arcu morbi. Vestibulum cursus dignissim purus at mattis
              blandit. Magna egestas pretium praesent nulla ultrices sed.
              Facilisis hendrerit amet adipiscing integer vivamus. Ac gravida et
              sagittis dictum pharetra viverra nibh. Vitae aliquam vulputate
              ipsum egestas vivamus. Pellentesque nisl pretium id scelerisque ut
              cras fermentum dignissim. Vestibulum semper tortor tortor mauris
              et urna egestas lorem. Mauris facilisi scelerisque rutrum amet sed
              arcu nunc. Nunc nunc id vitae fermentum a neque mauris arcu.
              Natoque ac at urna elementum id sed erat sed tellus. Vitae sed
              egestas et diam tincidunt. Quis at ut urna gravida eu phasellus
              amet sagittis. Non auctor velit tempus viverra donec mi arcu. At
              consequat volutpat viverra rhoncus massa sed viverra. Ipsum cras
              ut odio massa massa facilisis duis fermentum mauris. At enim orci
              commodo ut. Aenean facilisis elementum est sed consequat vitae
              nisl placerat. Cras adipiscing id amet justo ipsum convallis amet.
              Pellentesque volutpat congue iaculis pellentesque turpis malesuada
              dui mollis diam. Diam commodo arcu pulvinar non ipsum. Ipsum netus
              donec vulputate purus malesuada elit. At rhoncus semper vel
              tincidunt at. Non adipiscing enim a sed. Est integer pulvinar nisl
              nulla pharetra lorem mauris elementum nunc. Consectetur auctor
              mauris aliquet blandit mauris. Suscipit mauris orci tortor
              interdum senectus tristique sollicitudin. Non suscipit tortor nunc
              lobortis sit facilisis. In enim feugiat imperdiet mattis nibh
              tempor malesuada eu sed. Quis nibh faucibus nulla sed massa quis.
              Curabitur eget et aenean et. Faucibus tellus eleifend a varius.
              Viverra quam viverra eu pretium.
            </p>
          </div>
          <div className="filePart">
            <img src={fayl} alt="file" />
            <h3>Tasdiqnoma</h3>
            <button>
              <img src={download} alt="down" /> PDF da yuklab olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasdiqnoma;
