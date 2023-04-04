import styles from '../styles/Home.module.css'
import Servicios from '../components/services/Servicios';
import ContactForm from '../components/form/ContactForm';
import ContactInfo from '../components/info/ContactInfo';

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
