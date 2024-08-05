import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

const images = [
  '/images/IMG_4028.jpeg',
  '/images/IMG_4001.jpeg',
  '/images/IMG_7634.jpeg'
];
<div className={styles.circ1}></div>
export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Match this duration to the CSS transition duration
    }, 4000); // Change image every 4 seconds (including 1 second for fade out and 1 second for fade in)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1> </h1>
      <img 
        src={images[currentImageIndex]} 
        alt="if you seeing this I made an oopsie 😔🙏" 
        className={`${styles.image} ${fade ? styles['fade-in'] : ''}`} 
      />
         <div className={styles.circ1}></div>
    </div>
    <footer>
        <p> webapp optimized for iPhone <p>
        <p> all code on this website designed by Ryan J.<p>
        <p> repo for the website on my github r-y4n <p>
    <footer>
  );
}
