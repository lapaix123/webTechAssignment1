// Function to display error messages
function showError(field, errorText) {
    field.classList.add("error");
    const errorElement = field.nextElementSibling;
    errorElement.innerText = errorText;
}

// Function to handle form submission
function handleFormData(form) {
    const emailInput = form.querySelector('input[type="text"]');
    const passwordInput = form.querySelector('input[type="password"]');

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error messages
    emailInput.classList.remove("error");
    passwordInput.classList.remove("error");
    const errorElements = form.querySelectorAll(".error-text");
    errorElements.forEach((error) => (error.innerText = ""));

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Perform validation checks
    if (email === "") {
        showError(emailInput, "Enter your email");
    } else if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }

    if (password === "") {
        showError(passwordInput, "Enter your password");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = form.querySelectorAll(".error");
    if (errorInputs.length > 0) {
        return false; // Prevent form submission
    } else {
        return true; // Allow form submission
    }
}

// Add event listeners to forms
const loginForm = document.querySelector("#login-form");
const registrationForm = document.querySelector("#registration-form");

loginForm.addEventListener("submit", function (e) {
    if (!handleFormData(this)) {
        e.preventDefault();
    }
});

registrationForm.addEventListener("submit", function (e) {
    if (!handleFormData(this)) {
        e.preventDefault();
    }
});
