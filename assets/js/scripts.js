//AOS
AOS.init();
//zoom img
let ZoomImg = document.querySelectorAll('.zoom');

ZoomImg.forEach(image => {
  image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(1.2)';
  });

  image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
  });
});
//modal
const miVentanaEmergente = document.getElementById('ventanaEmergente')
const modal = document.getElementById('modalAlert')
modal.addEventListener('click', function(){

    const contenidoAlerta = document.getElementById('titleJohn')
    const tituloAlerta = miVentanaEmergente.querySelector('.modal-body')

})
//json
$(document).ready(function () {
    $('#MostrarNuevahistoria').on('click', mostrar);

    function MostrarNuevaHistoria() {
        $.ajax({
            url: 'https://jotafoxx.github.io/calculadora/imagenes.json',
            method: 'GET',
            dataType: 'json',
            success: function (response) {
                console.log(response);
                response.forEach(gears => {
                    const nuevaSaga = `
                        <div class="col-md-6">
                            <div class="zoom px-3" data-aos="fade-right" data-aos-duration="1500"><img src="${gears.url}" alt=""></div>
                        </div>
                        <div class="col-md-6">
                            <div class="zoom px-3" data-aos="flip-down" data-aos-duration="1500"><img src="${gears.url}" alt=""></div>
                        </div>
                        </div>`;
                    $('#NuevaHistoria').append(nuevaSaga);
                });
            },
            error: function (error) {
                console.error('Error:', error);
            }
        });
    }

    function mostrar() {
        // Aquí iría la implementación de cargar más juegos.
        MostrarNuevaHistoria();
    }
});
//Popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

// Tiny slider
let slider = tns({
    container: '.my-slider',
    items: 1,
    autoplay: true,
    nav: false,
   // axis: "vertical",
    controlsText: [" ", " "],
    autoplayText: [" ", " "],
    responsive: {
      640: {
        edgePadding: 0,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3
      }
    }
});