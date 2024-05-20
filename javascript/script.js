document.addEventListener("DOMContentLoaded", function() {
    // Login Form Logic
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const usernameField = document.getElementById("username");
        const passwordField = document.getElementById("password");
        const switchLink = document.getElementById('switch-link');
        const accountTitle = document.getElementById('account-title');
        const accountIcon = document.getElementById('account-icon');
        let isManagerAccount = true;

        switchLink.addEventListener('click', (e) => {
            e.preventDefault();
            if (isManagerAccount) {
                accountTitle.innerHTML = 'Conta de Cliente';
                switchLink.innerHTML = 'Mudar para conta de gestor';
                accountIcon.src = 'images/client-icon.png';  
            } else {
                accountTitle.innerHTML = 'Conta de Gestor <br>de Parque';
                switchLink.innerHTML = 'Mudar para conta de cliente';
                accountIcon.src = 'images/account-icon.png';  
            }
            isManagerAccount = !isManagerAccount;
        });

        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const username = usernameField.value;
            const password = passwordField.value;

            if (username === "teste" && password === "teste") {
                window.location.href = "customer-dashboard.html";
            } else {
                usernameField.setCustomValidity("Não existe uma conta com esse username/password");
                passwordField.setCustomValidity("Não existe uma conta com esse username/password");
                usernameField.reportValidity();
                passwordField.reportValidity();
            }
        });

        usernameField.addEventListener("input", function() {
            usernameField.setCustomValidity("");
        });

        passwordField.addEventListener("input", function() {
            passwordField.setCustomValidity("");
        });

        const forgotPasswordLink = document.querySelector(".forgot-password");
        forgotPasswordLink.addEventListener("click", function(event) {
            event.preventDefault();
            window.location.href = "reset-password.html";
        });

        const resetForm = document.querySelector(".reset-form");
        if (resetForm) {
            resetForm.addEventListener("submit", function(event) {
                event.preventDefault();
                const email = document.getElementById("email").value;
                if (validateEmail(email)) {
                    alert("Um link de recuperação de senha foi enviado para " + email);
                    window.location.href = "index.html";
                } else {
                    alert("Por favor, insira um email válido");
                }
            });
        }

        function validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    }
    // Redirection logic for "Gestão de Reservas"
    const gestaoReservasButton = document.getElementById('gestao-reservas');
    if (gestaoReservasButton) {
        gestaoReservasButton.addEventListener('click', function() {
            window.location.href = 'reservations.html';
        });
    }
    // Logic for reservation details
    const detailsButtons = document.querySelectorAll('.details-button');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'reservation-details.html';
        });
    });

    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove 'active' class from all buttons
            tabButtons.forEach(b => b.classList.remove('active'));

            // Add 'active' class to the clicked button
            button.classList.add('active');

            // Show corresponding tab content
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(button.getAttribute('data-tab')).classList.add('active');
        });
    });
    // Parque Selection Logic
    const parkingItems = document.querySelectorAll('.parking-list li');
    if (parkingItems.length > 0) {
        let selectedPark = null;

        parkingItems.forEach(item => {
            item.addEventListener('click', () => {
                parkingItems.forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                selectedPark = item.getAttribute('data-park');
            });
        });

        const reserveButton = document.getElementById('reserve-button');
        if (reserveButton) {
            reserveButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (selectedPark) {
                    window.location.href = `reservation.html?park=${encodeURIComponent(selectedPark)}`;
                } else {
                    alert('Por favor, selecione um parque de estacionamento primeiro.');
                }
            });
        }

        const tabButtons = document.querySelectorAll('.tab');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('active'));
                button.classList.add('active');
            });
        });
    }

    // Reservation Page Logic
    const reservationTitle = document.getElementById('reservation-title');
    if (reservationTitle) {
        const urlParams = new URLSearchParams(window.location.search);
        const selectedPark = urlParams.get('park');
        if (selectedPark) {
            reservationTitle.textContent = `Reserva da Vaga no ${selectedPark}`;
        } else {
            alert('Nenhum parque selecionado. Por favor, volte e selecione um parque.');
            window.location.href = 'parking-reservations.html';
        }
    }

    // Fill in registered data
    const useRegisteredDataButton = document.querySelector('.use-registered-data');
    if (useRegisteredDataButton) {
        useRegisteredDataButton.addEventListener('click', () => {
            const username = "test"; // Substitute this with actual user data
            const email = "email@examplo.com"; // Substitute this with actual user data

            document.getElementById('client-name').value = username;
            document.getElementById('client-email').value = email;
        });
    }

    // Highlight selected car type and payment method
    const carTypeButtons = document.querySelectorAll('.car-type');
    carTypeButtons.forEach(button => {
        button.addEventListener('click', () => {
            carTypeButtons.forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    const paymentMethodButtons = document.querySelectorAll('.payment-method');
    paymentMethodButtons.forEach(button => {
        button.addEventListener('click', () => {
            paymentMethodButtons.forEach(b => b.classList.remove('selected'));
            button.classList.add('selected');
        });
    });

    // Redirection to MB WAY page on payment submission
    const completePaymentButton = document.querySelector('.complete-payment');
    if (completePaymentButton) {
        completePaymentButton.addEventListener('click', (event) => {
            event.preventDefault();
            // Verifica se o método de pagamento selecionado é MBWAY
            const selectedPaymentMethod = document.querySelector('.payment-method.selected');
            if (selectedPaymentMethod && selectedPaymentMethod.textContent === 'MBWAY') {
                window.location.href = 'mbway-payment.html';
            } else {
                alert('Por favor, selecione MBWAY como método de pagamento.');
            }
        });
    }

    // MB WAY payment logic
    const paymentForm = document.querySelector('.payment-form');
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const phoneNumber = document.getElementById('phone-number').value;
            if (phoneNumber) {
                alert(`Pagamento foi efetuado!`);
                window.location.href = 'confirmed.html';
            } else {
                alert('Por favor, insira o número de telefone.');
            }
        });

        const cancelButton = document.querySelector('.cancel-button');
        if (cancelButton) {
            cancelButton.addEventListener('click', function() {
                window.location.href = 'reservation.html';
            });
        }
    }
        // Extend time logic
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const dateElement = document.querySelector('.new-end-time .date');
    const costElement = document.querySelector('.cost p');
    const extendButton = document.querySelector('.extend-button');
    const cancelButton = document.querySelector('.cancel-button');

    if (hoursInput && minutesInput && dateElement && costElement && extendButton && cancelButton) {
        const initialDate = new Date(2024, 4, 11, 12, 0, 0); // Example initial date: 11 May 2024 - 12:00
        const costPerHour = 1; // Example cost per hour

        function updateDateAndCost() {
            const hours = parseInt(hoursInput.value, 10) || 0;
            const minutes = parseInt(minutesInput.value, 10) || 0;
            const newDate = new Date(initialDate.getTime() + hours * 60 * 60 * 1000 + minutes * 60 * 1000);
            dateElement.textContent = newDate.toLocaleString('pt-PT', { dateStyle: 'long', timeStyle: 'short' });

            const totalCost = hours * costPerHour + (minutes / 60) * costPerHour;
            costElement.textContent = `Custo: €${totalCost.toFixed(2)}`;
        }

        hoursInput.addEventListener('input', updateDateAndCost);
        minutesInput.addEventListener('input', updateDateAndCost);

        extendButton.addEventListener('click', function() {
            alert('O tempo foi estendido com sucesso!');
            window.location.href = 'confirmed.html';
        });

        cancelButton.addEventListener('click', function() {
            window.location.href = 'reservation.html';
        });

        updateDateAndCost(); // Update date and cost on initial load
    }
    
    // Redirection logic for the "Estender a Reserva" button
    const extendReservationButton = document.querySelector('.extend-reservation');
    if (extendReservationButton) {
        extendReservationButton.addEventListener('click', function() {
            window.location.href = 'extend-time.html';
        });
    }

document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.getAttribute('data-tab');

            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });
});
    
    fetch('javascript/user.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('profile-picture').src = data.profile_picture;
            document.getElementById('profile-name').textContent = data.name;
            document.getElementById('profile-email').textContent = data.email;
            document.getElementById('profile-joined-date').textContent = data.joined_date;
            document.getElementById('profile-type').textContent = data.client_type;
        })
        .catch(error => console.error('Error fetching the user data:', error));
});
