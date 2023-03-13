import styles from '../styles/Home.module.css';

function Servicios() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Servicios</h1>
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src="/Icono1.svg" alt="icono1" />
          <h2>Dessarrollo Web</h2>
          <p>Desarollamos páginas web únicas y perzonalizadas que representan tu negocio de la mejor manera posible</p>
        </div>
        <div className={styles.card}>
          <img src="/Icono1-1.svg" alt="icono 2" />
          <h2>Aplicaciones Moviles</h2>
          <p>Creamos aplicaciones móviles personalizadas para Android e iOS que potencian tu negocio.</p>
        </div>
        <div className={styles.card}>
          <img src="/Icono1-2.svg" alt="Activo 3" />
          <h2>Software a medida</h2>
          <p>Creamos software personalizado que se ajusta a las necesidades de tu negocio y mejora tus procesos empresariales.</p>
        </div>
        <div className={styles.card}>
          <img src="/Icono1-3.svg" alt="Activo 4" />
          <h2>Bases de Datos</h2>
          <p>Optimizamos y diseñamos bases de datos a medida para potenciar el rendimiento y la eficiencia de tu negocio.</p>
        </div>
      </div>
    </div>
  );
}

export default Servicios;
