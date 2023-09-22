document.getElementById("foto1").addEventListener("click", function() {
    mostrarImagen("css/nuestra primera foto juntos.jpg");
});

document.getElementById("foto2").addEventListener("click", function() {
    mostrarImagen("css/tu foto faborita.jpg");
});

document.getElementById("foto3").addEventListener("click", function() {
    mostrarImagen("css/mi foto faborita.jpg");
});

document.getElementById("sorpresa").addEventListener("click", function() {
    mostrarImagenSorpresa();
});

function mostrarImagen(url) {
    document.getElementById("imagen").src = url;
    document.getElementById("imagen-container").style.display = "block";
}

function mostrarImagenSorpresa() {
    // Puedes cambiar la URL de la imagen de sorpresa aquí
    var urlSorpresa = "https://www.bloomberglinea.com/resizer/-duYn76ZQbqQ4X1XzJkLSOxu7p0=/600x0/filters:format(webp):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/NJKR6OXHYZA5TKBTNL66O5BM3A.jpg";
    mostrarImagen(urlSorpresa);
}
