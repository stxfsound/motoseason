
const endDate = new Date("2025-05-30T02:00:00").getTime();
const daysSpan = document.getElementById("days");
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const secondsSpan = document.getElementById("seconds");
const timerElement = document.getElementById("timer");
const button = document.getElementById("actionButton");

function updateTimer() {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance <= 0) {
    timerElement.style.display = "none";
    button.innerText = "LISTEN // DOWNLOAD";
    button.onclick = () => window.open("https://band.link/motoseason", "_blank");
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysSpan.innerText = days.toString().padStart(2, '0');
  hoursSpan.innerText = hours.toString().padStart(2, '0');
  minutesSpan.innerText = minutes.toString().padStart(2, '0');
  secondsSpan.innerText = seconds.toString().padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);

const cursor = document.getElementById("cursor");
if (window.innerWidth > 600 && cursor) {
  document.addEventListener("mousemove", e => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    const trail = document.createElement("div");
    trail.className = "cursor-trail";
    trail.style.left = `${e.clientX - 12}px`;
    trail.style.top = `${e.clientY - 12}px`;
    document.body.appendChild(trail);
    setTimeout(() => {
      document.body.removeChild(trail);
    }, 500);
  });
}
