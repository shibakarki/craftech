// Sidebar Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const closeBtn = document.getElementById('closeBtn');

// Open the sidebar when clicking the menu button
menuToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
});

// Close the sidebar when clicking the close button
closeBtn.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

// Close the sidebar when clicking outside of it
document.addEventListener('click', (event) => {
    // Check if the click is outside both the navMenu and menuToggle
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        navMenu.classList.remove('active');
    }
});

// Fetch and Render Recent Downloads
fetch('downloads.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const recentContainer = document.querySelector('.recent-container');
        // Clear the container to ensure no duplicate content
        recentContainer.innerHTML = '';
        data.forEach(item => {
            const block = document.createElement('div');
            block.classList.add('recent-block');
            block.innerHTML = `
                <h3>${item.title}</h3>
                <img src="${item.thumbnail}" alt="${item.title} Thumbnail">
                <p>${item.description}</p>
                <a href="${item.file}" class="download-link">Download</a>
            `;
            recentContainer.appendChild(block);
        });
    })
    .catch(error => console.error('Error loading downloads:', error));


// Select the header and logo
const header = document.querySelector('header');
const logo = document.querySelector('.logo');

// Scroll event listener
window.addEventListener('scroll', () => {
    // Check if the page has scrolled down
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
