let amigos = [];

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
  // Cargar datos guardados (persistencia)
  const datosGuardados = localStorage.getItem("amigos");
  if (datosGuardados) {
    amigos = JSON.parse(datosGuardados);
    actualizarLista();
  }

  // Asociar eventos a botones
  document.getElementById("btnAgregar").addEventListener("click", adicionarAmigo);
  document.querySelector(".button-draw").addEventListener("click", sortearAmigo);
});

// Función para agregar amigo a la lista
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor inserte un nombre válido");
    return;
  }

  amigos.push(nombre);
  guardarAmigos();
  actualizarLista();
  input.value = "";
}

// Función para guardar lista en localStorage
function guardarAmigos() {
  localStorage.setItem("amigos", JSON.stringify(amigos));
}

// Función para mostrar la lista actualizada
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${amigo}`;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Por favor inserte al menos un nombre en la lista");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const elegido = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const li = document.createElement("li");
  li.textContent = `✨ El amigo secreto es: ${elegido} ✨`;
  resultado.appendChild(li);
}
