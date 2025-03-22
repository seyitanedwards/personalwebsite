document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on page load
    if (currentTheme === 'inverted') {
        body.classList.add('inverted');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('inverted');
        const isInverted = body.classList.contains('inverted');
        localStorage.setItem('theme', isInverted ? 'inverted' : 'default');
    });
});