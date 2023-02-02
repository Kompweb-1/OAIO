import React, { useState } from "react";
import "../../style/subscribe.css";
// import TextField from "@mui/material/TextField";

function Subscribe() {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  if (status === "success") {
    return (
      <>
        <h2>check your email</h2>
      </>
    );
  }

  const handleChange = (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      setValue(e.target.value);
      const email = {
        value,
      };
      setStatus("success");
      console.log(email);
    } catch (err) {
      setStatus("typing");
      setError(err);
    }
  };
  // fetch("http://localhost:8080/subscribe", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(email),
  // }).then((response) => response.json());
  // .then((data) => console.log(data));

  // Retrieve the stored email addresses
  // fetch("http://localhost:8080/subscribe").then((response) => response.json());
  // .then((data) => console.log(data));

  // const clearInput = () => {
  //   setValue("");
  // };

  return (
    <>
      <div className='subscribe'>
        <form onSubmit={handleChange}>
          <input
            id='standard-basic'
            type='text'
            value={value}
            placeholder='email'
            label='enter email:'
            variant='standard'
            onChange={(e) => setValue(e.target.value)}
            disabled={status === "submitting"}
          />
          {/* <TextField
            id='standard-basic'
            type='text'
            value={value}
            label='enter email:'
            variant='standard'
            onChange={(e) => setValue(e.target.value)}
            disabled={status === "submitting"}
          /> */}
          <button
            // type='button'
            // onClick={clearInput}
            // disabled={error !== null || value === 0 || status === "submitting"}
            disabled={
              error !== null && <p className='Error'>{error.message}</p>
            }>
            SUBMIT
          </button>
        </form>
      </div>
      <h6>Stay up to date on development</h6>
    </>
  );
}

export default Subscribe;
