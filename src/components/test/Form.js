import React from 'react'

export const Form = () => {

   

    const handleSubmit = (e) => {
        const fr = new FormData(e.target)


        e.preventDefault();
        for (let [a, b] in Object.entries(fr)){
            console.log(`${a} : ${b}`)
        }
        // You can perform actions with the form data here
        // console.log(formData);
      };
  return (
    <div>
        <form onSubmit={handleSubmit}>
        {/* Name */}
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
        //   value={formData.name}
        //   onChange={handleChange}
          required
        />
        <br />

        {/* Phone */}
        <label htmlFor="phone">Phone:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
        //   pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="123-456-7890"
        //   value={formData.phone}
        //   onChange={handleChange}
          required
        />
        <br />

        {/* Address */}
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          rows="4"
        //   value={formData.address}
        //   onChange={handleChange}
          required
        ></textarea>
        <br />

        {/* File Upload */}
        <label htmlFor="file">Upload File:</label>
        <input
          type="file"
          id="file"
          name="file"
          accept=".pdf, .doc, .docx"
        //   onChange={handleChange}
          required
        />
        <br />

        {/* Submit Button */}
        <input type="submit" value="Submit" />
      </form>

    </div>
  )
}
