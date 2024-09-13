document.getElementById('bookingForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());

    // Check each input for validity
    let isValid = true;
    const inputs = this.querySelectorAll('input, select');
    inputs.forEach(input => {
        if (!input.checkValidity()) {
            isValid = false;
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.style.color = 'red'; // Style for error message
            errorMessage.textContent = input.validationMessage; // Get the default validation message
            input.parentNode.insertBefore(errorMessage, input.nextSibling); // Insert error message after the input
        }
    });

    if (isValid) {
        // If the form is valid, send the data to the server
        const formData = new FormData(this);
        fetch('/submit', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.querySelector('.successful').style.display = 'block'; // Show success message
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('There was an error submitting the form.');
        });
    }
});

document.getElementById('visaDocument').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
        alert(`Selected file: ${file.name}`);
    }
});
