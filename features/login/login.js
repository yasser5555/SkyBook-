document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        if (form.checkValidity()) {
            // Form is valid, simulate backend API call
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Logging in...';

            const formData = {
                email: document.getElementById('email').value,
                password: document.getElementById('password').value,
                rememberMe: document.getElementById('rememberMe').checked
            };

            try {
                // Simulate network delay for UI feedback
                await new Promise(resolve => setTimeout(resolve, 1000));

                console.log('Login Data prepared for backend:', formData);
                
                // Show success to user
                alert('Login successful! (Check console for mock data)');
                
                // Redirect user to home or dashboard here
                // window.location.href = '../../index.html';
                
            } catch (error) {
                console.error('Login failed:', error);
                alert('Login failed. Please check your credentials and try again.');
            } finally {
                submitBtn.disabled = false;
                submitBtn.innerHTML = 'Login';
            }
        }

        form.classList.add('was-validated');
    }, false);
});
