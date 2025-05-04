import React, { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Affiche le message de succès
    setSubmitted(true);

    // Réinitialise les champs
    setFormData({
      nom: '',
      email: '',
      message: ''
    });

    // Cache le message après 3 secondes
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-container my-5">
      <h2 className="text-center mb-4">Contact</h2>

      {submitted && (
        <div className="success-message">
          ✅ Message envoyé avec succès !
        </div>
      )}

      <form className="contact-form mx-auto" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nom">Nom</label>
          <input
            type="text"
            id="nom"
            placeholder="Votre nom"
            value={formData.nom}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Votre email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="contact-btn">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
  // /////////////////////////
//   import React, { useState } from 'react';
// import emailjs from 'emailjs-com';
// import '../styles/Contact.css';

// function Contact() {
//   const [submitted, setSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     nom: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prev) => ({ ...prev, [id]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs.send(
//       'YOUR_SERVICE_ID',
//       'YOUR_TEMPLATE_ID',
//       {
//         from_name: formData.nom,
//         from_email: formData.email,
//         message: formData.message,
//       },
//       'YOUR_PUBLIC_KEY'
//     ).then(
//       (response) => {
//         setSubmitted(true);
//         setFormData({ nom: '', email: '', message: '' });
//         setTimeout(() => setSubmitted(false), 3000);
//       },
//       (error) => {
//         alert('Erreur lors de l’envoi : ' + error.text);
//       }
//     );
//   };

//   return (
//     <div className="contact-container my-5">
//       <h2 className="text-center mb-4">Contact</h2>

//       {submitted && (
//         <div className="success-message">✅ Message envoyé avec succès !</div>
//       )}

//       <form className="contact-form mx-auto" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="nom">Nom</label>
//           <input type="text" id="nom" value={formData.nom} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email</label>
//           <input type="email" id="email" value={formData.email} onChange={handleChange} required />
//         </div>
//         <div className="form-group">
//           <label htmlFor="message">Message</label>
//           <textarea id="message" rows="5" value={formData.message} onChange={handleChange} required />
//         </div>
//         <div className="text-center">
//           <button type="submit" className="contact-btn">Envoyer</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;
