const launchButtons = document.querySelectorAll(".app, .dock-icon");
const closeButtons = document.querySelectorAll(".close-btn");
const windows = document.querySelectorAll(".window");
const topbarTime = document.getElementById("topbarTime");

launchButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.window;
    const target = document.getElementById(targetId);
    if (!target) return;

    target.classList.remove("hidden");
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.close;
    const target = document.getElementById(targetId);
    if (!target) return;

    target.classList.add("hidden");
  });
});

function updateTopbarTime() {
  const now = new Date();
  topbarTime.textContent = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

updateTopbarTime();
setInterval(updateTopbarTime, 30000);
