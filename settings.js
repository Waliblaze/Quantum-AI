document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Update user data
    let storedUser = JSON.parse(localStorage.getItem('user'));
    storedUser = { ...storedUser, username, email, password };
    localStorage.setItem('user', JSON.stringify(storedUser));

    alert('Settings updated successfully');
});