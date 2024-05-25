document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '!');
    } else {
        alert('Please fill out all fields.');
    }
});

document.getElementById('toggle-interests').addEventListener('click', function() {
    var interests = document.getElementById('interests');
    if (interests.style.display === 'none' || interests.style.display === '') {
        interests.style.display = 'block';
        this.textContent = 'Hide Interests';
        this.classList.remove('show-interests');
        this.classList.add('hide-interests');
    } else {
        interests.style.display = 'none';
        this.textContent = 'Show Interests';
        this.classList.remove('hide-interests');
        this.classList.add('show-interests');
    }
});
