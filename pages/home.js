import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

const images = [
  '/images/IMG_4028.jpeg',
  '/images/IMG_4001.jpeg',
  '/images/IMG_7634.jpeg'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); 
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <p><small>all code on this website and in <a href="https://github.com/r-y4n" style="color: #0000eb;">GitHub</a> made by ryan j.</small></p>
      <p><small>Optimized for iPhone</small></p>
    `;
    footer.style.backgroundColor = '#d8ebff';
    footer.style.opacity = '80%';
    footer.style.color = '#d8d8ff';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '95%';
    footer.style.height = 'auto';
    document.body.appendChild(footer);

    return () => {
      document.body.removeChild(footer);
    };
  }, []);

  return (
    <div className={styles.indxcontainer}>
      <img 
        src={images[currentImageIndex]} 
        alt="if you are seeing this i made an oopsie 😔🙏" 
        className={`${styles.image} ${fade ? styles['fade-in'] : ''}`} 
      />
      <div className={styles.circ2}></div>
      <div className={styles.circ1}></div>
        <div className={styles.navbarind}>
        <h1>
          <a href="/home" style={{ color: '#000000' }}>Home</a>
        </h1>
        <h1>
          <a href="/projects" style={{ color: '#000000' }}>Stuff</a>
        </h1>
      </div>
    </div>
  );
}
