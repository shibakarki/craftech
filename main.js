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


    fetch('downloads.json')
        .then(response => response.json())
        .then(data => {
            const recentContainer = document.querySelector('.recent-container');
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