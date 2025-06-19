function agendar() {
  const dataInput = document.getElementById("data");
  const horaInput = document.getElementById("hora");

  const data = dataInput.value;
  const hora = horaInput.value;

  if (!data || !hora) {
    alert("Por favor, selecione a data e o horário.");
    return;
  }

  alert(`Agendamento confirmado para:\n📅 ${data} às 🕒 ${hora}`);

  // Limpar inputs após agendamento
  dataInput.value = "";
  horaInput.value = "";
}
