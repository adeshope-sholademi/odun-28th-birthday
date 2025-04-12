const birthday = new Date("2025-04-28T00:00:00");
let confettiDone = false;

function updateCountdown() {
  const now = new Date();
  const timeLeft = birthday - now;

  if (timeLeft <= 0) {
    document.getElementById("timer").innerHTML = "🎂 Happy Birthday, Odun! 🎂";
    
    if (!confettiDone && typeof confetti !== "undefined") {
      launchConfetti();
      confettiDone = true;
    }

    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

function launchConfetti() {
  const duration = 10 * 1000; // 10 seconds
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 100,
      origin: { x: 0 },
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 100,
      origin: { x: 1 },
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

setInterval(updateCountdown, 1000);
updateCountdown();
