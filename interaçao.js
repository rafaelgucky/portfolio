var titulo = window.document.getElementById('titulo')
var nome = window.prompt('Qual é o seu nome?')
if(nome == null){
    titulo.innerHTML = `Olá, bem-vindo(a) ao meu potfólio!`
}else{
titulo.innerHTML = `Olá ${nome}, bem-vindo(a) ao meu potfólio!`
}

function menu(){
    var menu = window.document.getElementById('item')
    menu.style.display = 'inline-block'
}
function fecha(){
    var tudo = window.document.getElementById('tudo')
    var menu = window.document.getElementById('item')
    menu.style.display = 'none'
}


