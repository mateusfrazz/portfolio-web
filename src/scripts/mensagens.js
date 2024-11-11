//checar em qual página está para rodar a função certa
// if (window.location.pathname.includes("contato.html")) {
//     salvar();
//  }
 
//  if (window.location.pathname.includes("mensagens.html")) {
//     carregar();
//  }

const dadosSalvos = JSON.parse(localStorage.getItem("dadosSalvos")) || [];
// Função para salvar dados do localstorage
function salvar (){
    // cria o array e obtem os dados do localStorage convertendo novamente para o array
    var email = document.getElementById("dado1").value;
    var mensagem = document.getElementById("dado2").value;

  //verificação para saber se todos os dados foram preenchidos
  if (email !== "" &&  mensagem !==""){
    alert("Mensagem enviada com sucesso.");

    //  Definindo um objeto
  var dados = {email , mensagem, };

  //transformando esse objeto para um array
   dadosSalvos.push(dados);
 
    // Armazena os dados no localStorage
  localStorage.setItem("dadosSalvos", JSON.stringify(dadosSalvos));

  //solicita para o usuario informar todos os campos
} else{
  alert("Por favor, preencha todos os campos");
}
  
}

// função para carregar dados do localstorage
function carregar(){
    const container = document.getElementById('containerCards')
 //declarando uma variavel para recuperar o array existente no localstorage
 if (dadosSalvos && Array.isArray(dadosSalvos)) {
    dadosSalvos.forEach(dado => {
        console.log(dados); // Exibe cada item
        const card = document.createElement ('div');
        card.classList.add('card')

        
    });
} else {
    alert('Erro, não há mensagens para mostrar no momento.')
}
}



// // Função para limpar dadaos do localstorage
function limpar(){
    localStorage.clear();
    alert('Todos os itens foram excluidos')
}

