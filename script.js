function reloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var min = fecha.getMinutes().toString().padStart(2, "0");
    var seg = fecha.getSeconds().toString().padStart(2, "0");
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1;
    var año = fecha.getFullYear();
    var ampm = hora >= 12 ? 'PM' : 'AM';
    hora = hora % 12;
    hora = hora ? hora : 12; // La hora '0' se convierte en '12'
    var horaFormateada = hora + ':' + min + ':' + seg + ' ' + ampm;

    document.getElementById("reloj").innerHTML = `${horaFormateada}<br>${dia}/${mes}/${año}`;
}

setInterval(reloj, 1000);
document.addEventListener("DOMContentLoaded", function() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100; // Número de estrellas a generar

    function generateRandomPosition() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
    }

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        const { x, y } = generateRandomPosition();
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;

        starsContainer.appendChild(star);
    }

    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
});
