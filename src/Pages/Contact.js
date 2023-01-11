import React from "react";
import "../style/contact.css";

const Contact = () => {
  return (
    <div className='container'>
      <h1 className='brand'>
        <span>OAIO</span> Studio
      </h1>
      <div className='contact-wrapper'>
        <div className='contact'>
          <h4>Email Us</h4>
          <div className='alert'>Your message has been sent</div>
          <form id='contactForm'>
            <p>
              <label>Name</label>
              <input type='text' name='name' id='name' required></input>
            </p>
            <p>
              <label>Company</label>
              <input type='text' name='company' id='company'></input>
            </p>
            <p>
              <label>Email Address</label>
              <input type='email' name='email' id='email' required></input>
            </p>
            <p>
              <label>Phone Number</label>
              <input type='text' name='phone' id='phone'></input>
            </p>
            <p className='full'>
              <label>Message</label>
              <textarea name='message' rows='5' id='message'></textarea>
            </p>
            <p className='full'>
              <button type='submit'>Submit</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
