function updateClock(){
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    h = String(h).padStart(2, "0");
    m = String(m).padStart(2, "0");
    s = String(s).padStart(2, "0");
    document.getElementById('clock').textContent = `${h}:${m}:${s}`;
    document.getElementById('date').textContent = now.toDateString();
}
setInterval(updateClock, 1000);
updateClock();
function toggleTheme(){
    document.body.classList.toggle('dark')
}