var titulo = window.document.getElementById('titulo')
var nome = window.prompt('Qual é o seu nome?')
if(nome == null){
    titulo.innerHTML = `Olá, bem-vindo ao meu potfólio!`
}else{
titulo.innerHTML = `Olá ${nome}, bem-vindo ao meu potfólio!`
}