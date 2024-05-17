const teclas = document.querySelectorAll(".tecla");

teclas.forEach(tecla => {
  tecla.addEventListener('click', function() {
    const sonidoId = this.classList[1].replace('tecla_', '');
    const sonido = document.querySelector(`#sonido_tecla_${sonidoId}`);
    if (sonido) {      
      sonido.play();
    }
  });
});