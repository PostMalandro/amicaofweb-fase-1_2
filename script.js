function atualizarSaudacao() {
  const agora = new Date();
  const hora = agora.getHours();
  let saudacao = "Bem-vindo ao Amicão!";

  if (hora >= 5 && hora < 12) {
    saudacao = "Bom dia! Que tal cuidar do seu pet hoje?";
  } else if (hora >= 12 && hora < 18) {
    saudacao = "Boa tarde! O Amicão está pronto para receber seu pet.";
  } else {
    saudacao = "Boa noite! Aproveite para agendar o banho ou a tosa do seu pet.";
  }

  const elemento = document.getElementById("saudacao");
  if (elemento) {
    elemento.textContent = saudacao;
  }
}

atualizarSaudacao();

const formCadastro = document.getElementById("formCadastro");
if (formCadastro) {
  formCadastro.addEventListener("submit", function (evento) {
    evento.preventDefault(); 

    const nomeCliente = document.getElementById("nomeCliente").value;
    const nomePet = document.getElementById("nomePet").value;
    const mensagem = document.getElementById("mensagemCadastro");

    mensagem.textContent =
      "Cadastro realizado com sucesso para " + nomeCliente + " e o pet " + nomePet + ".";

    formCadastro.reset();
  });
}

const formAgendamento = document.getElementById("formAgendamento");
if (formAgendamento) {
  formAgendamento.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const servico = document.getElementById("servicoAg").value;
    const data = document.getElementById("dataAg").value;
    const hora = document.getElementById("horaAg").value;
    const resumo = document.getElementById("resumoAgendamento");

    const formaRadio = document.querySelector("input[name='forma']:checked");
    const formaTexto = formaRadio ? formaRadio.value : "";

    if (!servico || !data || !hora || !formaTexto) {
      resumo.textContent =
        "Preencha todos os campos obrigatórios para concluir o agendamento.";
      return;
    }

    const partesData = data.split("-");
    let dataFormatada = data;
    if (partesData.length === 3) {
      dataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0];
    }

    resumo.textContent =
      "Agendamento confirmado: " +
      servico +
      " em " +
      dataFormatada +
      " às " +
      hora +
      " - Forma de atendimento: " +
      formaTexto +
      ".";

    formAgendamento.reset();
  });
}
