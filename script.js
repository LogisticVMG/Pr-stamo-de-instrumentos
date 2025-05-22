// ... dentro de window.onload …

document.getElementById("formularioPrestamo")
  .addEventListener("submit", function(e) {
    e.preventDefault();

    const datos = {
      nombre:      document.getElementById("nombre").value,
      rol:         document.getElementById("rol").value,
      instrumento: document.getElementById("instrumento").value,
      municipio:   document.getElementById("municipio").value,
      fecha:       document.getElementById("fecha").value,
      correo:      document.getElementById("correo").value
    };

    fetch("https://script.google.com/macros/s/AKfycbxQbP402L9MZNAeqyKXemfBQ8pThsK0xBO0vNs93Kbx8EB1YrEe6OE7Za2SK1swfiJY7A/exec", {
      method:  "POST",
      mode:    "no-cors",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(datos),
      
    })
    .then(res => res.text())
    .then(() => {
      alert("¡Solicitud enviada correctamente!");
      this.reset();
    })
    .catch(err => {
      console.error(err);
      alert("Error al enviar la solicitud.");
    });
});
