let produtos = [];

const tempoExpiracao = 8 * 60 * 60 * 1000; // 8 horas em milissegundos
const armazenamento = localStorage.getItem("estoque");

// Verifica se existe dados no localStorage e se não expiraram
if (armazenamento) {
  const dados = JSON.parse(armazenamento);
  const tempoArmazenado = dados.timestamp;

  if (new Date().getTime() - tempoArmazenado <= tempoExpiracao) {
    produtos = dados.produtos;
    atualizarTabela();
  } else {
    localStorage.removeItem("estoque"); // Apaga os dados após 8 horas
  }
}

function adicionarProduto() {
  const produto = document.getElementById('produto').value;
  const quantidade = document.getElementById('quantidade').value;

  if (produto && quantidade) {
    produtos.push({ nome: produto, quantidade: quantidade });
    salvarDados();
    atualizarTabela();
    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
  } else {
    alert('Por favor, preencha o nome e a quantidade do produto.');
  }
}

function atualizarTabela() {
  const tabelaProdutos = document.getElementById('tabelaProdutos').getElementsByTagName('tbody')[0];
  tabelaProdutos.innerHTML = '';

  produtos.forEach((produto, index) => {
    const row = tabelaProdutos.insertRow();
    const nomeCell = row.insertCell(0);
    const quantidadeCell = row.insertCell(1);
    const acaoCell = row.insertCell(2);

    nomeCell.textContent = produto.nome;
    quantidadeCell.textContent = produto.quantidade;

    const removerButton = document.createElement('button');
    removerButton.textContent = 'Remover';
    removerButton.onclick = function () {
      removerProduto(index);
    };
    acaoCell.appendChild(removerButton);
  });
}

function removerProduto(index) {
  produtos.splice(index, 1);
  salvarDados();
  atualizarTabela();
}

function copiarLista() {
  const dataAtual = new Date().toLocaleDateString('pt-BR');
  let listaFormatada = 'Contagem de Estoque\n\n';

  produtos.forEach(produto => {
    listaFormatada += `* ${produto.nome}: ${produto.quantidade} unidades\n`;
  });

  listaFormatada += `\nTotal de itens: ${produtos.length}\nData: ${dataAtual}`;

  // Copiar a lista formatada para a área de transferência
  navigator.clipboard.writeText(listaFormatada).then(() => {
    alert('Lista copiada com sucesso! Agora você pode colar no WhatsApp.');
  }).catch(err => {
    alert('Falha ao copiar a lista. Tente novamente.');
  });
}

function salvarDados() {
  const dados = {
    produtos: produtos,
    timestamp: new Date().getTime()
  };
  localStorage.setItem("estoque", JSON.stringify(dados));
}

function abrirCalculadora() {
  document.getElementById('modalCalculadora').style.display = 'flex';
}

function fecharCalculadora() {
  document.getElementById('modalCalculadora').style.display = 'none';
}

function calcularArea() {
  const altura = parseInt(document.getElementById('altura').value);
  const largura = parseInt(document.getElementById('largura').value);
  
  if (isNaN(altura) || isNaN(largura)) {
    alert('Por favor, insira valores válidos para altura e largura.');
    return;
  }

  const total = altura * largura;
  document.getElementById('resultadoArea').textContent = `Quantidade total: ${total}`;
}

function fecharModalAviso() {
  document.getElementById('modalAviso').style.display = 'none';
}

// Exibir o modal de aviso ao carregar a página
window.onload = function() {
  document.getElementById('modalAviso').style.display = 'flex';
};
