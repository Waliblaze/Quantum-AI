document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (validateForm(username, email, password)) {
            registerUser(username, password);
            alert("Signup successful! Redirecting to login page...");
            window.location.href = "login.html"; // Redirect to login page
        }
    });

    function validateForm(username, email, password) {
        if (username === "" || email === "" || password === "") {
            alert("Please fill out all fields.");
            return false;
        }
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return false;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return false;
        }
        return true;
    }

    function validateEmail(email) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }

    function registerUser(username, password) {
        // Store user credentials in local storage
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    }
});