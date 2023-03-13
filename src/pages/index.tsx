import styles from '../styles/Home.module.css'
import Servicios from '../components/Servicios';
import ContactForm from '../components/ContactForm';
import ContactInfo from '../components/ContactInfo';

function Index() {
  return (
    <div>
        <Servicios />
      <div className={styles.container2}>
      <ContactForm />
      <ContactInfo />
      </div>
    </div>
  );
}

export default Index;
