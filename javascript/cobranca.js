document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#calendar", {
        mode: "multiple",
        dateFormat: "Y-m-d",
        locale: "pt",
    });

    flatpickr("#startTime", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
    });

    flatpickr("#endTime", {
        enableTime: true,
        noCalendar: true,
        dateFormat: "H:i",
        time_24hr: true,
    });

    document.querySelector('.confirm-button').addEventListener('click', function() {
        const selectedDates = document.getElementById('calendar').value;
        const startTime = document.getElementById('startTime').value;
        const endTime = document.getElementById('endTime').value;
        const price = document.getElementById('price').value;
        const freeNight = document.getElementById('freeNight').checked;

        alert(`Datas Selecionadas: ${selectedDates}\nDe: ${startTime}\nAté: ${endTime}\nPreço: ${price}\nGrátis nas horas noturnas: ${freeNight}`);
        window.location.href = 'gestor-dashboard.html';
    });
});
