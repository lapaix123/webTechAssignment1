// Selecting form and input elements
const form = document.querySelector("form");
const passwordInput = document.getElementById("password");
const passToggleBtn = document.getElementById("pass-toggle-btn");

// Function to display error messages
const showError = (field, errorText) => {
    field.classList.add("error");
    const errorElement = document.createElement("small");
    errorElement.classList.add("error-text");
    errorElement.innerText = errorText;
    field.closest(".form-group").appendChild(errorElement);
}

// Function to handle form submission
const handleFormData = (e) => {
    e.preventDefault();

    // Retrieving input elements
    const fullnameInput = document.getElementById("fullname");
    const fatherNameInput = document.getElementById("fatherName");
    const motherNameInput = document.getElementById("motherName");
    const addressInput = document.getElementById("address");
    const emailInput = document.getElementById("email");
    const dateInput = document.getElementById("date");
    const genderInput = document.getElementById("gender");
    const departmentInput = document.getElementById("department");
    const programInput = document.getElementById("program");
    const semesterInput = document.getElementById("semester");
    const admissionDateInput = document.getElementById("admissionDate");

    // Getting trimmed values from input fields
    const fullname = fullnameInput.value.trim();
    const fatherName = fatherNameInput.value.trim();
    const motherName = motherNameInput.value.trim();
    const address = addressInput.value.trim();
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const date = dateInput.value;
    const gender = genderInput.value;
    const department = departmentInput.value.trim();
    const program = programInput.value.trim();
    const semester = semesterInput.value.trim();
    const admissionDate = admissionDateInput.value;

    // Regular expression pattern for email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clearing previous error messages
    document.querySelectorAll(".form-group .error").forEach(field => field.classList.remove("error"));
    document.querySelectorAll(".error-text").forEach(errorText => errorText.remove());

    // Performing validation checks
    if (fullname === "") {
        showError(fullnameInput, "Enter your full name");
    }
    if (fatherName === "") {
        showError(fatherNameInput, "Enter your father's name");
    }
    if (motherName === "") {
        showError(motherNameInput, "Enter your mother's name");
    }
    if (address === "") {
        showError(addressInput, "Enter your address");
    }
    if (!emailPattern.test(email)) {
        showError(emailInput, "Enter a valid email address");
    }
    if (password === "") {
        showError(passwordInput, "Enter your password");
    }
    if (date === "") {
        showError(dateInput, "Select your date of birth");
    }
    if (gender === "") {
        showError(genderInput, "Select your gender");
    }
    if (department === "") {
        showError(departmentInput, "Enter your high school department");
    }
    if (program === "") {
        showError(programInput, "Enter your program of study");
    }
    if (semester === "") {
        showError(semesterInput, "Enter your current semester");
    }
    if (admissionDate === "") {
        showError(admissionDateInput, "Select your admission date");
    }

    // Checking for any remaining errors before form submission
    const errorInputs = document.querySelectorAll(".form-group .error");
    if (errorInputs.length > 0) return;

    // Submitting the form
    form.submit();
}

// Toggling password visibility
passToggleBtn.addEventListener('click', () => {
    passToggleBtn.className = passwordInput.type === "password" ? "fa-solid fa-eye-slash" : "fa-solid fa-eye";
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
});

// Handling form submission event
form.addEventListener("submit", handleFormData);


const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive');
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));