function atacar() {
  const nome = document.getElementById('nome').value;
  const idade = document.getElementById('idade').value;
  const tipo = document.getElementById('tipo').value;

  // Verifica se o nome ou idade estão em branco
  if (nome.trim() === '' || idade.trim() === '') {
    alert('Por favor, preencha todos os campos.');
    return; // Encerra a execução se algum campo estiver em branco
  }

  // Restante do código para determinar o ataque e exibir a mensagem
  let ataque;
  if (tipo === 'mago') {
    ataque = 'magia';
  } else if (tipo === 'guerreiro') {
    ataque = 'espada';
  } else if (tipo === 'monge') {
    ataque = 'artes marciais';
  } else if (tipo === 'ninja') {
    ataque = 'shuriken';
  } else {
    ataque = 'não possui um ataque definido';
  }

  const mensagem = `<h2>${tipo} atacou usando ${ataque}</h2>`;
  document.getElementById('mensagemAtaque').innerHTML = mensagem;
  document.getElementById('mensagemAtaque').classList.add('active');
}
