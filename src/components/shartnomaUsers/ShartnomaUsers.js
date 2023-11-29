import React, { useState } from "react";

function ShartnomaUsers({valueChanger, data}) {

    const [contract, setContract] = useState(data)

    const dataChanger = (key, value) => {
        setContract(prev=> {
            valueChanger({
                ...prev,
                [key+""]: value
            })
            return {
                ...prev,
                [key+""]: value
            }
        })
    }

  return (
    <div>
      <div className="box2">
        <div className="cart">
          <p>F.I.Sh</p>
          <input
            type="text"
            className="item"
            placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
            value={contract.val1}
            onInput={(event) => {
                dataChanger("val1", event.target.value)
            }}
          ></input>
        </div>
        <div className="cart">
          <p>Lavozimi</p>
          <input
            type="text"
            className="item"
            placeholder="Lavozimini kiriting"
            value={contract.val2}
            onInput={(event) => {
                dataChanger("val2", event.target.value)
            }}
          ></input>
        </div>
        <div className="cart">
          <p>Telefon raqami</p>
          <input
            type="tel"
            className="item"
            placeholder="Telefon raqamini kiriting"
            onInput={(event) => {
                dataChanger("val3", event.target.value)
            }}
            value={contract.val3}
          ></input>
        </div>
        <div className="cart">
          <p>Passport seriasi va raqami</p>
          <input
            type="text"
            className="item"
            placeholder="Passport seriasini va raqamini kiriting"
            value={contract.val4}
            onInput={(event) => {
                dataChanger("val4", event.target.value)
            }}
          ></input>
        </div>
        <div className="cart">
          <p>JShShIR</p>
          <input
            type="text"
            className="item"
            placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
            value={contract.val5}
            onInput={(event) => {
                dataChanger("val5", event.target.value)
            }}
          ></input>
        </div>
        
      </div>
    </div>
  );
}

export default ShartnomaUsers;
