const container = document.querySelector('.container');
const registerbtn = document.querySelector('.register-btn');
const loginbtn = document.querySelector('.login-btn');

registerbtn.addEventListener('click', () => {
    container.classList.add('active');
});

loginbtn.addEventListener('click', () => {
    container.classList.remove('active');
});

// Additional functionality for smart login
const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.querySelector('input[type="text"]').value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    // Check if the email is already registered
    const storedEmail = localStorage.getItem('email');
    if (storedEmail === email) {
        alert('This email is already registered. Please use a different email.');
        return;
    }

    // Store user information in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    alert('Registration successful! Please login.');
    container.classList.remove('active');
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.querySelector('input[type="text"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Retrieve user information from local storage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful! Redirecting to home page...');
        // Redirect to home page
        window.location.href = 'home.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});