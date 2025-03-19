let amigos = [];

document.getElementById("amigo").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (!nombre) {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        alert("Solo se permiten letras y espacios.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = amigos.map((nombre, i) => 
        `<li>${nombre} <button onclick="eliminarAmigo(${i})">❌</button></li>`
    ).join("");
}

function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Agrega nombres antes de sortear.");
        return;
    }

    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎁`;
}
