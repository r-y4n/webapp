import { useEffect } from 'react';

export default function check() {
  useEffect(() => {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
      window.location.replace("/home");
    } else {
      const messageDiv = document.createElement('div');
      messageDiv.style.textAlign = 'center';
      messageDiv.style.padding = '50px';
      messageDiv.style.fontSize = '18px';
      messageDiv.style.color = '#333';

      const messageHeader = document.createElement('h1');
      messageHeader.textContent = "Sorry, this page cannot be viewed on your device.";
      messageDiv.appendChild(messageHeader);

      document.body.appendChild(messageDiv);
    }
  }, []);

  return null;
}
