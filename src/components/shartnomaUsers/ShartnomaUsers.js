import React, { useState } from "react";

function ShartnomaUsers({valueChanger, data}) {  //valueChanger  Shartnoma companentidagi CHangeUserContract funksiyasi, bu funcsiya father componentada child componenetdan kelgan malumotlarni tekshiradi fa saqlaydi

    const [contract, setContract] = useState(data)    //contract xar bir card ichidagi object

    const dataChanger = (key, value) => {   //dataChanger funksiyasi xar bir inputga kiritilganmalumotni name va value si bilan saqlaydi
        setContract(prev=> {   // bu qismida contract objectini eski qiymatini clone qilib oladi va va yonidan xar bir bir inputga yangi kiritilgan malumotni name va value si bilan saqlaydi
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
    const [base64String, setBase64String] = useState('');
    
    const handleChangeFile = (event) => {
      const file = event.target.files[0]

      // if (file) {
      //   const fileType = getFileType(file);
      //   convertFileToBase64(file, fileType)
      //     .then((result) => {
      //       setBase64String(result);
            
      //       console.log(result)
            dataChanger("passport_file", file)
        //   })
        //   .catch((error) => {
        //     console.error('Error converting file to Base64:', error);
        //   });
        // }
    }

  // const convertFileToBase64 = (file, fileType) => {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();

  //     reader.onload = () => {
  //       const base64Data = reader.result.split(',')[1];
  //     const dataURL = `data:${fileType};base64,${base64Data}`;
  //     resolve(dataURL);
  //     };

  //     reader.onerror = (error) => {
  //       reject(error);
  //     };

  //     reader.readAsDataURL(file);
  //   });
  // };
  // const getFileType = (file) => {
  //   return file.type || 'application/octet-stream';
  // };
  return (
    <div>
      <div className="box2">
        <div className="cart">
          <p>F.I.Sh</p>
          <input
            type="text"
            className="item"
            placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
            value={contract.full_name}
            onInput={(event) => {
                dataChanger("full_name", event.target.value)
            }}
          ></input>
        </div>
        <div className="cart">
          <p>Lavozimi</p>
          <input
            type="text"
            className="item"
            placeholder="Lavozimini kiriting"
            value={contract.position}
            onInput={(event) => {
                dataChanger("position", event.target.value)
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
                dataChanger("phone", event.target.value)
            }}
            value={contract.phone}
          ></input>
        </div>
        <div className="cart">
          <p>Passport seriasi va raqami</p>
          <input
            type="text"
            className="item"
            placeholder="Passport seriasini va raqamini kiriting"
            value={contract.passport_data}
            onInput={(event) => {
                dataChanger("passport_data", event.target.value)
            }}
          ></input>
        </div>
        <div className="cart">
          <p>JShShIR</p>
          <input
            type="text"
            className="item"
            placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
            value={contract.jshshir}
            onInput={(event) => {
                dataChanger("jshshir", event.target.value)
            }}
          ></input>
        </div>
        <div className="cart">
          <p>file</p>
          <input
            type="file"
            className="item"
            placeholder="Tashkilot rahbari F.I.Sh. ni yozing"
            // value={contract.passport_file}
            onChange={handleChangeFile}
          ></input>
        </div>
      </div>
    </div>
  );
}

export default ShartnomaUsers;
