import React from "react";

function FontSizeButton() {
  function handleSelect(event) {
    localStorage.setItem("font", event.target.value);
    window.location.reload();
  }
  return (
    <div>
      <select onChange={handleSelect}>
        <option value="dark">dark</option>
        <option value="red">red</option>
        <option value="yellow">yellow</option>
      </select>
    </div>
  );
}

export default FontSizeButton;
