const appButtons = document.querySelectorAll(".app-button, .dock-app");
const closeButtons = document.querySelectorAll(".close-btn");
const menuTime = document.getElementById("menuTime");

appButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.window;
    const targetWindow = document.getElementById(targetId);
    if (targetWindow) {
      targetWindow.classList.remove("hidden");
    }
  });
});

closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.dataset.close;
    const targetWindow = document.getElementById(targetId);
    if (targetWindow) {
      targetWindow.classList.add("hidden");
    }
  });
});

function updateTime() {
  const now = new Date();
  menuTime.textContent = now.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit"
  });
}

updateTime();
setInterval(updateTime, 1000 * 30);
