// Theme toggle functionality
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const toggleIcon = document.querySelector('.toggle-icon');
const toggleText = document.querySelector('.toggle-text');

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', currentTheme);
updateToggleButton(currentTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButton(newTheme);
});

function updateToggleButton(theme) {
    if (theme === 'dark') {
        toggleIcon.textContent = '☀️';
        toggleText.textContent = 'Light Mode';
    } else {
        toggleIcon.textContent = '🌙';
        toggleText.textContent = 'Dark Mode';
    }
}

// Login form functionality
const loginForm = document.getElementById('login-form');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (in a real app, this would be server-side)
    if (username && password) {
        // Simulate login success
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Please fill in all fields.';
        messageDiv.style.color = 'red';
    }
});
