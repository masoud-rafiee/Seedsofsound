/*
  Seeds of Sound Website JavaScript

  Handles interactive behaviours such as the dark mode toggle and
  preserving user preferences across visits. All scripts are loaded
  after the DOM has finished parsing.
*/

document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('dark-toggle');
  // If a saved preference exists, apply it on load
  const storedPreference = localStorage.getItem('dark-mode');
  if (storedPreference === 'true') {
    document.body.classList.add('dark');
    if (toggleButton) toggleButton.textContent = 'Light Mode';
  }
  // Toggle dark mode on click
  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      const isDark = document.body.classList.contains('dark');
      localStorage.setItem('dark-mode', isDark);
      toggleButton.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  }
});