// DOM Elements
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberMeCheckbox = document.getElementById('rememberMe');
const submitButton = document.getElementById('submitButton');
const togglePassword = document.getElementById('togglePassword');
const successMessage = document.getElementById('successMessage');

// Error message elements
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Validation patterns
const patterns = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

// Toggle password visibility
togglePassword.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Animate button
    this.style.transform = 'scale(0.8)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Real-time validation
emailInput.addEventListener('blur', function() {
    validateEmail();
});

emailInput.addEventListener('input', function() {
    if (this.classList.contains('error')) {
        validateEmail();
    }
});

passwordInput.addEventListener('blur', function() {
    validatePassword();
});

passwordInput.addEventListener('input', function() {
    if (this.classList.contains('error')) {
        validatePassword();
    }
});

// Validation functions
function validateEmail() {
    const value = emailInput.value.trim();
    
    if (!value) {
        showError(emailInput, emailError, 'Email is required');
        return false;
    }
    
    if (!patterns.email.test(value)) {
        showError(emailInput, emailError, 'Please enter a valid email address');
        return false;
    }
    
    showSuccess(emailInput, emailError);
    return true;
}

function validatePassword() {
    const value = passwordInput.value;
    
    if (!value) {
        showError(passwordInput, passwordError, 'Password is required');
        return false;
    }
    
    showSuccess(passwordInput, passwordError);
    return true;
}

function showError(input, errorElement, message) {
    input.classList.add('error');
    input.classList.remove('success');
    errorElement.textContent = message;
    
    // Add shake animation
    input.style.animation = 'none';
    setTimeout(() => {
        input.style.animation = '';
    }, 10);
}

function showSuccess(input, errorElement) {
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.textContent = '';
}

// Form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate all required fields
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    
    if (!isEmailValid || !isPasswordValid) {
        return;
    }
    
    // Form is valid, proceed with normal form submission
    // Remove preventDefault to allow normal form submission
    form.submit();
});

// Add input animations on focus
const allInputs = [emailInput, passwordInput];

allInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Add ripple effect to submit button
submitButton.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Submit form with Ctrl+Enter or Cmd+Enter
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        form.dispatchEvent(new Event('submit'));
    }
});

// Prevent form submission on Enter key in input fields
allInputs.forEach((input, index) => {
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (index < allInputs.length - 1) {
                allInputs[index + 1].focus();
            } else {
                form.dispatchEvent(new Event('submit'));
            }
        }
    });
});

// Check for saved credentials (if remember me was used)
document.addEventListener('DOMContentLoaded', function() {
    // Focus first input
    emailInput.focus();
    
    // Add entrance animations to form elements
    const formGroups = document.querySelectorAll('.form-group');
    formGroups.forEach((group, index) => {
        group.style.animationDelay = `${0.3 + (index * 0.1)}s`;
    });
    
    // Check if user has saved token
    const savedToken = localStorage.getItem('authToken');
    if (savedToken) {
        // Optionally verify token and auto-login
        console.log('Found saved authentication token');
    }
});