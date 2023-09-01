document.getElementById("loginForm").addEventListener("submit", function (event) {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var valid = true;

    // Reset previous error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Validate email
    if (!email) {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    // Validate password (you can add more conditions for password validation)
    if (!password) {
        passwordError.textContent = "Password is required";
        valid = false;
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if there are errors
    }
});

function isValidEmail(email) {
    // Simple email validation regex
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var usernameError = document.getElementById("usernameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var valid = true;

    // Reset error messages
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Username validation
    if (!username) {
        usernameError.textContent = "Username is required";
        valid = false;
    }

    // Email validation
    if (!email) {
        emailError.textContent = "Email is required";
        valid = false;
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        valid = false;
    }

    // Password validation
    if (!password) {
        passwordError.textContent = "Password is required";
        valid = false;
    }

    return valid;
}

function isValidEmail(email) {
    // You can implement a more comprehensive email validation regex if needed.
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}
