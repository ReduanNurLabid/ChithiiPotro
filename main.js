// Suggested code may be subject to a license. Learn more: ~LicenseLog:3084997435.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:514127040.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3131154471.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:5008200.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1335944170.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:472185511.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3070766537.

// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function
        (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,

                behavior: 'smooth'
            });
        }
    });
});
// Add this JavaScript code to your main.js file
document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    window.location.href = 'login.html'; // Redirect to login page
});

document.getElementById('chithipotro-logo').addEventListener('click', function () {
    window.location.href = 'index.html'; // Redirect to index page
});
// Select the signup button element
const signupButton = document.querySelector('.signup-btn');

// Add an event listener to the button
signupButton.addEventListener('click', handleSignupClick);

// Define the event handler function
function handleSignupClick(event) {
  // Prevent the default button click behavior
  event.preventDefault();

  // Redirect the user to the signup page
  window.location.href = 'signup.html';
}
// Add JS here
// Add this to your main.js file

// Get the login form element
const loginForm = document.getElementById('login-form');

// Add an event listener to the form submission
loginForm.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Get the username and password input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate the input values
    if (username.trim() === '' || password.trim() === '') {
        alert('Please enter both username and password');
        return;
    }

    // Send a POST request to the server to authenticate the user
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Login successful, redirect to the dashboard page
                window.location.href = '/dashboard';
            } else {
                // Login failed, display an error message
                alert('Invalid username or password');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
// Add this to your JavaScript file
const passwordInput = document.getElementById('password');
const eyeIcon = document.getElementById('eye-icon');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
    }
});

// Google Signup
const googleSignupButton = document.getElementById('google-signup');

googleSignupButton.addEventListener('click', () => {
    // Google API Client ID
    const clientId = 'YOUR_CLIENT_ID';

    // Google API Scope
    const scope = 'https://www.googleapis.com/auth/userinfo.email';

    // Redirect URI
    const redirectUri = 'YOUR_REDIRECT_URI';

    // Google OAuth URL
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

    // Open the Google OAuth page
    window.open(url, '_self');
});

// Facebook Signup
const facebookSignupButton = document.getElementById('facebook-signup');

facebookSignupButton.addEventListener('click', () => {
    // Facebook API Client ID
    const clientId = 'YOUR_CLIENT_ID';

    // Facebook API Scope
    const scope = 'email';

    // Redirect URI
    const redirectUri = 'YOUR_REDIRECT_URI';

    // Facebook OAuth URL
    const url = `https://www.facebook.com/v2.12/dialog/oauth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}`;

    // Open the Facebook OAuth page
    window.open(url, '_self');
});
// Get all sent messages
const sentMessages = document.querySelectorAll('.sent-message');

// Loop through each sent message
sentMessages.forEach(message => {
    // Get the parent element of the sent message
    const parent = message.parentNode;

    // Get the time element
    const time = parent.querySelector('.time');

    // If the time element exists, move it before the sent message
    if (time) {
        parent.insertBefore(time, message);
    }
});
const button = document.getElementById('skipButton');

        // Variable to track the button's state
        let isConfirming = false;

        // Add an event listener for click events
        button.addEventListener('click', function() {
            if (!isConfirming) {
                // Change button text to "Confirm Skip"
                button.textContent = 'Confirm Skip';
                // Set state to confirming
                isConfirming = true;
            } else {
                // Perform the skip action here
                alert('Skipping conversation...'); // Replace this with actual skip functionality
                // Optionally, you can reset button state or hide the button after action
                button.textContent = 'Skip This conversation';
                isConfirming = false;
            }
        });