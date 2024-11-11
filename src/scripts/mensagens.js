// Função para salvar dados do localstorage
function salvar (){
    // cria o array e obtem os dados do localStorage convertendo novamente para o array
    const dadosSalvos = JSON.parse(localStorage.getItem("dadosSalvos")) || [];

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
 //declarando uma variavel para recuperar o array existente no localstorage
 const dadosRecuperados = JSON.parse(localStorage.getItem("dadosRecuperados"));
 

 //verificação para saber se tem contedo  no array localziado no localStorage
 if (dadosRecuperados === null){
    console.log('tu é pica mermo')
 }
 
}

// // Função para limpar dadaos do localstorage
function limpar(){
    localStorage.clear();
}
