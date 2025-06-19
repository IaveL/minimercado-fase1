document
  .getElementById("formCadastro")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Conta criada com sucesso!");

    // Limpa o formulário após criar a conta
    this.reset();
  });
