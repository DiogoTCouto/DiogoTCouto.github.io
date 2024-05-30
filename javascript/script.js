document.addEventListener("DOMContentLoaded", function() {
    // Redirecionamento ao clicar no ícone de configurações
    const settingsIcon = document.getElementById('settings-icon');
    if (settingsIcon) {
        settingsIcon.addEventListener('click', function() {
            console.log('Configurações clicadas');
            window.location.href = 'profile.html';
        });
    }

    const settingsIconGestor = document.getElementById('settings-icon-gestor');
    if (settingsIconGestor) {
        settingsIconGestor.addEventListener('click', function() {
            console.log('Configurações clicadas');
            window.location.href = 'profile-gestor.html';
        });
    }
    const notificationsCustomer = document.getElementById('notifications-customer');
    if (notificationsCustomer) {
        notificationsCustomer.addEventListener('click', function() {
            console.log('Notificações');
            window.location.href = 'customer-notifications.html';
        });
    }
    const notificationsGestor = document.getElementById('notifications-gestor');
    if (notificationsGestor) {
        notificationsGestor.addEventListener('click', function() {
            console.log('Notificações');
            window.location.href = 'manager-notifications.html';
        });
    }

    const cancelProfileButtonGestor = document.querySelector('.cancel-profile-button-gestor');
    if (cancelProfileButtonGestor) {
        cancelProfileButtonGestor.addEventListener('click', function() {
            window.location.href = 'profile-gestor.html';
        });
    }


    // Salvar alterações no perfil
    const saveButtonGestor = document.querySelector('.save-button-gestor');
    if (saveButtonGestor) {
        saveButtonGestor.addEventListener('click', function(event) {
            event.preventDefault();
            alert('As alterações foram salvas!');
            window.location.href = 'profile-gestor.html';
        });
    }
        // Redirecionar ao clicar no botão de cancelar
    const cancelProfileButton = document.querySelector('.cancel-profile-button');
    if (cancelProfileButton) {
        cancelProfileButton.addEventListener('click', function() {
            window.location.href = 'profile.html';
        });
    }

    // Salvar alterações no perfil
    const saveButton = document.querySelector('.save-button');
    if (saveButton) {
        saveButton.addEventListener('click', function(event) {
            event.preventDefault();
            alert('As alterações foram salvas!');
            window.location.href = 'profile.html';
        });
    }

    // Redirecionar ao clicar no botão de logout
    const logoutButton = document.querySelector('.logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }   
    const expensesLink = document.querySelector('.feature .expenses-link');
    if (expensesLink) {
        expensesLink.addEventListener('click', function() {
            window.location.href = 'expenses.html';
        });
    }
    
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
                accountIcon.src = 'images/customer-icon.jpg';  
            } else {
                accountTitle.innerHTML = 'Conta de Gestor <br>de Parque';
                switchLink.innerHTML = 'Mudar para conta de cliente';
                accountIcon.src = 'images/gestor.png';  
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
        const errorMessage = document.getElementById("error-message");
    
        if (resetForm) {
            resetForm.addEventListener("submit", function(event) {
                event.preventDefault();
                const email = document.getElementById("email").value;
                if (validateEmail(email)) {
                    alert("Um link de recuperação de senha foi enviado para " + email);
                    window.location.href = "index.html";
                } else {
                    errorMessage.textContent = "Por favor, insira um email válido";
                }
            });
        }
    
        function validateEmail(email) {
            const re = /\S+@\S+\.\S+/;
            return re.test(email);
        }
    }

    const gestaoReservasButton = document.getElementById('gestao-reservas');
    if (gestaoReservasButton) {
        gestaoReservasButton.addEventListener('click', function() {
            window.location.href = 'reservations.html';
        });
    }

    const gestaoReservasButtonGestor = document.getElementById('gestao-reservas-gestor');
    if (gestaoReservasButtonGestor) {
        gestaoReservasButtonGestor.addEventListener('click', function() {
            window.location.href = 'reservation-gestor.html';
        });
    }


    const detailsButtons = document.querySelectorAll('.details-button');
    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            window.location.href = 'reservation-details.html';
        });
    });

    const tabButtons = document.querySelectorAll('.tab');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            const tabContents = document.querySelectorAll('.tab-content');
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(button.getAttribute('data-tab')).classList.add('active');
        });
    });

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
    }

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

    const useRegisteredDataButton = document.querySelector('.use-registered-data');
    if (useRegisteredDataButton) {
        useRegisteredDataButton.addEventListener('click', () => {
            const username = "test";
            const email = "email@examplo.com";
            document.getElementById('client-name').value = username;
            document.getElementById('client-email').value = email;
        });
    }

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

    const completePaymentButton = document.querySelector('.complete-payment');
    if (completePaymentButton) {
        completePaymentButton.addEventListener('click', (event) => {
            event.preventDefault();
            const selectedPaymentMethod = document.querySelector('.payment-method.selected');
            if (selectedPaymentMethod && selectedPaymentMethod.textContent === 'MBWAY') {
                window.location.href = 'mbway-payment.html';
            } else {
                alert('Por favor, selecione MBWAY como método de pagamento.');
            }
        });
    }

    const completeReservationButton = document.querySelector('.complete-reservation');
    if (completeReservationButton) {
        
        completeReservationButton.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Reserva efetuada com sucesso');
            window.location.href = 'gestao-operacoes.html';
        });
    }

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

    const cameraAccess = document.getElementById('camera-access');
    if (cameraAccess) {
        cameraAccess.addEventListener('click', function() {
            window.location.href = 'security-cameras.html';
        });
    }
    
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const dateElement = document.querySelector('.new-end-time .date');
    const costElement = document.querySelector('.cost p');
    const extendButton = document.querySelector('.extend-button');
    const cancelButton = document.querySelector('.cancel-button');

    if (hoursInput && minutesInput && dateElement && costElement && extendButton && cancelButton) {
        const initialDate = new Date(2024, 4, 11, 12, 0, 0);
        const costPerHour = 1;

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

        updateDateAndCost();
    }

    const extendReservationButton = document.querySelector('.extend-reservation');
    if (extendReservationButton) {
        extendReservationButton.addEventListener('click', function() {
            window.location.href = 'extend-time.html';
        });
    }

    const editProfileButtonGestor = document.getElementById('edit-profile-button-gestor');
    if (editProfileButtonGestor) {
        editProfileButtonGestor.addEventListener('click', function() {
            window.location.href = 'edit-profile-gestor.html';
        });
    }
    const editProfileButton = document.getElementById('edit-profile-button');
    if (editProfileButton) {
        editProfileButton.addEventListener('click', function() {
            window.location.href = 'edit-profile.html';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Inicializar o mapa
    // Redirecionar para a página de lista quando a aba "Lista" for clicada
    const listTab = document.querySelector('.tab[data-tab="list"]');
    if (listTab) {
        listTab.addEventListener('click', function() {
            window.location.href = 'parking-reservations.html';
        });
    }

    if (document.getElementById('map')) {
        var map = L.map('map').setView([38.736946, -9.142685], 13); // Coordenadas de Lisboa como exemplo

        // Adicionar camada de tiles do OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Definir o ícone personalizado
        var customIcon = L.icon({
            iconUrl: 'images/parking_space.jpg',
            iconSize: [32, 32], // tamanho do ícone
            iconAnchor: [16, 32], // ponto do ícone que corresponde à posição do marcador
            popupAnchor: [0, -32] // ponto a partir do qual o popup deve abrir em relação ao ícone
        });

        // Adicionar marcadores de exemplo para parques de estacionamento
var parkingSpots = [
    { "name": "Parque 1", "lat": 38.736946, "lng": -9.142685 },
    { "name": "Parque 2", "lat": 38.749946, "lng": -9.135685 },
    { "name": "Parque 3", "lat": 38.744946, "lng": -9.145685 },
    { "name": "Parque 4", "lat": 38.755946, "lng": -9.148685 },
    { "name": "Parque 5", "lat": 38.753946, "lng": -9.145685 },
    { "name": "Parque 6", "lat": 38.73946, "lng": -9.155685 },
    { "name": "Parque 7", "lat": 38.733946, "lng": -9.145685 }
];
        parkingSpots.forEach(function(spot) {
            var marker = L.marker([spot.lat, spot.lng], { icon: customIcon }).addTo(map)
                .bindPopup(spot.name)
                .bindTooltip(spot.name); // Adicionar tooltip com o nome do parque

            marker.on('click', function() {
                window.location.href = `reservation.html?park=${encodeURIComponent(spot.name)}`;
            });
        });
    }

    // Redirecionar para a página de mapa quando a aba "Mapa" for clicada
    const mapTab = document.querySelector('.tab[data-tab="map"]');
    if (mapTab) {
        mapTab.addEventListener('click', function() {
            window.location.href = 'map.html';
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Slideshow functionality
    let slideIndex = 1;
    showSlides(slideIndex);

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";  
        dots[slideIndex-1].className += " active";
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    document.querySelector('.prev').addEventListener('click', function() {
        plusSlides(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        plusSlides(1);
    });

    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide(index + 1);
        });
    });

    // Initial slide
    showSlides(slideIndex);

    // Redirecionar ao clicar no acesso às câmeras
    const cameraAccess = document.getElementById('camera-access');
    if (cameraAccess) {
        cameraAccess.addEventListener('click', function() {
            window.location.href = 'security-cameras.html';
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    // Função para alternar entre abas
    const tabButtons = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            button.classList.add('active');

            const tab = button.getAttribute('data-tab');
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tab).classList.add('active');
        });
    });

});

