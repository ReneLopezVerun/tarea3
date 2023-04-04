import { useState } from 'react';
import styles from '../form/ContactForm.module.css'

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault();
    console.log(`Email: ${email}, Subject: ${subject}`);
    setEmail('');
    setSubject('');
  };

  return (
    <div className={styles.formContainer}>
    <form className={styles.formu} onSubmit={handleSubmit}>
      <div className={styles.previousElement}></div>
      <h1 className={styles.titulo}>Contactanos</h1>
      <input
      className={styles.entradas}
        id="email"
        type="email"
        placeholder="Correo Electronico"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
      className={styles.entradas}
        id="subject"
        type="text"
        placeholder="Asunto"
        value={subject}
        onChange={(event) => setSubject(event.target.value)}
      />
      <button type="submit" className={styles.buton}>
        Enviar
      </button>
    </form>
    </div>
  );
}
