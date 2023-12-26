document.addEventListener("DOMContentLoaded", function () {
    // Inicializar popover
    var carritoBtn = document.getElementById('carritoBtn');
    var popover = new bootstrap.Popover(carritoBtn, {
      content: function () {
        var popoverContent = document.getElementById('carritoPopoverContent').cloneNode(true);
        popoverContent.style.display = 'block';
        return popoverContent;
      },
      html: true
    });

    // Manejar clic en "Finaliza tu compra"
    var finalizarCompraBtn = document.getElementById('finalizarCompraBtn');
    finalizarCompraBtn.addEventListener('click', function () {
      // Aquí puedes agregar la lógica para finalizar la compra
      alert('¡Gracias por tu compra!');
      // Cierra el popover después de finalizar la compra (opcional)
      popover.hide();
    });
  });