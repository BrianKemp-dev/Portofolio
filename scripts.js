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

// Functie om de toggle button te activeren
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

function checkAnswers() {
    // Correcte antwoorden
    const correctAnswers = {
        q1: "B", // Vraag 1
        q2: "B", // Vraag 2
        q3: "C", // Vraag 3
        q4: "B", // Vraag 4
        q5: "A", // Vraag 5
        q6: "A", // Vraag 6
        q7: "B", // Vraag 7
        q8: "C", // Vraag 8
        q9: "A", // Vraag 9
        q10: "C", // Vraag 10
        // Voeg hier antwoorden toe voor vragen 4 t/m 10
    };

    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Loop door alle vragen
    for (let key in correctAnswers) {
        const selected = document.querySelector(`input[name="${key}"]:checked`);
        if (selected && selected.value === correctAnswers[key]) {
            score++; // Verhoog de score als het antwoord correct is
        }
    }

    // Toon de resultaten
    const result = document.getElementById("result");
    result.textContent = `Je hebt ${score} van de ${totalQuestions} vragen goed beantwoord!`;
    result.style.color = score === totalQuestions ? "green" : "orange";
}
