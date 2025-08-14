const tasks = document.querySelectorAll(".task");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-text");

tasks.forEach(task => {
    task.addEventListener("change", updateProgress);
});

function updateProgress() {
    const total = tasks.length;
    const completed = document.querySelectorAll(".task:checked").length;
    const percent = Math.round((completed / total) * 100);

    progressBar.style.width = percent + "%";
    progressText.textContent = `${percent}% Completed`;
}
