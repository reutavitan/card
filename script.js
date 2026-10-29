let nameInput = document.getElementById("name-input")
let cardName = document.getElementById("card-name")
let jobInput = document.getElementById("job-input");
let cardJob = document.getElementById("card-job");
let emailInput = document.getElementById("email-input");
let cardEmail = document.getElementById("card-email");
let bioInput = document.getElementById("bio-input");
let cardBio = document.getElementById("card-bio");
let avatar = document.getElementById("avatar");
let bioLeft = document.getElementById("bio-left");
let counter = document.querySelector(".counter");
let colorSelect = document.getElementById("color-select");
let card = document.getElementById("card");
let themeBtn = document.getElementById("theme-btn");
let body = document.body;
let resetBtn = document.getElementById("reset-btn");
let form = document.getElementById("card-form");

nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    cardName.textContent = name || 'Your name';
    avatar.textContent = name.charAt(0).toUpperCase() || '?';
});

jobInput.addEventListener("input", function () {
    if (jobInput.value.trim() === "") {
        cardJob.textContent = "Your job title";
    } else {
        cardJob.textContent = jobInput.value.trim();
    }
});

jobInput.addEventListener('input', () => {
    const job = jobInput.value.trim();
    cardJob.textContent = job || 'Your job title';
});

emailInput.addEventListener('input', () => {
    const email = emailInput.value.trim();
    cardEmail.textContent = email || 'your@email.com';
});

bioInput.addEventListener('input', () => {
    const bio = bioInput.value.trim();
    cardBio.textContent = bio || 'Your bio will appear here.';

    bioLeft.textContent = 80 - bioInput.value.length;

    if (80 - bioInput.value.length <= 10) {
        counter.classList.add('warning');
    } else {
        counter.classList.remove('warning');
    }
});

colorSelect.addEventListener("change", function () {
      let color = colorSelect.value;
      card.style.borderColor = color;
avatar.style.backgroundColor = color;
});

themeBtn.addEventListener("click", function () {
 body.classList.toggle("dark")
 if (body.classList.contains("dark")) {
    themeBtn.textContent = "Light mode";
} else {
    themeBtn.textContent = "Dark mode";
}
});


resetBtn.addEventListener("click", function () {
    form.reset();

    cardName.textContent = "Your name";
    cardJob.textContent = "Your job title";
    cardEmail.textContent = "your@email.com";
    cardBio.textContent = "Your bio will appear here.";

    avatar.textContent = "?";

    bioLeft.textContent = 80;
    counter.classList.remove("warning");

    card.style.borderColor = "#4f46e5";
    avatar.style.backgroundColor = "#4f46e5";
});

// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

//
