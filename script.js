document.querySelector('#signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let password = document.querySelector('#password').value;
    let confirmPassword = document.querySelector('#confirm-password').value;
    let errorMessage = document.querySelector('#error-message');

    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        alert('Form submitted successfully!');
        // Here you can add code to submit the form data to the server
    }
});