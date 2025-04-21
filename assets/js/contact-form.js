// Contact Form Validation and Handling
console.log('Contact form script loaded');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing form handler');
    
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) {
        console.error('Contact form element not found!');
        return;
    }
    
    console.log('Contact form found:', contactForm);
    const formGroups = contactForm.querySelectorAll('.form-group');
    console.log('Form groups found:', formGroups.length);
    
    // Validation patterns
    const patterns = {
        name: /^[a-zA-Z\s]{2,50}$/,
        email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        phone: /^(\+61|0)[0-9]{9}$/,
        subject: /^.{3,100}$/,
        message: /^.{10,1000}$/
    };

    // Error messages
    const errorMessages = {
        name: 'Please enter a valid name (2-50 characters, letters only)',
        email: 'Please enter a valid email address',
        phone: 'Please enter a valid Australian phone number',
        subject: 'Please enter a subject (3-100 characters)',
        message: 'Please enter a message (10-1000 characters)'
    };

    // Add error message element to each form group
    formGroups.forEach(group => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        group.appendChild(errorDiv);
    });

    // Real-time validation
    formGroups.forEach(group => {
        const input = group.querySelector('input, textarea, select');
        const errorDiv = group.querySelector('.error-message');
        
        if (input) {
            input.addEventListener('input', function() {
                validateField(input, errorDiv);
            });

            input.addEventListener('blur', function() {
                validateField(input, errorDiv);
            });
        }
    });

    // Validate individual field
    function validateField(input, errorDiv) {
        const fieldName = input.id;
        const value = input.value.trim();
        
        // Clear previous error
        errorDiv.textContent = '';
        input.classList.remove('error');
        
        // Skip validation if field is optional and empty
        if (fieldName === 'phone' && value === '') {
            return true;
        }

        // Validate required fields
        if (input.required && value === '') {
            showError(input, errorDiv, 'This field is required');
            return false;
        }

        // Special validation for service dropdown
        if (fieldName === 'service' && value === '') {
            showError(input, errorDiv, 'Please select a service');
            return false;
        }

        // Validate against pattern if exists
        if (patterns[fieldName] && !patterns[fieldName].test(value)) {
            showError(input, errorDiv, errorMessages[fieldName]);
            return false;
        }

        return true;
    }

    // Show error message
    function showError(input, errorDiv, message) {
        errorDiv.textContent = message;
        input.classList.add('error');
    }

    // Form submission
    console.log('Adding submit event listener to the form');
    contactForm.addEventListener('submit', function(e) {
        console.log('Form submit event triggered');
        e.preventDefault(); // Prevent form from submitting normally
        console.log('Default form submission prevented');
        
        // Validate all fields
        let isValid = true;
        formGroups.forEach(group => {
            const input = group.querySelector('input, textarea, select');
            const errorDiv = group.querySelector('.error-message');
            if (input && !validateField(input, errorDiv)) {
                isValid = false;
            }
        });

        if (!isValid) {
            console.log('Form validation failed');
            return;
        }

        console.log('Form validation passed, proceeding with submission');

        // Show loading state
        const submitButton = contactForm.querySelector('.submit-button');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Collect form data
        const formData = new FormData(contactForm);
        const formValues = {};
        for (const [key, value] of formData.entries()) {
            formValues[key] = value;
        }
        console.log('Form data collected:', formValues);

        // Simulate form submission
        setTimeout(function() {
            console.log('Form submission simulation complete');
            
            // Show success message
            showFormMessage('success', 'Thank you for your message. We will get back to you soon!');
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
        }, 1500);
    });

    // Show form message
    function showFormMessage(type, message) {
        console.log('Showing form message:', type, message);
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;

        // Accessibility: announce message
        messageDiv.setAttribute('role', 'alert');
        messageDiv.setAttribute('aria-live', 'polite');

        messageDiv.textContent = message;
        
        // Remove any existing message
        const existingMessage = contactForm.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Add new message
        contactForm.insertBefore(messageDiv, contactForm.firstChild);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }
    
    console.log('Form handler initialization complete');
}); 