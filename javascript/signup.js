document.addEventListener("DOMContentLoaded", function() {
    const signupForm = document.getElementById("signupForm");

    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = signupForm.username.value;
        const email = signupForm.email.value;
        const password = signupForm.password.value;
        const confirmPassword = signupForm.confirmPassword.value;
        const accountType = signupForm.accountType.value;

        const errorMessage = document.getElementById("error-message");

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            return;
        }

        // Simulando sucesso de cadastro e redirecionamento
        alert(`Conta criada com sucesso como ${accountType}!`);
        window.location.href = "index.html";
    });
});
