$(document).ready(function() {
  // Al hacer clic en una imagen del carrusel
  $('.expandable-img').on('click', function() {
    // Obtén la ruta de la imagen seleccionada
    var imagePath = $(this).attr('src');

    // Actualiza la imagen principal con la nueva imagen y aplica los estilos
    $('.main-image')
      .attr('src', imagePath)
      .removeClass('h-75 object-fit-cover') // Elimina las clases para evitar conflictos
      .addClass('h-75 object-fit-cover'); // Agrega las clases deseadas
  });
});