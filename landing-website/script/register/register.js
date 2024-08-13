// JavaScript
const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorDiv = document.querySelector(".error");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  const users = [
    { email: "user1@example.com", password: "1234" },
    { email: "user2@example.com", password: "1234" },
    { email: "user3@example.com", password: "1234" },
  ];

  const email = emailInput.value; // Get email value
  const password = passwordInput.value; // Get password value

  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert("Login successful!");
    window.location.href = "./register-nup.html";
  } else {
    showError("Invalid email or password.");
    passwordInput.value = ""; // Clear password field for security
  }
});

function showError(message) {
  errorDiv.innerHTML = `<p>${message}</p>`; // Clear previous errors and show the new error message
}
