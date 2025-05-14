// Tab functionality
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    tabContents.forEach(content => content.classList.add("hidden"));
    document.getElementById(button.dataset.tab).classList.remove("hidden");
  });
});

// Image slideshow
const images = [
  "Images/pancakes.jpg",
  "Images/chapati.jpg",
  "Images/pizza.jpg",
  "Images/spaghetti.jpg"
];

let currentImage = 0;
setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  document.getElementById("slideshow-image").src = images[currentImage];
}, 3000);

// Button click to change text
const changeBtn = document.getElementById("changeTextBtn");
changeBtn.addEventListener("click", () => {
  changeBtn.textContent = "You clicked me!";
  changeBtn.style.backgroundColor = "#2196F3";
});

// Keypress detection
document.addEventListener("keydown", e => {
  document.getElementById("keypressOutput").textContent = e.key;
});

// Secret double-click or long press
const secret = document.getElementById("secretAction");
let pressTimer;

secret.addEventListener("dblclick", () => {
  secret.textContent = "🎉 Secret unlocked!";
});

secret.addEventListener("mousedown", () => {
  pressTimer = setTimeout(() => {
    secret.textContent = "🔥 Long press activated!";
  }, 1000);
});

secret.addEventListener("mouseup", () => clearTimeout(pressTimer));

// Form validation
const form = document.getElementById("signupForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email.value.includes("@")) {
    feedback.textContent = "❌ Please enter a valid email.";
  } else if (password.value.length < 8) {
    feedback.textContent = "❌ Password must be at least 8 characters.";
  } else {
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
  }
});

// Real-time feedback
password.addEventListener("input", () => {
  if (password.value.length < 8) {
    password.style.borderColor = "red";
  } else {
    password.style.borderColor = "green";
  }
});
