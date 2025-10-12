// ===== Progress Tracker =====
const tasks = document.querySelectorAll(".task");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

// Update the progress bar when any checkbox changes
function updateProgress() {
  const total = tasks.length;
  const completed = document.querySelectorAll(".task:checked").length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  // Update visuals
  progressBar.style.width = percent + "%";
  progressText.textContent = `${percent}% Completed`;

  // Special color on 100%
  if (percent === 100) {
    progressBar.style.background = "linear-gradient(90deg, #00ff85, #00ccff)";
  }

  // Save progress to localStorage
  const key = document.title + "_progress";
  localStorage.setItem(key, JSON.stringify({ completed }));
}

// Load progress from localStorage
window.addEventListener("load", () => {
  const key = document.title + "_progress";
  const saved = JSON.parse(localStorage.getItem(key));

  if (saved && saved.completed) {
    for (let i = 0; i < saved.completed; i++) {
      if (tasks[i]) tasks[i].checked = true;
    }
  }
  updateProgress();
});

// Add listeners
tasks.forEach(task => task.addEventListener("change", updateProgress));


// ===== Optional Chat Box =====
const chatButton = document.getElementById("chatButton");
const chatBox = document.getElementById("chatBox");

if (chatButton && chatBox) {
  chatButton.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
  });
}
