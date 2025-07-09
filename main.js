// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.toggle('hidden');
});

// Mobile categories toggle
document.getElementById('mobile-categories-button').addEventListener('click', function() {
    document.getElementById('mobile-categories').classList.toggle('hidden');
});

// Add hover effect to post cards
document.querySelectorAll('.post-card').forEach(card => {
    card.addEventListener('click', function(event) {
        // Find the first anchor tag inside the card
        const link = card.querySelector('a');
        if (link && link.href) {
            window.location.href = link.href;
        }
    });
});