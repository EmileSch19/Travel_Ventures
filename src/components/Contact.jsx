import { useState } from "react";
import { destinations } from "../data/destinations";

const emptyForm = { name: "", email: "", message: "" };

const Contact = ({ destination, setDestination }) => {
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
    <section className="wrap section contact" id="contact">
      <div>
        <h2 className="section-title">Prêt à organiser votre prochaine aventure ?</h2>
        <p className="muted">
          Dites-nous où vous voulez aller, on vous répond. (Démo : rien n’est réellement envoyé.)
        </p>
      </div>

      {sent ? (
        <div className="panel" role="status">
          <h3 className="panel-title">Merci !</h3>
          <p className="muted">Votre demande pour « {destination} » a bien été reçue.</p>
          <button type="button" className="btn" onClick={() => setSent(false)}>Envoyer une autre demande</button>
        </div>
      ) : (
        <form className="panel form" onSubmit={handleSubmit}>
          <h3 className="panel-title">Contactez-nous</h3>

          <label htmlFor="name">Nom</label>
          <input id="name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} />

          <label htmlFor="email">E-mail</label>
          <input id="email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} />

          <label htmlFor="destination">Destination souhaitée</label>
          <select id="destination" value={destination} onChange={(e) => setDestination(e.target.value)}>
            {destinations.map((d) => <option key={d.id} value={d.name}>{d.name}</option>)}
          </select>

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required value={form.message} onChange={update}></textarea>

          <button type="submit" className="btn">Envoyer</button>
        </form>
      )}
    </section>
  );
};

export default Contact;
