document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    // Password validation
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        messageDiv.innerText = "Passwords do not match. Please try again.";
        messageDiv.style.color = "red"; // Error message in red
    } else if (!validatePassword(password)) {
        messageDiv.innerText = "Password must be at least 8 characters long and include uppercase, lowercase, numbers, and special characters.";
        messageDiv.style.color = "red"; // Error message in red
    } else {
        messageDiv.innerText = "Registration successful! Welcome!";
        messageDiv.style.color = "green"; // Success message in green
    }
});

// Password validation function
function validatePassword(password) {
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordPattern.test(password);
}
