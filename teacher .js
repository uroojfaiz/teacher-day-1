document.getElementById("showMessage").addEventListener("click", () => {
  const msg = document.getElementById("message");
  msg.classList.add("show");
  msg.innerText = "Happy Teacher’s Day Miss! 🌸 You’re the code behind our success.";
  startConfetti();
});

// Simple confetti effect
function startConfetti() {
  const canvas = document.getElementById("confetti");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const confetti = [];
  const colors = ["#e91e63", "#ffeb3b", "#00bcd4", "#4caf50"];

  for (let i = 0; i < 150; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      d: Math.random() * 5 + 2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
      ctx.fillStyle = c.color;
      ctx.fill();
    });
    update();
  }

  function update() {
    confetti.forEach(c => {
      c.y += c.d;
      if (c.y > canvas.height) {
        c.y = 0;
        c.x = Math.random() * canvas.width;
      }
    });
  }

  setInterval(draw, 20);
}

function showMessage() {
  const msg = document.getElementById("message");
  msg.classList.add("show");
  msg.innerText = "Happy Teacher’s Day Miss! 🌸 You’re the code behind our success.";
  startConfetti();
}

