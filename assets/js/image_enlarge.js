document.addEventListener('DOMContentLoaded', function() {
    const avatarLink = document.getElementById('avatar-link');
    const overlay = document.getElementById('overlay');

    overlay.style.display = 'none';

    if (avatarLink) {
        avatarLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            // Toggle the display of the overlay
            overlay.style.display = (overlay.style.display === 'none') ? 'flex' : 'none';
        });
    }
    overlay.addEventListener('click', function(event) {
    // Hide the overlay
    overlay.style.display = 'none';
});
});