document.addEventListener("DOMContentLoaded", function() {
    // Função para abrir o pop-up
    function openPopup(clientInfo) {
        const popup = document.getElementById("popup");
        document.getElementById("client-name").textContent = `Nome: ${clientInfo.name}`;
        document.getElementById("client-plate").textContent = `Matrícula: ${clientInfo.plate}`;
        document.getElementById("client-car").textContent = `Carro: ${clientInfo.car}`;
        document.getElementById("client-time").textContent = `Tempo: ${clientInfo.time}`;
        document.getElementById("client-amount").textContent = `Montante a Pagar: ${clientInfo.amount}`;
        popup.style.display = "flex";
    }

    // Função para fechar o pop-up
    function closePopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
    }

    // Adicionar evento de clique para as caixas de operação
    const operationItems = document.querySelectorAll(".operation-item");
    operationItems.forEach(item => {
        item.addEventListener("click", function() {
            const clientId = this.getAttribute("data-client");
            const clientInfo = {
                "joao-pedro": {
                    name: "João Pedro",
                    plate: "ABCD10F",
                    car: "PEUGEOT 2006",
                    time: "11/05/2024 às 15:00",
                    amount: "5,59 €"
                },
                "tomas-rocha": {
                    name: "Tomás Rocha",
                    plate: "ABCD10F",
                    car: "PEUGEOT 2006",
                    time: "11/05/2024 às 15:00",
                    amount: "5,59 €"
                },
                "tiago-hotel": {
                    name: "Tiago Hotel",
                    plate: "ABCD10F",
                    car: "PEUGEOT 2006",
                    time: "11/05/2024 às 15:00",
                    amount: "5,59 €"
                }
            };
            openPopup(clientInfo[clientId]);
        });
    });

    // Fechar o pop-up ao clicar no botão de fechar
    document.querySelector(".close-button").addEventListener("click", closePopup);

    // Fechar o pop-up ao clicar fora do conteúdo do pop-up
    document.getElementById("popup").addEventListener("click", function(event) {
        if (event.target === this) {
            closePopup();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Função para abrir o pop-up
    function openPopup(clientInfo) {
        const popup = document.getElementById("popup");
        document.getElementById("client-name").textContent = `Nome: ${clientInfo.name}`;
        document.getElementById("client-plate").textContent = `Matrícula: ${clientInfo.plate}`;
        document.getElementById("client-car").textContent = `Carro: ${clientInfo.car}`;
        document.getElementById("client-time").textContent = `Tempo: ${clientInfo.time}`;
        document.getElementById("client-amount").textContent = `Montante a Pagar: ${clientInfo.amount}`;

        document.getElementById("edit-name").value = clientInfo.name;
        document.getElementById("edit-plate").value = clientInfo.plate;
        document.getElementById("edit-car").value = clientInfo.car;
        document.getElementById("edit-time").value = clientInfo.time;
        document.getElementById("edit-amount").value = clientInfo.amount;

        popup.style.display = "flex";
    }

    // Função para fechar o pop-up
    function closePopup() {
        const popup = document.getElementById("popup");
        popup.style.display = "none";
    }

    // Alternar para o modo de edição
    function switchToEditMode() {
        document.getElementById("edit-fields").style.display = "block";
        document.querySelectorAll(".popup-content p").forEach(p => p.style.display = "none");
        document.getElementById("edit-button").style.display = "none";
        document.getElementById("confirm-button").style.display = "block";
    }

    // Salvar as mudanças e alternar para o modo de visualização
    function saveChanges() {
        const name = document.getElementById("edit-name").value;
        const plate = document.getElementById("edit-plate").value;
        const car = document.getElementById("edit-car").value;
        const time = document.getElementById("edit-time").value;
        const amount = document.getElementById("edit-amount").value;

        document.getElementById("client-name").textContent = `Nome: ${name}`;
        document.getElementById("client-plate").textContent = `Matrícula: ${plate}`;
        document.getElementById("client-car").textContent = `Carro: ${car}`;
        document.getElementById("client-time").textContent = `Tempo: ${time}`;
        document.getElementById("client-amount").textContent = `Montante a Pagar: ${amount}`;

        document.getElementById("edit-fields").style.display = "none";
        document.querySelectorAll(".popup-content p").forEach(p => p.style.display = "block");
        document.getElementById("edit-button").style.display = "block";
        document.getElementById("confirm-button").style.display = "none";
    }

    // Adicionar evento de clique para as caixas de operação
    const operationItems = document.querySelectorAll(".operation-item");
    operationItems.forEach(item => {
        item.addEventListener("click", function() {
            const clientId = this.getAttribute("data-client");
            const clientInfo = {
                "joao-pedro": {
                    name: "João Pedro",
                    plate: "ABCD10F",
                    car: "PEUGEOT 2006",
                    time: "11/05/2024 às 15:00",
                    amount: "5,59 €"
                },
                "tomas-rocha": {
                    name: "Tomás Rocha",
                    plate: "AAAA10",
                    car: "FIAT 2015",
                    time: "11/05/2024 às 15:00",
                    amount: "5,59 €"
                },
                "tiago-hotel": {
                    name: "Tiago Hotel",
                    plate: "ABCD10F",
                    car: "PEUGEOT 2006",
                    time: "11/05/2024 às 15:00",
                    amount: "5,59 €"
                },
                'ana-silva': {
                    name: 'Ana Silva',
                    plate: 'IJKL30M',
                    car: 'FORD 2015',
                    time: '11/05/2024 às 17:00',
                    amount: '7,00 €'
                },
                'carlos-santos': {
                    name: 'Carlos Santos',
                    plate: 'MNOP40N',
                    car: 'FIAT 2018',
                    time: '11/05/2024 às 18:00',
                    amount: '8,00 €'
                },
                'maria-oliveira': {
                    name: 'Maria Oliveira',
                    plate: 'QRST50P',
                    car: 'BMW 2020',
                    time: '11/05/2024 às 19:00',
                    amount: '9,00 €'
                },
                'pedro-pereira': {
                    name: 'Pedro Pereira',
                    plate: 'UVWX60Q',
                    car: 'AUDI 2021',
                    time: '11/05/2024 às 20:00',
                    amount: '10,00 €'
                }
            };
            openPopup(clientInfo[clientId]);
        });
    });

    // Fechar o pop-up ao clicar no botão de fechar
    document.querySelector(".close-button").addEventListener("click", closePopup);

    // Fechar o pop-up ao clicar fora do conteúdo do pop-up
    document.getElementById("popup").addEventListener("click", function(event) {
        if (event.target === this) {
            closePopup();
        }
    });

    // Alternar para o modo de edição ao clicar no botão "Editar"
    document.getElementById("edit-button").addEventListener("click", switchToEditMode);

    // Salvar as mudanças ao clicar no botão "Confirmar"
    document.getElementById("confirm-button").addEventListener("click", saveChanges);
});

document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const switchAccountLink = document.getElementById("switch-link");
    const accountTitle = document.getElementById("account-title");
    const accountIcon = document.getElementById("account-icon");
    let isManagerAccount = true;

    switchAccountLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (isManagerAccount) {
            accountTitle.innerHTML = "Conta de Cliente";
            switchAccountLink.textContent = "Mudar para conta de gestor";
            accountIcon.src = "images/customer-icon.jpg"; // Substitua pelo ícone de gestor
            isManagerAccount = false;
        } else {
            accountTitle.innerHTML = "Conta de Gestor <br>de Parque";
            switchAccountLink.textContent = "Mudar para conta de cliente";
            accountIcon.src = "images/gestor.png"; // Substitua pelo ícone de cliente
            isManagerAccount = true;
        }
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = loginForm.username.value;
        const password = loginForm.password.value;

        // Aqui você pode adicionar a lógica de autenticação, se necessário
        // Por exemplo, verificar username e password

        if (isManagerAccount) {
            window.location.href = "gestor-dashboard.html";
        } else {
            window.location.href = "customer-dashboard.html";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("searchButton");
    const searchContainer = document.getElementById("searchContainer");
    const searchInput = document.getElementById("searchInput");

    searchButton.addEventListener("click", function () {
        if (searchContainer.style.display === "none" || searchContainer.style.display === "") {
            searchContainer.style.display = "block";
            searchInput.focus();
        } else {
            searchContainer.style.display = "none";
        }
    });

    searchInput.addEventListener("input", function () {
        const filter = searchInput.value.toLowerCase();
        const operationItems = document.querySelectorAll(".operation-item");
        
        operationItems.forEach(function (item) {
            const name = item.querySelector(".info p").innerText.toLowerCase();
            if (name.includes(filter)) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }
        });
    });
});