import { useState } from "react";

const emptyForm = { name: "", phone: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Démo front-end : aucun message n'est réellement envoyé
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <>
      <section className="contact" id="contact">
        <div className="card4">
          <p className="card1-text">Prêt à organiser votre prochaine aventure ?</p>
        </div>

        <div className="formu">
          {sent ? (
            <div className="form" role="status">
              <p className="title">Merci !</p>
              <p className="form-note">
                Votre message a bien été reçu (démo : rien n’est réellement envoyé).
              </p>
              <button type="button" onClick={() => setSent(false)}>Envoyer un autre message</button>
            </div>
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <h2 className="title">Contactez-nous</h2>

              <label htmlFor="name" className="sr-only">Nom</label>
              <input id="name" name="name" type="text" placeholder="Votre nom" autoComplete="name" required value={form.name} onChange={update} />

              <label htmlFor="phone" className="sr-only">Téléphone</label>
              <input id="phone" name="phone" type="tel" placeholder="Votre téléphone (facultatif)" autoComplete="tel" value={form.phone} onChange={update} />

              <label htmlFor="email" className="sr-only">E-mail</label>
              <input id="email" name="email" type="email" placeholder="Votre e-mail" autoComplete="email" required value={form.email} onChange={update} />

              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" placeholder="Votre message" required value={form.message} onChange={update}></textarea>

              <button type="submit">Envoyer</button>
            </form>
          )}
        </div>
      </section>

      <footer>
        <p>© 2025 Travel Ventures — projet d’Emile Dufoulon</p>
      </footer>
    </>
  );
};

export default Contact;
