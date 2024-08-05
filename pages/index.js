import { useState, useEffect } from 'react';
import styles from '../styles/styles.module.css';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('/api/images');
        const data = await response.json();
        setImages(data.map(image => image.url));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  useEffect(() => {
    if (images.length === 0) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(true);
      }, 1000); // Match this duration to the CSS transition duration
    }, 4000); // Change image every 4 seconds (including 1 second for fade out and 1 second for fade in)

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <p><small>all code on this website and in <a href="https://github.com/r-y4n" style="color: #0000eb;">GitHub</a> made by ryan j.</small></p>
      <p><small>optimized for iphone.<small><p>
    `;
    footer.style.backgroundColor = '#333';
    footer.style.color = '#d8d8ff';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';
    footer.style.position = 'fixed';
    footer.style.bottom = '0';
    footer.style.width = '95%';
    footer.style.height = 'auto'; // Adjust height as needed
    document.body.appendChild(footer);

    return () => {
      document.body.removeChild(footer);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>hi</h1>
      {images.length > 0 && (
        <img 
          src={images[currentImageIndex]} 
          alt="If you are seeing this I made an oopsie 😔🙏" 
          className={`${styles.image} ${fade ? styles['fade-in'] : ''}`} 
        />
      )}
      <div className={styles.circ2}></div>
      <div className={styles.circ1}></div>
    </div>
  );
}
