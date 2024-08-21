import styles from '../styles/styles.module.css';

export default function Projects() {
  return (
    <div>
      <div className={styles.projbg}></div>
      <div className={styles.navbarproj}>
        <h1>
          <a href="/home" style={{ color: '#000000' }}>Home</a>
        </h1>
        <h1>
          <a href="/projects" style={{ color: '#000000' }}>Stuff</a>
        </h1>
      </div>
      <div className={styles.projcontainer}> 
        <h2> nothing yet !!! 😔🙏</h2>
      </div>
    </div>
  );
}
