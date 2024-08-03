import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

const images = [
  '/images/pic1.jpg',
  '/images/pic2.jpg',
  '/images/pic3.jpg'
];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Image Cycler</h1>
      <img src={images[currentImageIndex]} alt="Cycling images" className={styles.image} />
    </div>
  );
}
