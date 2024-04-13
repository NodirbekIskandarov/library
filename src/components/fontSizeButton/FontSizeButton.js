import React from "react";
import './fontSizeButton.css'
function FontSizeButton() {
  function handleSelect (props) {
    console.log(props)
    localStorage.setItem("font", props);
    window.location.reload();
  }
  return (
    <div>
      <div className="father_of_buttons">
        <div className="single_font_button">
          <button className="single_button" onClick={()=>handleSelect("red")}>A -</button>
        </div>
        <div className="single_font_button">
          <button className="single_button" onClick={()=>handleSelect("yellow")}>A +</button>
        </div>
      </div>
    </div>
  );
}

export default FontSizeButton;
