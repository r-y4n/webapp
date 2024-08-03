import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

const images = [
  '/images/IMG_3375.jpeg',
  '/images/IMG_4001.jpeg',
  '/images/IMG_7634.jpeg'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1>i made this website to prove its easy to code</h1>
      <img src={images[currentImageIndex]} alt="Cycling images" className={styles.image} />
  </div>

  );
}
