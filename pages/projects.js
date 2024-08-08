import styles from '../styles/styles.module.css';

export default function Projects() {
  return (
    <div>
      <div className={styles.projbg}></div>
      <div className={styles.navbar}>
        <h1>
          <a href="/index" style={{ color: '#000000' }}>Home</a>
            text-align: left;
        </h1>
        <h1>
          <a href="/projects" style={{ color: '#000000' }}>Projects</a>
            text-align: right;
        </h1>
      </div>
    </div>
  );
}
