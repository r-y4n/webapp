if (typeof window !== "undefined") {
    if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
        window.location.replace("/home");
    } else {
        const messageDiv = document.createElement('div');
        const messageHeader = document.createElement('h1');
        messageHeader.textContent = "Sorry, This page cannot be viewed on your device.";
        messageDiv.appendChild(messageHeader);
        document.body.appendChild(messageDiv);
    }
} else {
    // Code for server-side rendering if needed
    console.log("Server-side rendering: Skipping user agent check");
}
