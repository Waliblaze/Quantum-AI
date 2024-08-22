document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        if (username && password) {
            // Simulate successful login (you can replace this with real authentication logic)
            if (authenticateUser(username, password)) {
                // Redirect to dashboard
                window.location.href = "dashboard.html";
            }
        } else {
            alert("Please enter both username and password.");
        }
    });

    function authenticateUser(username, password) {
        // Placeholder for authentication logic
        // For now, any username and password will work
        // You can replace this with real validation (e.g., an API call)
        if (username === "testUser" && password === "testPass") {
            return true;
        } else {
            alert("Invalid username or password.");
            return false;
        }
    }
});