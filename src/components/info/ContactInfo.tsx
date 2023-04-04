import React from 'react';
import styles from '../info/ContactInfo.module.css'
const ContactInfo = () => {
  return (
    <div className={styles.containerInfo}>
      <h2 className={styles.title}>Información de Contacto</h2>
      <div className={styles.contactSection}>
        <img src="/facebook.svg" alt="Imagen 1" className={styles.image} />
        <div className={styles.info}>
          <h3 className={styles.subtitle}>Facebook</h3>
          <a href="#" className={styles.link}>www.facebook.cm/sts</a>
        </div>
      </div>
      <div className={styles.contactSection}>
        <img src="/email.svg" alt="Imagen 2" className={styles.image} />
        <div className={styles.info}>
          <h3 className={styles.subtitle}>Correo</h3>
          <a href="#" className={styles.link}>sts.puebla@gmail.com</a>
        </div>
      </div>
      <div className={styles.contactSection}>
        <img src="/whatsapp.svg" alt="Imagen 3" className={styles.image} />
        <div className={styles.info}>
          <h3 className={styles.subtitle}>WhatsApp</h3>
          <a href="#" className={styles.link}>222-222-2222</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
