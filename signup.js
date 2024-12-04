
import { auth } from './firebase.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";

// Add event listener for the signup form submission
document.getElementById('signup-form').addEventListener('submit', function(e) {
    console.log("DOM fully loaded and parsed");
    e.preventDefault(); // Prevent the default form submission

    // Get values from input fields
    const firstName = document.getElementById('first-name').value.trim();
    const lastName = document.getElementById('last-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const repeatPassword = document.getElementById('repeat-password').value.trim();

    // Validate first name
    if (firstName.length < 3 || firstName.length > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'First name must be between 3 and 20 characters.'
        });
        return;
    }

    // Validate last name
    if (lastName.length < 1 || lastName.length > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Last name must be between 1 and 20 characters.'
        });
        return;
    }

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Please enter a valid email address.'
        });
        return;
    }

    // Validate password
    if (password.length < 8) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Password must be at least 8 characters long.'
        });
        return;
    }

    // Check if passwords match
    if (password !== repeatPassword) {
        Swal.fire({
            icon: 'error',
            title: 'Validation Error',
            text: 'Passwords do not match.'
        });
        return;
    }

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // User created successfully
            const user = userCredential.user;
            Swal.fire({
                title: 'Success!',
                text: 'User  created successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
                // Redirect to the login page after 1 second
                // setTimeout(() => {
                //     window.location.href = "index.html"; // Change this to your actual login page URL
                // }, 1000); // 1000 milliseconds = 1 second
            });
            // Optionally, you can reset the form
            document.getElementById('signup-form').reset();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // Handle different error codes
            let message;
            switch (errorCode) {
                case 'auth/email-already-in-use':
                    message = 'This email is already in use. Please use a different email.';
                    break;
                case 'auth/invalid-email':
                    message = 'The email address is not valid.';
                    break;
                case 'auth/weak-password':
                    message = 'The password is too weak. Please choose a stronger password.';
                    break;
                default:
                    message = 'An error occurred. Please try again.';
            }

            Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: message
            });
        });
});
