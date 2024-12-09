const form = document.getElementById("formCliente");
const tabela = document.getElementById("tabelaCliente");
const btnEnviar = document.getElementById("btnEnviar");
const btnVoltar = document.getElementById("btnVoltar");

// Função para alternar visibilidade com animação
function toggleVisibility(hideElement, showElement) {
  hideElement.classList.add("fade-out");
  setTimeout(() => {
    hideElement.classList.add("hidden");
    hideElement.classList.remove("fade-out");

    showElement.classList.remove("hidden");
    showElement.classList.add("fade-in");

    setTimeout(() => {
      showElement.classList.remove("fade-in");
    }, 500);
  }, 500);
}

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  const nome = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const obs = document.getElementById("obs").value;

  if (nome && email && telefone && obs) {
    document.getElementById("nomeCliente").innerText = nome;
    document.getElementById("emailCliente").innerText = email;
    document.getElementById("telefoneCliente").innerText = telefone;
    document.getElementById("obsCliente").innerText = obs;

    toggleVisibility(form, tabela);
    btnVoltar.classList.remove("hidden");
  } else {
    alert("Por favor, preecha todos os campos obrigatórios.");
  }
});

btnVoltar.addEventListener("click", () => {
  toggleVisibility(tabela, form);
  btnVoltar.classList.add("hidden");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("obs").value = "";
});
