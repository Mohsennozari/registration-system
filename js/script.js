document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const messageDiv = document.getElementById('message');

    // Basic validation
    if (password !== confirmPassword) {
        messageDiv.textContent = "Passwords do not match.";
        messageDiv.style.color = "red";
        return;
    }

    // User data (for demonstration purposes)
    const userData = {
        username: username,
        email: email,
        password: password // In a real application, the password should be hashed
    };

    // Display success message
    messageDiv.textContent = "Registration successful!";
    messageDiv.style.color = "green";

    // Here you can send the data to the server
    console.log("User data:", userData);
});
