// src/components/Contact.jsx

import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <div className="card4">
          <p className="card1-text">Prêt à organiser votre prochaine aventure ? ✈️</p>
        </div>

        <div className="formu">
          <form className="form">
            <div className="title">Contact us</div>

            <input type="text" placeholder="Your name" />
            <input type="tel" placeholder="Your Number" />
            <input type="email" placeholder="Your email" />

            <textarea placeholder="Your message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <footer>
        <p>© 2025 Travel Ventures | All rights reserved</p>
      </footer>
    </>
  );
};

export default Contact;
