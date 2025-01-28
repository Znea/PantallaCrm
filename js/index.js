// Función para actualizar la fecha y hora actual
function updateDateTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

    document.getElementById('current-date').textContent = date;
}

// Inicializar el tiempo de carga
const startTime = Date.now();

// Función para calcular y mostrar el tiempo transcurrido
function updateElapsedTime() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000); // En segundos
    const seconds = (elapsedTime % 60).toString().padStart(2, '0');
    const minutes = (Math.floor(elapsedTime / 60)).toString().padStart(2, '0');

    document.getElementById('time-elapsed').textContent = `${minutes}:${seconds}`;
}

// Actualizar cada segundo
setInterval(() => {
    updateDateTime();
    updateElapsedTime();
}, 1000);

document.addEventListener('DOMContentLoaded', function () {
    let inc = document.getElementById('inc');
    let ventas = document.getElementById('ventas');
    let tar = document.getElementById('tar');
    let res = document.getElementById('res');

    inc.addEventListener('click', function () {
        res.innerHTML = `<div class='d-flex align-items-center justify-content-center'>
                            <p class='text-danger fw-bold'>NO HAY INCIDENDIAS</p>
                        </div>`;
        inc.classList.add('selected');
        ventas.classList.remove('selected');
        tar.classList.remove('selected');
    });

    ventas.addEventListener('click', function () {
        ventas.classList.add('selected');
        inc.classList.remove('selected');
        tar.classList.remove('selected');
        res.innerHTML = ` <div>
                            <div class="d-flex justify-content-between">
                                <p>Creación Página web</p>
                                <p>1000€</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Optimización SEO</p>
                                <p>1500€</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Publicidad RRSS</p>
                                <p>500€</p>
                            </div>
                            <div class="mt-5 d-flex justify-content-between border-top border-2 pt-2">
                                <p class="fw-bold">TOTAL</p>
                                <p class="fw-bold">3000€</p>
                            </div>
                        </div>`;
    });

    tar.addEventListener('click', function () {
        tar.classList.add('selected');
        ventas.classList.remove('selected');
        inc.classList.remove('selected');
        res.innerHTML = `<div>
                            <div class="d-flex justify-content-between">
                                <p>Descuento de Antigüedad</p>
                                <p>400€</p>
                            </div>
                            <div class="d-flex justify-content-between">
                                <p>Descuento por compra recurrente</p>
                                <p>200€</p>
                            </div>
                        </div>`;
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBarDanger");
    const targetWidth = 10; // Cambia este valor al porcentaje deseado
    progressBar.style.width = targetWidth + "%";
});

document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.getElementById("progressBarSuccess");
    const targetWidth = 80; // Cambia este valor al porcentaje deseado
    progressBar.style.width = targetWidth + "%";
});
// Llamar inmediatamente para inicializar
updateDateTime();
updateElapsedTime();
