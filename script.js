const passwordInput = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showPassword');
const messageDiv = document.getElementById('message');

// Toggle password visibility
showPasswordCheckbox.addEventListener('change', () => {
    passwordInput.type = showPasswordCheckbox.checked ? 'text' : 'password';
});

// Submit and validate password
function submitPassword() {
    const correctPassword = "kajal";
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        window.location.href = "about.html"; // Or replace with another secure page
    } else {
        messageDiv.style.color = "red";
        messageDiv.textContent = "Incorrect password. Please try again.";
    }
}
