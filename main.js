const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');

// Toggle the sidebar when clicking the menu button
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close the sidebar when clicking the close button
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});
