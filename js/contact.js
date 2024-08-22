function validateContactForm(event) {
    // Get form elements
    const name = document.getElementById('contact_name').value.trim();
    const email = document.getElementById('contact_email').value.trim();
    const phone = document.getElementById('contact_phone').value.trim();
    const message = document.getElementById('contact_message').value.trim();

    // Validation checks
    let valid = true;

    if (name.length < 5) {
        alert("Name must be at least 5 characters long.");
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        valid = false;
    }

    const phonePattern = /^[0-9]+$/;
    if (!phonePattern.test(phone)) {
        alert("Phone number must contain only numbers.");
        valid = false;
    }

    if (message.length < 5) {
        alert("Message must be at least 5 characters long.");
        valid = false;
    }

    // Prevent form submission if validation fails
    if (!valid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
}