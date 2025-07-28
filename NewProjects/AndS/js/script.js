// Burger Menu Toggle
document.getElementById('burger').addEventListener('click', () => {
    const nav = document.getElementById('nav-menu');
    const burger = document.getElementById('burger');
    nav.classList.toggle('active');
    burger.classList.toggle('active');
});

// Theme Toggle
document.getElementById('theme-btn').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// World Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.innerHTML = "Time in NYC: " + now.toLocaleTimeString('en-US', { timeZone: "America/New_York" }) + "<br>" + "Time in Khabarovsk: " + now.toLocaleTimeString('en-US', { timeZone: "Asia/Vladivostok" });
}
setInterval(updateClock, 1000);
updateClock();

