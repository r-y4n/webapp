
if(/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
    window.location.replace("https://verycoolwebapp.vercel.app/home")}
else {
    <div><h1>"Sorry, This page cannot be viewed on your device."</h1></div>
}