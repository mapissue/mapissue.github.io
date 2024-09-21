// JavaScript for theme toggle and logo switch
const toggleButton = document.querySelector('.toggle-theme');
const icon = toggleButton.querySelector('.icon');
const logo = document.getElementById('logo'); // Reference to the logo image
const sectionimage = document.getElementById('section-image');

// Load the theme and logo from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        icon.textContent = savedTheme === 'dark' ? '☾' : '☼'; // Update icon based on saved theme
        logo.src = savedTheme === 'dark' ? 'Map-Issue-square-GREEN.png' : 'Map-Issue-square.png'; // Update logo based on saved theme
        sectionimage.src = savedTheme === 'dark' ? 'Map-Issue-LOGOTYPE-BLACK.png' : 'Map-Issue-LOGOTYPE-WHITE.png'; // Update logo based on saved theme
    }

    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});

// Toggle between dark and light mode, and change logo
toggleButton.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);

    // Save the new theme to localStorage
    localStorage.setItem('theme', newTheme);

    // Change the icon based on the new theme
    icon.textContent = newTheme === 'dark' ? '☾' : '☼';

    // Change the logo based on the new theme
    logo.src = newTheme === 'dark' ? 'Map-Issue-square-GREEN.png' : 'Map-Issue-square.png';
    sectionimage.src = newTheme === 'dark' ? 'Map-Issue-LOGOTYPE-BLACK.png' : 'Map-Issue-LOGOTYPE-WHITE.png';
});

