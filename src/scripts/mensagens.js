// checar em qual página está para rodar a função certa
if (window.location.pathname.includes("contato.html")) {
    salvar();
}

if (window.location.pathname.includes("mensagens.html")) {
    carregar();
}

function buscarDados() {
    return JSON.parse(localStorage.getItem("dadosSalvos")) || [];
}
// Função para salvar dados no localStorage
function salvar() {
    // Cria o array e obtém os dados do localStorage convertendo novamente para o array
    var email = document.getElementById("dado1").value;
    console.log('testando',document.getElementById("dado1"));
    var mensagem = document.getElementById("dado2").value;

    // Verificação para saber se todos os dados foram preenchidos
    if (email !== "" && mensagem !== "") {
        alert("Mensagem enviada com sucesso.");

        // Definindo um objeto
        var dados = { email, mensagem };

        // Recupera o array existente no localStorage ou cria um novo
        let dadosSalvos = buscarDados();

        // Transformando esse objeto para um array
        dadosSalvos.push(dados);

        // Armazena os dados no localStorage
        localStorage.setItem("dadosSalvos", JSON.stringify(dadosSalvos));

    } else {
        alert("Por favor, preencha todos os campos");
    }
}

// Função para carregar dados do localStorage
function carregar() {
    const container = document.getElementById('containerCards');
    
    // Recupera os dados salvos no localStorage ou cria um array vazio
    let dadosSalvos = buscarDados();
     console.log(dadosSalvos);
    // Verifica se há dados salvos e os exibe
    if (dadosSalvos) {
        dadosSalvos.forEach((dado,index) => {
            // Cria os cards
            const card = `
            <div class="card">
              <h3 class="text">${dado.email}</h3>
              <p class="text">${dado.mensagem}</p>
              <button class="buttons" onclick='deletarItem(${index})'>Excluir</button>
            </div>
            
            `
            container.innerHTML += card;
        });
    } else {
        alert('Erro, não há mensagens para mostrar no momento.');
    }
    
}

// Função para limpar todos dados do localStorage
function limpar() {
    localStorage.clear();
    alert('Todos os itens foram excluídos');
    location.reload();
}

// função para limpar somente um card 
function deletarItem(index) {
    const dadosSalvos = buscarDados();
    dadosSalvos.splice(index, 1)
    localStorage.setItem("dadosSalvos", JSON.stringify(dadosSalvos));
    location.reload();
}