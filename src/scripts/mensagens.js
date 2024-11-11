// checar em qual página está para rodar a função certa
if (window.location.pathname.includes("contato.html")) {
    salvar();
}

if (window.location.pathname.includes("mensagens.html")) {
    carregar();
}

// Função para salvar dados no localStorage
function salvar() {
    // Cria o array e obtém os dados do localStorage convertendo novamente para o array
    var email = document.getElementById("dado1").value;
    var mensagem = document.getElementById("dado2").value;

    // Verificação para saber se todos os dados foram preenchidos
    if (email !== "" && mensagem !== "") {
        alert("Mensagem enviada com sucesso.");

        // Definindo um objeto
        var dados = { email, mensagem };

        // Recupera o array existente no localStorage ou cria um novo
        const dadosSalvos = JSON.parse(localStorage.getItem("dadosSalvos")) || [];

        // Transformando esse objeto para um array
        dadosSalvos.push(dados);

        // Armazena os dados no localStorage
        localStorage.setItem("dadosSalvos", JSON.stringify(dadosSalvos));

        // Chama a função carregar para atualizar os cards
        carregar();

    } else {
        alert("Por favor, preencha todos os campos");
    }
}

// Função para carregar dados do localStorage
function carregar() {
    const container = document.getElementById('containerCards');

    // Recupera os dados salvos no localStorage ou cria um array vazio
    const dadosSalvos = JSON.parse(localStorage.getItem("dadosSalvos")) || [];

    // Verifica se há dados salvos e os exibe
    if (dadosSalvos && Array.isArray(dadosSalvos)) {
        dadosSalvos.forEach(dado => {
            console.log(dado);

            // Cria os cards
            const card = document.createElement('div');
            card.classList.add('card'); // Adicionando a classe para ser estilizada

            const cardTitulo = document.createElement('h3');
            cardTitulo.textContent = dado.email; // Exibe o email como título
            card.classList.add('text')
            card.appendChild(cardTitulo);

            const cardDescricao = document.createElement('p');
            cardDescricao.textContent = dado.mensagem; // Atribui a mensagem como descrição
            card.classList.add('text')
            card.appendChild(cardDescricao);
             
            //adicionando os botoes
            const cardButton = document.createElement('button');
            card.classList.add('buttons')
            card.appendChild(cardButton);

            // Adiciona o card ao contêiner
            container.appendChild(card);
        });
    } else {
        alert('Erro, não há mensagens para mostrar no momento.');
    }
}

// Função para limpar dados do localStorage
function limpar() {
    localStorage.clear();
    alert('Todos os itens foram excluídos');
}

function limparDadoUnico () {

}