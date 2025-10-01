// Example JS for basic interactivity

// Resume button click → link to your PDF
document.getElementById("resumeBtn")?.addEventListener("click", () => {
  window.open("resume.pdf", "_blank"); // Place resume.pdf in the repo root
});

// Simple dark mode toggle (optional)
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Expose function if you want to add a toggle button later
window.toggleDarkMode = toggleDarkMode;
