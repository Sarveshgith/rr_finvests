// src/components/FooterEmailForm.js

import React, { useState } from "react";
import emailjs from "emailjs-com";

const FooterEmailForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",       // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",       // Replace with your EmailJS template ID
        templateParams,
        "YOUR_PUBLIC_KEY"         // Replace with your EmailJS public key
      )
      .then(
        () => setStatus("Message sent successfully!"),
        (error) => setStatus("Failed to send message: " + error.text)
      );

    setEmail("");
    setMessage("");
  };

  return (
    <div className="footer-email-form">
      <form onSubmit={sendEmail}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="form2"
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="next-button4">Send</button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
};

export default FooterEmailForm;
