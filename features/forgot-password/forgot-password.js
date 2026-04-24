document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('forgotPasswordForm');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            // Form is valid, simulate backend API call
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Sending...';

            const formData = {
                email: document.getElementById('email').value
            };

            try {
                // Simulate network delay for UI feedback
                await new Promise(resolve => setTimeout(resolve, 1000));

                console.log('Reset Request Data prepared for backend:', formData);
                
                // Show success to user
                alert('A password reset link has been sent to your email! (Check console for mock data)');
                
                // Clear the form
                form.reset();
                form.classList.remove('was-validated');
                
            } catch (error) {
                console.error('Password reset request failed:', error);
                alert('Failed to send reset link. Please try again later.');
            } finally {
                // Re-enable button after successful send or error, but remove spinner
                // Usually we might leave it disabled if we redirected, but here we reset
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Send Reset Link';
            }
        } else {
            form.classList.add('was-validated');
        }
    }, false);
});
