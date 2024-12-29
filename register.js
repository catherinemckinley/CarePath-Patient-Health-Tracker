document.getElementById("registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const username = document.getElementById("username").value.toLowerCase(); // Normalize username to avoid case sensitivity
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some(user => user.username === username)) {
        alert("This username is already taken. Please choose another.");
        return;
    }

    const newUser = { firstName, lastName, username, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("userFirstName", firstName);

    window.location.href = "login.html";
});
