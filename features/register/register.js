document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerForm');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const submitBtn = form.querySelector('button[type="submit"]');

    // Custom validation for password matching
    confirmPassword.addEventListener('input', () => {
        if (password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });

    password.addEventListener('input', () => {
        if (confirmPassword.value && password.value !== confirmPassword.value) {
            confirmPassword.setCustomValidity('Passwords do not match');
        } else {
            confirmPassword.setCustomValidity('');
        }
    });

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            // Form is valid, simulate backend API call
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Creating...';

            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                password: password.value, // In a real app, send securely
                termsAgreed: document.getElementById('terms').checked
            };

            try {
                // Placeholder for actual API endpoint integration
                // const response = await fetch('/api/auth/register', {
                //     method: 'POST',
                //     headers: { 'Content-Type': 'application/json' },
                //     body: JSON.stringify(formData)
                // });
                // const data = await response.json();
                
                // Simulate network delay for UI feedback
                await new Promise(resolve => setTimeout(resolve, 1200));

                console.log('Registration Data prepared for backend:', formData);
                
                // Show success to user
                alert('Registration successful! (Check console for mock data)');
                
                // Reset form
                form.reset();
                form.classList.remove('was-validated');

            } catch (error) {
                console.error('Registration failed:', error);
                alert('Registration failed. Please try again.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Create Account';
            }
        }

        form.classList.add('was-validated');
    }, false);
});
