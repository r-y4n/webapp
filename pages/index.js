if (/Mobi|Android|iPhone/i.test(globalThis.navigator.userAgent)) {
    window.location.replace("/home");
} else {
    const messageDiv = document.createElement('div');
    const messageHeader = document.createElement('h1');
    messageHeader.textContent = "Sorry, This page cannot be viewed on your device.";
    messageDiv.appendChild(messageHeader);
    document.body.appendChild(messageDiv);
}
