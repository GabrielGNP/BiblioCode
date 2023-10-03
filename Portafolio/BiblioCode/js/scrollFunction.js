
 
 document.addEventListener('DOMContentLoaded', function() {
    
     // Escucha eventos de rueda del mouse para permitir el desplazamiento
    $gi("shelf").addEventListener('wheel', function(e) {
        // Ajusta la velocidad de desplazamiento
        const scrollSpeed = 20;

        // Calcula la cantidad de desplazamiento basada en la dirección de la rueda
        const deltaY = e.deltaY > 0 ? scrollSpeed : -scrollSpeed;

        // Realiza el desplazamiento
        $gi("shelf").scrollLeft += deltaY;

        // Evita que la página se desplace
        e.preventDefault();
    });
    

 // Escucha eventos táctiles para permitir el desplazamiento horizontal en dispositivos móviles
 let touchStartX = null;

 $gi("shelf").addEventListener('touchstart', function(e) {
     touchStartX = e.touches[0].clientX;
 });

 $gi("shelf").addEventListener('touchmove', function(e) {
     if (touchStartX === null) {
         return;
     }

     const touchDeltaX = e.touches[0].clientX - touchStartX;
     $i("shelf").scrollLeft -= touchDeltaX;
     touchStartX = e.touches[0].clientX;
 });

 $gi("shelf").addEventListener('touchend', function() {
     touchStartX = null;
 });
});
